const answerPhone = require('../src/asyncJest');

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const hi = await answerPhone(true);
    expect(hi).toEqual('Oi!');
  });

  test('ocupado', async () => {
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toEqual(Error('Infelizmente não podemos atender...'));
    }
  });
});

// https://jestjs.io/docs/expect#tothrowerror
// https://app.betrybe.com/course/fundamentals/testes-automatizados-com-jest/jest-testes-assincronos/7cf613f2-d8ba-40b5-8f9d-2619d813a106/conteudos/378ed415-2ddf-454b-aba3-cb2e38b04e46/testando-codigos-assincronos/68cd99ec-5f2e-429f-a816-a1213d4965b6?use_case=side_bar
