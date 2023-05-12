const url = "https://reqres.in/api/users?delay=3";
//const response = [];

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
            imprimirNombre(product);
            //agregarElementos(product);
            //response.push(product);


        } 
        
    } catch (error) {
        console.log(error);
    }
};

getProductsWithAwait(url);

/* console.log("---------INFORMACION DE USUARIOS DESDE LOCALSTORAGE--------")
let valorLeidoLocalStorage = localStorage.getItem('Personas');
console.log("----------Esto se leyo desde localStorage: " + valorLeidoLocalStorage) */


//-------Imprimiendo información del Objeto en el html
const imprimirNombre = (product) => {
    try {
       //document.getElementById("infoUsuario").value = product.id;
       document.querySelector("#forma1").innerHTML = product.id;
    } catch (error) {
        console.log(error);
    }
};


/* function agregarElementos(product){ 
    var lista=document.getElementById("ulListado"); 
    array.forEach(function(data,index){
    var linew= document.createElement("li");    
    var contenido = document.createTextNode(data.marca+' '+data.modelo
    +" "+data.sistema_operativo+" "+data.pantalla_pulgadas+" "+data.pantalla_resolucion
    +" "+data.camara_resolucion);
    lista.appendChild(linew);
    linew.appendChild(contenido);
    
    })
    } */