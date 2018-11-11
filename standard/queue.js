"use strict";

/* Pagina de Funciones */
 var NUMBERS_LISTOR = create(); 
 
 function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function addNumber(num){
	var error = document.getElementById ("error");
	var listOr = document.getElementById ("listOr");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_LISTOR,num);
	 	listOr.innerHTML = toString(NUMBERS_LISTOR);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

function pollNumber (){
	var error = document.getElementById ("error");
	var listOr = document.getElementById ("listOr");
	error.innerHTML = "";  
 	try {
	 	poll(NUMBERS_LISTOR);
	 	listOr.innerHTML = toString(NUMBERS_LISTOR);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* Funciones de las listas ordenadas */
 var MAX_ELEMENTO = 5; 
 function create(){//crea la lista vacía con una determinada longitud que ya esta dada
 	var listOr = [];
 	return listOr;
 } 

 function isEmpty(listOr){//devuelve verdadero o falso si la lista esta vacia
 	return (listOr.length === 0);
 } 

 function isFull(listOr){//devuelve verdadero o falso en función si la lista esta llena
 	return (listOr.length === MAX_ELEMENTO);
 } 

 function size(listOr){//Devuelve el número de elementos de la lista
 	return listOr.length;
 } 

 function add(listOr,elem){//Añade un nuevo elemento mirando colocando los numeros de mayor a menor
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(listOr)){
			var tam = size(listOr);
			var encontrar = false;
			var i = 0;
			while (tam > 0 && !encontrar){
				if(listOr[listOr - 1] <= elem){
						encontrar = true;
				}else{
					listOr[tam] =listOr[tam -1];
					tam--;
				}
			}
		listOr[tam] = elem;
 	}else{
 		throw "La lista esta llena.";
 	}
 	return size(listOr);
 } 

 function get (listOr,index){ //Devuelve el elemento de la lista de la posicion indicada
	if (index > MAX_ELEMENTO) {
 		throw "El indice esta fuera de la lista";
 	}
 	return listOr[index];
	
}
 
 function toString(listOr){//Devuelve la lista en formato cadena.
	return listOr.toString();
 } 

 function capacity(listOr){//Devuelve la capacidad de la lista
 	return MAX_ELEMENTO;
 } 

 function clear(listOr){//Limpia la lista
 	var elem = Number.NaN;
 	if (!isEmpty(listOr)){
 		listOr.splice(0, listOr.length);	 		 		
 	} 	
 } 

  function firstElement(listOr){//Devuelve el primer elemento de la lista
 	var first;
	if(isEmpty(listOr)){
		throw "La lista esta vacia.";
	}
 	if (isFull(listOr)){
 		first = listOr[0]; 
 	}
 	return first;
 } 

 function lastElement(listOr){//Devuelve el ultimo elemento de la lista
 	var last;
	var tam = size(listOr)-1;
	if(isEmpty(listOr)){
		throw "La lista esta vacia.";
	}
	if (isFull(listOr)){
 		last = listOr[tam]; 
 	}
 	return last;
 } 
 function indexOf (listOr, elem){//Devuelve la posicion del elemento indicado. Si el elemento no está en la lista devuelve -1
	if(isNaN(elem)){
		throw "El elemento no es numero";
	}
 	if (!isEmpty(listOr)){
		var encontrado = -1; 
		encontrado = listOr.indexOf(elem);
 	}
	return encontrado;
 }
 
 function lastIndexOf (listOr, elem){//Devuelve la posicion del elemento indicado comenzando por el final. Si el elemento no está en la lista devuele -1
	if(isNaN(elem)){
		throw "El elemento no es numero";
	}
 	if (!isEmpty(listOr)){
		var encontrado = -1;
 		encontrado = listOr.lastIndexOf(elem);
 	}
	return encontrado;
 }

  function remove(listOr, index){//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
	if(index > MAX_ELEMENTO){
		throw "El indice esta fuera de los limites de la lista";
	}
	var i = 0;
	length = size(listOr);
	var borrado = -1;
	var borrado = listOr.splice(index,1);
    return borrado;
	}

function removeElement(listOr, elem){//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso concreto
	var i = 0;
	length = size(listOr);
	var borrado = false;
	if(isNaN(elem)){
		throw "El elemento no es un numero";
	}
	while(length > 0 && !borrado){
		if(elem == listOr[length]){
			var pos = length;
			borrado = true;
		}
		length--;
	}
    listOr.splice(pos, 1);
	return borrado;
}
 function testListOr(){
 	//var queue = create (); 	
 	var listOr=[]; 	
 	console.log ("Capacidad: " + capacity(listOr));
 	console.log("Es vacía: " + isEmpty(listOr));
 	console.log("Longitud: " + size(listOr));

 	try {
	 	for (var i=0; i<5; i++){
	 		console.log("Nº de elementos: " + add(listOr,i*10));
	 	}
	 	add(listOr,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("Funcion toString: " + toString(listOr));
 	console.log ("El primer elemento: " + firstElement(listOr));
 	console.log ("El ultimo elemento: " + lastElement(listOr));
	 	
	console.log ("Posicion del elemento dado mirando el comienzo: " + indexOf (listOr, 0));
	console.log ("Posicion del elemento dado mirando el comienzo: " + indexOf (listOr, 90));
	
	try {
	console.log ("Posicion del elemento dado mirando el comienzo: " + indexOf (listOr, "hola"));
 	} catch (err) {
 		console.log(err);
    }
	
	console.log ("Posicion del elemento dado mirando desde el final: " + lastIndexOf (listOr, 0));
	console.log ("Posicion del elemento dado mirando desde el final: " + lastIndexOf (listOr, 90));
	
	try {
		console.log ("Posicion del elemento dado mirando desde el final: " + lastIndexOf (listOr, "hola"));
 	} catch (err) {
 		console.log(err);
    }	
		

	console.log ("Elimina el elemento que se encuentra en el index: " + remove(listOr, 0));
 	try {
 	 		console.log ("Elimina el elemento que se encuentra en el index: " + remove(listOr, "hola"));
 	} catch (err) {
 		console.log(err);
 	}
	
	console.log ("Elimina el elemento que quieres eliminar: " + removeElement(listOr, listOr[2]));
	try {
 	 		console.log ("Elimina el elemento que quieres eliminar: " + removeElement(listOr, "hola"));
 	} catch (err) {
 		console.log(err);
 	}
	
	clear(listOr);
	console.log ("Funcion toString despues del clear: " + toString(listOr)); 	
 } 
window.onload = testListOr;