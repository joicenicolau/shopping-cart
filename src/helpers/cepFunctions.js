export const getAddress = async (cep) => {
  const urlPrimeiraApi = `https://cep.awesomeapi.com.br/json/${cep}`;
  const urlSegundaApi = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const returnApis = [fetch(urlPrimeiraApi), fetch(urlSegundaApi)]; // colocar o fetch dentro. Dica dd Bruno (pessoa instrutora)
  const promiseAny = await Promise.any(returnApis);
  // await ((data) => data.json());
  const data = await promiseAny.json();
  return data;
};
// console.log(promiseAny);

export const searchCep = async () => {
  const getClassBtn = document.querySelector('.cart__address');
  const getInput = document.querySelector('.cep-input');

  const numero = 8; // não funciona chmar o num dentro do if.

  if (getInput.value.length > numero || !Number(getInput.value)) {
    getClassBtn.textContent = 'CEP não encontrado';
    return; // return em branco interrompe.
  }

  const armazenaGetAdress = await getAddress(getInput.value);
  const rua = armazenaGetAdress.street || armazenaGetAdress.address;
  const bairro = armazenaGetAdress.neighborhood || armazenaGetAdress.district;
  const estado = armazenaGetAdress.state;
  const cidade = armazenaGetAdress.city;

  getClassBtn.textContent = `${rua} - ${bairro} - ${cidade} - ${estado}`;
};
