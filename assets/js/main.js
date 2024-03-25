import "../lib/bootstrap-5.0.2-dist/js/bootstrap.bundle.js";
import {getElement,getData, addProductCard, createProductCardUi, getUrlParam} from "./utilis.js";

getData("https://fakestoreapi.com/products",(products)=>{

products.forEach(product=> addProductCard(createProductCardUi(product)))

});

console.log(getUrlParam("productid"));

