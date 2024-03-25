import "../lib/bootstrap-5.0.2-dist/js/bootstrap.bundle.js";
import { addSingleProductCard, createSingleProductCardUi, getUrlParam } from "./utilis.js";

getData(`https://fakestoreapi.com/products/${getUrlParam("id")}`,(product) => {

addSingleProductCard(createSingleProductCardUi(product))

});