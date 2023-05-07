const url = "https://reqres.in/api/users?delay=3";

const getProductsWithAwait = async (httpUrl) => {
    try {
        const productsJson =await fetch(httpUrl);
        const products = await productsJson.json();//conversion de JSON a objeto
        console.log("-------Respuesta Get-----------")
        console.log(products);
        localStorage.setItem("Personas", JSON.stringify(products))//key,value
                                                                  //Convertir a un formato facil de leer. Convetir a Json

                                                                  
        console.log("------Iteracion de cada objeto----");
        for(let product of products.data)
        {
            console.log(product);
        } 
        
    } catch (error) {
        console.log(error);
    }
};

getProductsWithAwait(url);

console.log("---------INFORMACION DE USUARIOS DESDE LOCALSTORAGE--------")
let valorLeidoLocalStorage = localStorage.getItem('Personas');
console.log("----------Esto se leyo desde localStorage: " + valorLeidoLocalStorage)