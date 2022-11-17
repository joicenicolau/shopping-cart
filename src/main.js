import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const getClassProduct = document.querySelector('.products');

const criaTextoCarregando = () => {
  const criaParagrafo = document.createElement('p');
  criaParagrafo.innerText = 'carregando...';
  criaParagrafo.className = 'loading';
  getClassProduct.appendChild(criaParagrafo);
};

const removeLoadingClass = () => {
  const apagaClassLoading = document.querySelector('.loading');
  apagaClassLoading.remove();
};

const functionCreateList = async () => {
  criaTextoCarregando();
  const amazenaFetchProductsList = await fetchProductsList('computador');
  removeLoadingClass();
  amazenaFetchProductsList.forEach((el) => {
    getClassProduct.appendChild(createProductElement(el));
  });
};
functionCreateList();
