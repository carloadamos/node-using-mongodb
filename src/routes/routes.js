import { addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct } from '../controllers/controllers'

const routes = (app) => {
  app.route('/products')
    // get multiple products
    .get(getProducts)

    .post(addnewProduct);

  app.route('/products/:ProductID')
    // get a specific product with ID
    .get(getProductWithID)

    // updating a specificproduct
    .put(updateProduct)

    // deleting a specific product
    .delete(deleteProduct);
};

export default routes;