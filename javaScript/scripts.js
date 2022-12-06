
var nombreCliente = 'Pedro';
var nombre_Cliente = 'Juan';
var NombreCliente = 'Juan';
var nombreCliente = 'Juan';

console.log(nombreCliente);

// let nombre;
// nombre ='karen';

// let nombre ='Karen';
// let nombre ='Juan';

// console.log(nombre);
// variables con let y const
const cliente ='juan';
cliente ='Pedro'

console.log(cliente);

const divMensaje =document.getElementById('mensaje');


// strings o cadenas 

nombre ='juan';
nombre = "juan";

let mensaje ="Entonces dije hola mundo";
let mensaje2 ='Don\'t do that' ;
console.log(mensaje2);

console.log(nombre);

let aprendiendo ='Aprendiendo', tecnologia = 'JavaScript';

console.log(aprendiendo = tecnologia);

console.log(aprendiendo +'HOLA'+ tecnologia);

console.log('${aprendiendo} ${tecnologia}'); 

// funciones para strings 
let banda = 'Metallica', cancion = 'Enter sandman';

let nombre;

nombre = banda +":" + cancion;

console.log(banda.length);

nombre = nombre.concat{"", "y es genial"};

nombre= nombre.toUpperCase();

nombre= nombre.toLowerCase();

console.log(nombre);

//

let actividad ='Estoy aprendiendo javascript con el curso';

nombre = actividad.split('');

let intereses ='Leer, caminar, escuchar musica, escribir, aprender a programar';

nombre =intereses.split('');

nombre= actividad.replace('javascrtip', 'JS');

nombre = actividad.includes('javascritp');

let mail = 'corre@correo.com';

nombre = email.includes('0');

console.log(nombre);

let master ='Master', puppets = 'Of puppets';

console.log(master.repeat(3));
console.log(puppets);


// numeros


// const numero1 =30,
// numero2 ="20",
// numero3 =20.20,
// numero4 =-3,
// numero5 =20;

// let resultado;

// resultado = numero1 + numero5;

// resultado = numero1 - numero5;

// resultado = numero1 * numero5;

// resultado = numero1 / numero5;

// resultado =Math.round(2.5);

// resultado= Math.floor(2.99);

// resultado= Math.cell(2.01);

// resultado= Math.sqrt(144);
// resultado= Math.abs(numero4);

// resultado =Math.in(10,2,4,60,5);

// resultado = (20+ 30)+ 2;

// console.log(resultado);


// // 

// let puntuaje =0;

// console.log(puntuaje);
// // convertir string a número

// let nuemro1 =50,
// numero6="10",
// numero7="tres",
// numero8="20.20";

// console.log(numero1 + nuemro6);
// console.log(parseFloat(numero8)+ nuemro1);

// console.log(number(nuemro3));

// //

// let dato;

// dato= Number("20");
// dato= Number("-20.20");
// dato= Number(true);
// dato= Number(false);
// dato= Number(null);
// dato= Number("Hola mundo");
// dato= Number((1,2,3,4));

// dato= parseInt("100");
// dato= parseInt("100.20");
// dato= parseInt("100.20");
// dato= parseInt("100.20");

// console.log(dato);

// let nuemro1 ="10120180.1021082812";

// let numero2 =118298128913.33081893;

// console.log(numero1.toFixed(4));

// console.log(nuemro1.toFixed(5));

// //convirtiendo de número a string

// let dato1= 9813691381933198;
// let year=19871;

// dato1= String(true);
// dato1= new Date();
// dato1= String (new Date());

// dato1= String((1,2,3,400));

// console.log(dato);
// console.log(dato.length);

// //tipos de datos

// const nombre1 ="Juan";

// const edad ="80.80";

// let aprendiendoJS = true;

// let valor;

// console.log(typeof valor);
// valor='Hola';
// console.log(typeof valor);
// valor= true;

// console.log(typeof valor);
// valor =20;

// console.log(typeof valor);
// valor = "20";
// console.log(typeof valor);
// console.log(typeof valor);
// //
// let hijos = null;
// let nombre2;
// console.log(typeof nombre2);

// //arreglo
// let lenguajes =['HTML5','JS','PHP'];
// console.log(typeof lenguajes);
// //objeto
// let persona ={
//   nombre= 'juan',
//   ciudad= 'Mexico'
// }

// console.log(typeof persona);

// //fecha

// let fecha= new Date();
// console.log(typeof fecha);

// //array o arreglos 

// const nuemros =[10,20,30,40,50];

// const meses =new Array('enero', 'febrero', 'marzo');

// const arreglo = ['Hola',10, true, "si", null, undefined];

// console.log(arreglo);


// meses[3]= 'Abril';
// console.log(meses);

// meses.push('Abril');
// meses.push('Mayo');

// meses.unshift('Mes,0');

// meses.pop();

// meses.shift();

// meses.splice(0,1);

// meses.reverse();

// let frutas=['Platano', 'Manzana', 'Fresa', 'Naranja'];

// frutas.sort();

// console.log(meses);

// //creando objetos

// const persona2 ={
//   nombre : 'juan',
//   apellido : "de la tierra",
//   edad : 80,
//   trabajo : true,
//   musica : ['trance', 'rock', 'grunge'],
//   hogar : {
//     ciudad: "Guadalajara",
//     pais: "México"
//   }

  


// }

// console.log[persona['hogar']];

// //template string

// const nombre7 ='Juan',
// trabajo='desarrollador web';

// console.log('Nombre: '+nombre+',Trabajo'+ trabajo);
// console.log('Nombre: ${nombre}, Trabajo: ${trabajo}');

// const contenedorApp = document.querySelector(#mensaje);

// let html = '<ul>'+
//            '<li> Nombre: ' + nombre + '</li>' +
//            '<li> Trabajo ' + trabajo +'</li>' +
//            '</ul>';

//            let html2 = '<ul>'+
//            '<li> Nombre: ' + ${nombre5} + '</li>' +
//            '<li> Trabajo ' + ${trabajo} +'</li>' +
//            '</ul>';

// contenedorApp.innerHtml = html;


// //funciones 

// saludar();
// saludar('Pedro', 'Medico');
// saludar('Alejandro', 'Veterinaria');
// saludar('Laura');

// function saludar(nombre ='Visitante', trabajo='No sabemos!'){
//   console.log('Hola'+nombre+'tu trabajo es'+trabajo);
// }

// const suma = function (a= 0, b=0){
//   console.log(a+b);

// }

// suma();
// suma(30,50);
// suma(100,200);


// //método o funciones dentro de los objetos

// const musica={
//   reproducir: function(cancion){
//     console.log('Reproduciendo la canción: '+ cancion);
//   }

//   pausar: function(){
//     console.log('paused');
//   }

// }

// musica.borrar =function(id){
//   console.log('Borrando la canción con el id'+ id );
// }

// musica.reproducir('Hotel califirnia');
// musica.pausar();
// musica.reproducir('Hotel california');
// musica.reproducir('Nothing else matters');

// //funciones que retornan valores y arrow functions

// const suma = (a =0, b=0) =>{
//   return a+b;
// }

// const multiplicar =(a) =>{
//   return a+5;

// }

// let total;
// let resultadoSuma = suma(1,3);
// total = multiplicar(resultadoSuma);

// console.log(total);

// //
// let viajando = function(destino){
//   return 'viajando a la ciudad de '+destino;

// }

// let viaje;
// viaje = viajando('londres');

// console.log(viaje);


// //object contructor y la palabra

// const persona ={
//   nombre : 'juan'
// }

// function Tarea(nombre,urgencia){
//   this.nombre = nombre;
//   this.urgencia = urgencia;


// }

// const tarea1 = new Tarea('Aprender javaScript', 'Urgente');
// const tarea2 = new Tarea('Preparar café', 'Urgente');
// const tarea3 = new Tarea('Pasear al perro', 'Media');
// const tarea4 = new Tarea('Conocer a mis suegros', '0');
// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);


// //Fechas

// const diaHoy = new Date();

// let valor = diaHoy;
// valor = diaHoy.getMonth();
// valor = diaHoy.getDay();
// valor = diaHoy.getDate();
// valor = diaHoy.getFullYear();
// valor = diaHoy.getMinutes();
// valor = diaHoy.getHours();
// valor = diaHoy.getTime();
// valor = diaHoy.getFullYear(1998);



// console.log(valor);


// //condicionales if,ifelse,else
// let puntuaje =100;
// const logueando =true;
// const edad = 17;

// if(puntuaje === 1000){
//   console.log('Si es igual');
// }else{
//   console.log('No es igual');
// }

// if(puntuaje){
//   console.log('si hay puntuaje y es de' +puntuaje);
  
// }else{
//   console.log('no hay puntuaje');
// }

// let dinero =500;
// let totalCarrito = 300;

// if(dinero > totalCarrito){
//   console.log('pago correcto');
// }else{
//   console.log('Fondos insuficientes');
// }

// if(dinero === totalCarrito){
//     console.log('pago Correcto');

// }else if(tarjeta){
//   console.log('Pagaste con tarjeta');
// }else{
//   console.log('Fondos insuficientes');
// }



// let dinero= 300;
// let totalCarrito =500;
// let tarjeta = true;

// if(dinero>totalCarrito|| tarjeta){
//   console.log('pago correcto');

// }else{
//   console.log('fondos insuficientes');

// }

// let hora =14;
// if(hora > 0 && hora <=12)
// {
//     console.log('Buenos dias');
// }else if(hora >12 && hora <= 18){
//     console.log('buenas tardes');
// }else if(hora >18 && hora <=24){
//     console.log('Buenas noches');
// }else{
//    console.log('Horario no valido');
// }



// // condicionales Switch 

// const metodoPago = 'cheque';

// switch(metodoPago){
//   case 'efectivo':
//     console.log('Pagastes con ${metodoPago}');
//   break;

//   case 'cheque':
//     console.log('Pagastes con ${metodoPago} revisaremos que tenga fondos');
//   break;

//   case 'tarjeta':
//     console.log('Pagastes con ${metodoPago} espere un momento');
//   break;

//   default:
//     console.log('Aún no has pagado o método no válido');
//   break;
// }

// // for while y do while 

// const carrito = ['producto 1', 'producto 2', 'prodcuto 3'];

// for(let i=0; 1< carrito.length; i++){
//   console.log('Producto en el carrito: ${carrito[i]}');
// }

// let i=0;

// while(i < 10){
//   console.log('Núemero: ${i}');
//   i++;
// }
// do{
//   console.log(i);
//   i++;

// }while(i<10);

// //otros iteradores

// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar javascritp'];

// const carrito =[
//   {id: 1, producto: 'Libro'},
//   {id: 2, producto: 'Camisa'},
//    {id: 3, producto: 'Disco'}
// ]


// let automovil ={
//   modelo: 'Camaro',
//   'motor': 6.0,
//   anio: 1967,
//   marca: 'chevrolet'
// }


// for(info of Object.values(automovil)){
//   console.log(info);
// }

// pendientes.forEach(tarea => {
//   console.log(tarea);
// })

// let nuevoArreglo = pendientes.forEeach(tarea => {

// });

// let nuevoArreglo2 =pendientes.map(tarea => {

// })

// console.log(nuevoArreglo);
// console.log(nuevoArreglo2);

// // scope

// const musica = 'Rock';

// if(musica){
//   var musica: 'Grunge';
//   console.log('Dentro del if' + musica);

// }
// console.log('fuera del if' +musica);



const cliente = {
  nombre: 'Alejandra',
  tipo: 'Premiun',
  datos : {
    ubicicion:
    {
      ciudad: 'Mexico',
      pais: 'Mexico'
    },
    cuenta: {
      desde: '10-12-2012',
      saldo: 4009
    }
  }
}

console.log(cliente);

const nombreCliente = cliente.nombre,
tipoCliente=cliente.tipo,
ubicicionCliente = cliente.datos.ubicacion;

console.log(ubicacionCliente);

let {nombre, tipo} = cliente;
let {datos:{ubicicion}} = cliente;
console.log(ubiciacion);

let {datos: {cuenta: {sueldo}}} =cliente;
console.log(saldo)
console.log(tipo);



//object literal enhacement

const banda1 = 'Metallica', 
genero ='Heavy Metal',
canciones= ['Master of puppets', 'Seek & Destroy', 'Enter Sandman'];

const metallica = {banda1,genero, canciones}
console.log(metallica);

//filter. find
const personas= [
{nombre: 'juan', edad:20},
{nombre: 'Pablo', edad:50},
{nombre: 'Alejandro', edad:23, aprendiendo: "JavaScript"},
{nombre: 'Karen', edad:20},
{nombre: 'Miguel', edad:20},

];

const mayores = personas.filter(personas => personas.edad >25);
console.log(mayores);

const alejandra = personas.find(personas => personas.nombre === 'Alejandro');
let{aprendiendo} = alejandra;
console.log(aprendiendo);

// feach Api 

descargarUsuarios(30);
function descargaUsuarios(cantidad){
  const api 'https//api.randomuser,me/?nat=US&results=${cantidad}';

  fetch(api)
  .then(respuesta => respuesta.json())
  .then(datos => imprimirHTML.(datos.results));



}


function imprimirHTML(datos){
  datos.forEach(element => { 
    console.log(usuarios);
    const li=document.createElement('li');

    const {name: {first}, name:{last}}, picture:{medium},nat} =usuarios;

    li.innerHTML ='
    
    Nombre: ${first} ${last}
    pais: ${nat}
    imagen: <img src"${medium}">   
    ';

    document.querySelector('app').appendChild(li);
  });
}
  