import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

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
