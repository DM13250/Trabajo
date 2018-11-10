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
	 	poll(NUMBERS_QUEUE);
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

 function add(listOr,elem){//Añade un nuevo elemento mirando colocando los numeros de menor a mayor
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(listOr)){
        if(NaN == listOr[0]){
           listOr.add(elem, listOr[0]);
        }else{
            while(i < lenght){
                if(listOr[i] < elem){
                        i++;
                } else{
                    listOr.add(elem, listOr[i]);
                }
            }
        }
 	} else {
 		throw "La cola está llena. No puedes poner el elemento en él.";
 	}
 	return size(listOr);
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
 	if (isFull(listOr)){
        throw "El array está lleno.";		
 	} else {
        var first;
 		first = listOr[0]; 
 	}
 	return first;
 } 

 function lastElement(listOr){//Devuelve el ultimo elemento de la lista
 	var last;
 	if (!isFull(listOr)){
 		last = listOr[listOr.length-1]; 			
 	} else {
 		throw "El array esta lleno.";
 	}
 	return last;
 } 
function indexOf(list, elem){//Devuelve la posicion del elemento indicado. Si el elemento no está en la lista devuelve -1
	elem = parseInt(elem);
	var tam = size(list);
	var i = 0;
	var encontrado = -1;
	if (isNaN(index)) {
 		throw "El index no es un numero";
 	}
	else{
		var encontrado = listOr.indexOf(elem);
	}
	return encontrado;
}

function lastIndexOf (listOr, elem){//Devuelve la posicion del elemento indicado comenzando por el final. Si el elemento no está en la lista devuele -1
	elem = parseInt(elem);
	listOr = ordenar(listOr);
	var tam = size(listOr);
	var encontrado = -1;
	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
	else{
		var encontrado = listOr.lastIndexOf(elem);
	}
	return encontrado;
}

function filtrar(listOr, elem) {
    return listOr != elem;
}

function removeElement(listOr, elem){//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso concreto
	var i = 0;
	length = size(listOr);
	var borrado = false;
	if(isNaN(elem)){
		throw "El elemento no es un numero";
	}
    listOr = listOr.filter(filtrar);
	return igual;
}
 function testListOr(){
 	//var queue = create (); 	
 	var listOr=[]; 	
 	console.log ("Capacidad: " + capacity(listOr));
 	console.log("Es vacía: " + isEmpty(listOr));
 	console.log("Longitud: " + size(listOr));

 	try {
	 	for (var i=0; i<MAX_ELEMENTO; i++){
	 		console.log("Nº de elementos: " + add(listOr,i*10));
	 	}
	 	add(list,i); //Genera una excepcion
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("Funcion toString: " + toString(listOr));
 	console.log ("El primer elemento: " + firstElement(listOr));
 	console.log ("El ultimo elemento: " + lastElement(listOr));
	 	
		
	console.log ("Elimina el elemento que se encuentra en el index: " + remove(listOr, listOr[0]));
 	try {
 	 		console.log ("Elimina el elemento que se encuentra en el index: " + remove(listOr, 40));
 	} catch (err) {
 		console.log(err);
 	}
	
	console.log ("Elimina el elemento que se encuentra en el index: " + removeElement(listOr, listOr[2]));
	try {
 	 		console.log ("Elimina el elemento que se encuentra en el index: " + removeElement(listOr, "hola"));
 	} catch (err) {
 		console.log(err);
 	}
	
	clear(listOr);
	console.log ("Funcion toString despues del clear: " + toString(listOr)); 	
 } 
window.onload = testListOr;