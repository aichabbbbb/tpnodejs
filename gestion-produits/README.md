\# Gestion Produits



Un module Node.js simple pour créer et lister des produits.



\## Installation



npm install gestion-produits-aicha



\## Utilisation



```js

const { addProduct, listProducts } = require("gestion-produits-aicha");



const product1 = addProduct("Stylo", 5);

const product2 = addProduct("Cahier", 10);



console.log(listProducts(\[product1, product2]));



