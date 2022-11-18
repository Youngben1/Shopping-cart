const productsArray = [
  {
    id: "1",
    title: "Liquor",
    price: 22500,
  },
  {
    id: "2",
    title: "Shades",
    price: 8300,
  },
  {
    id: "3",
    title: "Lingerie",
    price: 15700,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does no exist for ID: " + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
