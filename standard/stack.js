 "use strict";

/* Pagina de Funciones */
 var NUMBERS_LIST = create();
 function cleanData(){
 	document.getElementById ("list").value = "" ;  
 }

function pushNumber(num){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";
 	try {
	 	push(NUMBERS_LIST,list);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

function popNumber (){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	pop(NUMBERS_LIST);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* Funciones de las listas ordenadas */
 var MAX_ELEMENTO = 5; 
 function create(){ //crea la lista vacía con una determinada longitud que ya esta dada
 	var list = [];
 	return list;
 } 

 function isEmpty(list){//devuelve verdadero o falso si la lista esta vacia
 	return (list.length === 0);
 } 

 function isFull(list){//devuelve verdadero o falso en función si la lista esta llena
 	return (list.length === MAX_ELEMENTO);
 } 

 function size(list){//Devuelve el número de elementos de la lista
 	return list.length;
 } 
 
  function add(list,elem){//Añade un nuevo elemento colocando el ultimo lugar
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(list)){ 
			list[i] = list.push(elem);
 	}else{
 		throw "La pila está llena. No puedes poner mas elementos en la lista.";
 	}
 	return size(list);
 } 
 
 function addAt(list, elem, index){
	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(list)){
		var i = index;
		var lenght = size(list) - 1;
		var a;
		var b = elem;
		while (i < lenght){
		var a = list[i];
 		list[i] = b;
		b = a;
		}
 	} else {
 		throw "La pila está llena. No puedes poner mas elementos en la lista.";
 	}
 	return size(list);
}

 function toString(list){//Devuelve la lista en formato cadena.
 	var str = "";
 	if (!isEmpty(list)){
 		var length = size(list);	
 		for (var i=0; i<length-1;i++){
 			str = str + list[i] + " - ";
 		} 		 		
 		str = str + list[i]; 		
 	} 	
 	return str;
 } 

 function indexOf (list, elem){//Devuelve la posicion del elemento indicado. Si el elemento no está en la lista devuelve -1
	if(isNaN(elem)){
		throw "El elemento no es numero";
	}
 	if (!isEmpty(list)){
 		var encontrado = list.indexOf(elem);
 	}
	return encontrado;
 }
 
 function lastIndexOf (list, elem){//Devuelve la posicion del elemento indicado comenzando por el final. Si el elemento no está en la lista devuele -1
	if(isNaN(elem)){
		throw "El elemento no es numero";
	}
 	if (!isEmpty(list)){
 		var encontrado = list.lastIndexOf(elem);
 	}
	return encontrado;
 }
 
 function capacity(list){//Devuelve la capacidad de la lista
 	return MAX_ELEMENTO;
 } 

 function clear(list){//Limpia la lista
 	var elem = Number.NaN;
	var tam = list.length;
 	if (!isEmpty(list)){
 		list.splice(0, tam);
 	} 	
 } 

 function firstElement(list){//Devuelve el primer elemento de la lista
 	var first;
 	if (isFull(list)){
        throw "La lista esta llena";		
 	} else {
 		first = list[0]; 
 	}
 	return first;
 } 

 function lastElement(list){//Devuelve el ultimo elemento de la lista
 	var last;
 	if (!isEmpty(list)){
			last = list[size(list) -1];
 	}
 	return last;
 } 

  function remove(list, index){//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
	var i = 0;
	length = size(list);
	var igual = false;
	if(index > MAX_ELEMENTO){
		throw "El indice esta fuera de los limites de la lista";
	}
	var borrado = list.splice(index);
    return borrado;
	}

/*function removeElement(list, elem){//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso concreto
    if(isNaN(elem)){
		throw "El elemento no es un Number";
	}
	length = size(list);
	var igual = false;
	for(var x = 0; x < length; x++){
		var guardar =  list[(i+1)];
		list[i] = guardar;
	}
	igual = true;
	return igual;
}
 */
  function set(list, elem, index){
	 if(!isNaN(elem)){
		 throw "El elemento no es un numero";
	 }
	 if(index > MAX_ELEMENTO){
		 throw "El indice esta fuera de los limites";
	 }else{
		var guardar = list[index];
		list[index] = elem;
	 }
	 return guardar;
 }
 
 function testList(){	
 	var list=[]; 	
 	console.log ("Capacidad: " + capacity(list));
 	console.log("Es vacía: " + isEmpty(list));
 	console.log("Longitud: " + size(list));

 	try {
	 	for (var i=0; i<MAX_ELEMENTO; i++){
	 		console.log("Nº de elementos: " + add(list,i*10));
	 	}
	 	add(list,i); //Genera una excepcion
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("Funcion toString: " + toString(list));
	console.log ("Intercambiamos relleno: " + addAt(list, 4, 0));
	try{
	console.log ("Intercambiamos relleno: " + addAt(list, "hola", 0));
	}catch(err){
		console.log(err)
	}
 	console.log ("El primer elemento: " + firstElement(list));
 	console.log ("El ultimo elemento: " + lastElement(list));
	 	
		
	console.log ("Elimina el elemento que se encuentra en el index: " + remove(list, list[0]));
 	try {
console.log ("Elimina el elemento que se encuentra en el index: " + remove(list, 40));
 	} catch (err) {
 		console.log(err);
    }
	
	/*	if(isNaN(elem)){
		throw "El elemento no es un Number";
	}*/
    //console.log ("Elimina el elemento que se encuentra en el index: " + removeElement(list, list[2]));
	try {
 	 		console.log ("Elimina el elemento que se encuentra en el index: " + removeElement(list, "hola"));
 	} catch (err) {
 		console.log(err);
 	}
	
	clear(list);
	console.log ("Funcion toString despues del clear: " + toString(list));

 } 
window.onload = testList;
