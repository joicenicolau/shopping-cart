import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const getClassProduct = document.querySelector('.products');

const criaTextoCarregando = () => {
  const criaParagrafo = document.createElement('p');
  criaParagrafo.textContent = 'carregando...';
  criaParagrafo.className = 'loading';
  getClassProduct.appendChild(criaParagrafo);
};

const removeLoadingClass = () => {
  const apagaClassLoading = document.querySelector('.loading');
  apagaClassLoading.remove();
};

const erroApi = () => {
  getClassProduct.className = 'error';
  getClassProduct.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
};

const functionCreateList = async () => {
  try {
    const amazenaFetchProductsList = await fetchProductsList('computador');
    amazenaFetchProductsList.forEach((el) => {
      getClassProduct.appendChild(createProductElement(el));
    });
    removeLoadingClass();
  } catch (error) {
    erroApi();
  }
};

criaTextoCarregando();
functionCreateList();

const localStorage = async () => {
  const armazenaGetSavedCartIDs = getSavedCartIDs(); // armazena o getsavedcart, ela que salva no localStorage
  const resultArmaz = armazenaGetSavedCartIDs.map((id) => fetchProduct(id));
  // console.log(resultArmaz); // faz as interações de array de ids. Array de promessas. E chama a função fecthProduct para iterar os ids nela.
  const resolvePromise = await Promise.all(resultArmaz); // Promisse all para resolver todas as promessas das iterações do map.
  resolvePromise.forEach((el) => { // foreach para percorrer os elementos das promisses resolvidas
    const getCartProducts = document.querySelector('.cart__products');
    getCartProducts.appendChild(createCartProductElement(el)); // adiciona os elementos do foreach na função que cria as lis do carrinho de compra.
  });
};

localStorage();
