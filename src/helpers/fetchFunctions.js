export const fetchProduct = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  if (!id) {
    throw new Error('ID não informado');
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchProductsList = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return error.message;
  }
};
