fetch ("https://world.openfoodfacts.org/api/v0/product/737628064502.json")
.then (reponse => console.log(reponse))
.then (reponse2 => console.table(reponse2))

