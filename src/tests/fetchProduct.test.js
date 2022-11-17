import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async() => {
    await fetchProduct('MLB1405519561');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('teste o retorno de fetchProduct com o argumento MLB1405519561 é uma estrutura de dados igual ao objeto product', async() => {
    const obj = await fetchProduct('MLB1405519561')
    expect(obj).toEqual(product);
  });

  it('teste se ao chamar fetchProduct sem argumento, retorna um erro com a mensagem', async() => {
    try {
    await fetchProduct();
    } catch (error) {
      expect(error).toEqual(new Error('ID não informado'));
    }
  });
});
