import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const getClassProduct = document.querySelector('.products');
const amazenaFetchProductsList = await fetchProductsList('computador');

const functionCreateList = async () => {
  amazenaFetchProductsList.forEach((el) => {
    getClassProduct.appendChild(createProductElement(el));
  });
};
functionCreateList();
