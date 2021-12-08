import { ApolloServer, gql, UserInputError } from 'apollo-server-express';

export interface Card {
  id: string;
  mission_name: string;
}

export const database: {
  cards: Card[];
} = {
  cards: [],
};

const typeDefs = gql`
  type Query {
    cards(first: Int, skip: Int): [Card!]!
  }
  type Card {
  id: String!
  mission_name: String!
  }
`;

const resolvers = {
   Query: {
    cards: (
      parent: null,
      {
        first = 10,
        skip = 0,
      }: {
        first?: number;
        skip?: number;
      }
    ) => {
      if (first < 0) {
        throw new UserInputError('`first` deve ser um número inteiro e positivo');
      }

      return database.cards.slice(skip, skip + first);
    },
  },
};

export const apolloServer = new ApolloServer({ typeDefs, resolvers });
