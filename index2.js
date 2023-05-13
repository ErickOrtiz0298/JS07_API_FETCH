let url = 'https://reqres.in/api/users?delay=3';
/* fetch(url)
    .then( response => response.json() )
    .then( users => mostrarData(users) )//mandar a imprimir la informacion
    .catch( error => console.log(error) )

const mostrarData = (users) => {
    let body = "";
    for(let user of users.data){
        body+=`<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email}</td><td><img src="${user.avatar}" class="rounded-circle" ></td></tr>`;
    }
    document.getElementById('datosParaMostrar').innerHTML = body;
    guardarConExpiracion('users',users.data);

} */


/* function guardarConExpiracion(key, value) {
    const data = { 'data': value, 'fecha': new Date() };
    localStorage.setItem(key, JSON.stringify(data));
}  */

const mostrarDataLocalStorage = () => {
    let valorLeidoLocalStorage = JSON.parse(localStorage.getItem('users'));
    let body = "";
     for(let valor of valorLeidoLocalStorage.data){
        body+=`<tr><td>${valor.id}</td><td>${valor.first_name}</td><td>${valor.last_name}</td><td>${valor.email}</td><td><img src="${valor.avatar}" class="rounded-circle" ></td></tr>`;
    } 

    document.getElementById('datosParaMostrar').innerHTML = body;
} 


function buscarConExpiracion(key) {
    const data = JSON.parse(localStorage.getItem('users'));
    const fecha = new Date();

    console.log("Funcion buscar con expiracion");

    let fechaHoraUTC = new Date(`${data.fecha}`);
    let fechaHoraLocal = new Date(fechaHoraUTC.getTime() - (fechaHoraUTC.getTimezoneOffset()));
    console.log(fechaHoraLocal);
    console.log(fecha);
    console.log(fecha-fechaHoraLocal);
    if (fecha-fechaHoraLocal > ( 1*60 * 1000)) { // 3 min en ms
      console.log("Se borraron los datos");
      console.log(data.fecha);
      console.log(fecha);
      localStorage.removeItem(key);
      return null;
    } else {
     return data.data
    }
 }
mostrarDataLocalStorage();
buscarConExpiracion('users');