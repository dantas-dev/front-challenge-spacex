import { database, apolloServer, Card } from '../__mocks__/apolloServer';
import { createTestClient } from 'apollo-server-integration-testing';

describe('createTestClient', () => {
  const GET_cards = `query Getcards($first: Int, $skip: Int) {
    cards(first: $first, skip: $skip) {
      id
      mission_name
    }
  }`;

  beforeEach(() => {
    database.cards = [
      {
      id: '0',
      mission_name: 'apollo'
      },
      {
      id: '1',
      mission_name: 'stellar'
      },
      {
      id: '2',
      mission_name: 'apollo'
      },
            {
      id: '3',
      mission_name: 'stellar'
      },
      {
      id: '4',
      mission_name: 'apollo'
      },
            {
      id: '5',
      mission_name: 'stellar'
      },
      {
      id: '6',
      mission_name: 'apollo'
      },
            {
      id: '7',
      mission_name: 'stellar'
      },
      {
      id: '8',
      mission_name: 'apollo'
      },
            {
      id: '9',
      mission_name: 'stellar'
      },
    ];
  });

  it('deve chamar uma consulta sem variáveis', async () => {
    const { query } = createTestClient({
      apolloServer,
    });
    const response = await query(GET_cards);

    expect(response).toEqual({ data: { cards: database.cards } });
  });

  it('deve chamar uma consulta com variáveis', async () => {
    const { query } = createTestClient({
      apolloServer,
    });
    const response = await query(GET_cards, {
      variables: {
        first: 1,
      },
    });

    expect(response).toEqual({ data: { cards: database.cards.slice(0, 1) } });
  });

  it('deve haver um erro ao chamar uma consulta', async () => {
    const { query } = createTestClient({
      apolloServer,
    });
    const response = await query(GET_cards, {
      variables: {
        first: -1,
      },
    });

    expect(response).toEqual({
      data: null,
      errors: [
        expect.objectContaining({
          message: '`first` deve ser um número inteiro e positivo',
        }),
      ],
    });
  });


    it('deve chamar a consulta e carregar 10 cards', async () => {
    const { query } = createTestClient({
      apolloServer,
    });
    const response = await query(GET_cards, {
      variables: {
        first: 10,
      },
    });

    expect(response).toEqual({ data: { cards: database.cards.slice(0, 10) } });
  });


  it('deve checar o tipo', async () => {
    const { query } = createTestClient({
      apolloServer,
    });
    const { data } = await query<{ cards: Card[] }>(GET_cards);

    expect(data!.cards).toEqual(database.cards);
  });
});
