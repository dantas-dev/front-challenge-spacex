// @flow

import { convertNodeHttpToRequest, runHttpQuery } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import { DocumentNode, ExecutionResult, print } from 'graphql';
import httpMocks, { RequestOptions, ResponseOptions } from 'node-mocks-http';

const mockRequest = (options: RequestOptions = {}) =>
  httpMocks.createRequest({
    method: 'POST',
    ...options,
  });

const mockResponse = (options: ResponseOptions = {}) =>
  httpMocks.createResponse(options);

export type StringOrAst = string | DocumentNode;
export type Options<T extends object> = { variables?: T };

export type TestClientConfig = {
  apolloServer: ApolloServer;
  extendMockRequest?: RequestOptions;
  extendMockResponse?: ResponseOptions;
};

export type TestQuery = <T extends object = {}, V extends object = {}>(
  operation: StringOrAst,
  options?: Options<V>
) => Promise<ExecutionResult<T>>;

export type TestSetOptions = (options: {
  request?: RequestOptions;
  response?: ResponseOptions;
}) => void;

export function createTestClient({
  apolloServer,
  extendMockRequest = {},
  extendMockResponse = {},
}: TestClientConfig) {

  let mockRequestOptions = extendMockRequest;
  let mockResponseOptions = extendMockResponse;
  const setOptions: TestSetOptions = ({
    request,
    response,
  }: {
    request?: RequestOptions;
    response?: ResponseOptions;
  }) => {
    if (request) {
      mockRequestOptions = request;
    }
    if (response) {
      mockResponseOptions = response;
    }
  };

  const test: TestQuery = async <T extends object = {}, V extends object = {}>(
    operation: StringOrAst,
    { variables }: Options<V> = {}
  ) => {
    const req = mockRequest(mockRequestOptions);
    const res = mockResponse(mockResponseOptions);

    const graphQLOptions = await apolloServer.createGraphQLServerOptions(
      req,
      res
    );

    const { graphqlResponse } = await runHttpQuery([req, res], {
      method: 'POST',
      options: graphQLOptions,
      query: {
        query: typeof operation === 'string' ? operation : print(operation),
        variables,
      },
      request: convertNodeHttpToRequest(req),
    });

    return JSON.parse(graphqlResponse) as T;
  };

  return {
    query: test,
    mutate: test,
    setOptions,
  };
}
