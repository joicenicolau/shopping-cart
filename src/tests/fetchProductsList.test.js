import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async() => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async() => {
    await fetchProductsList('computador');
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('teste o retorno de fetchProductsList com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async() => {
    const obj = await fetchProductsList('computador')
    expect(obj).toEqual(computadorSearch);
  });

  it('teste se ao chamar fetchProductsList sem argumento, retorna um erro com a mensagem', async() => {
    return expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });
});
