export const getAddress = () => {
  const urlPrimeiraApi = `https://cep.awesomeapi.com.br/json/${CEP}`;
  const urlSegundaApi = `https://brasilapi.com.br/api/cep/v2/${CEP}`;
  const ceps = [urlPrimeiraApi, urlSegundaApi];
  const promise = Promise.any(ceps)
    .then((data) => data.json());
  return promise;
};

export const searchCep = () => {
  // seu código aqui
};
