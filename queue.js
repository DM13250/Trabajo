"use strict";

/* Pagina de Funciones */
 var NUMBERS_LISTOR= create(); function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function addNumber(num){
	var error = document.getElementById ("error");
	var queue = document.getElementById ("listOr");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_LISTOR,num);
	 	queue.innerHTML = toString(NUMBERS_LISTOR);
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
 
 function create(){ //crea la lista vacía con una determinada longitud que ya esta dada
 	var listOr = [];
 	for (var i = 0; i < MAX_ELEMENTO; i++){
 		listOr[i] = Number.NaN;
 	}
 	return listOr;
 } 

 function isEmpty(listOr){ //devuelve verdadero o falso si la lista esta vacia
 	var isEmpty = false;
 	if (isNaN(listOr[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(listOr){//devuelve verdadero o falso en función si la lista esta llena
 	var isFull = false;
 	if (!isNaN(listOr[MAX_ELEMENTO-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(listOr){ //Devuelve el número de elementos de la lista
 	var length = 0;
 	while (length<MAX_ELEMENTO && !isNaN(listOr[length])){
 		length++;
 	}
 	return length;
 } 
 
 function add(listOr,elem){//Añade un nuevo elemento mirando colocando los numeros de menor a mayor
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(listOr)){
		var i = listOr.lenght -1;
		while(i > -1 || listOr[i] < elem){
			
			i--;
		}
 	} else {
 		throw "La cola está llena. No puedes poner el elemento en él.";
 	}
 	return size(listOr);
 } 
 

function get (listOr,index){ //Devuelve el elemento de la lista de la posicion indicada
	if (index > MAX_ELEMENTO) {
 		throw "El indice esta fuera de la lista";
 	}
    if(isFull(listOr)) {
 		throw "La pila está llena. No puedes poner mas elementos en la lista.";
 	}
	var lenght = size(list);
		while (i < index){
		var a = list[i];
 		list[i] = b;
		b = a; 
 	return listOr[index];
	
}

function indexOf(listOr, elem){//Devuelve la posicion del elemento indicado. Si el elemento no está en la lista devuelve -1
	if(isNaN(elem)){
		throw "El elemento no es numero";
	}
 	while (i <= tam || encontrado == 1){
			if (elem === list[i]){
				encontrado = 1;
			}
			i++;
		}
	}
	return encontrado;

function lastIndexOf (listOr, elem){ //Devuelve la posicion del elemento indicado comenzando por el final. Si el elemento no está en la lista devuele -1
	elem = parseInt(elem);
	listOr = ordenar(listOr);
	var tam = size(listOr);
	var encontrado = -1;
	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
	else{
		while (tam >= 0 || encontrado == 1){
			if (elem === list[tam]){
				encontrado = 1;
			}
			tam--;
		}
	}
	return encontrado;
}

 function toString(listOr){ //Devuelve la lista en formato cadena.
 	var str = "";
 	if (!isEmpty(listOr)){
 		var length = size(listOr);	
 		for (var i = 0; i < length - 1; i++){
 			str = str + listOr[i] + " - ";
 		} 		 		
 		str = str + listOr[i]; 		
 	} 	
 	return str;
 } 


 function capacity(listOr){//Devuelve la capacidad de la lista
 	return MAX_ELEMENTO;
 } 

 function clear(listOr){//Limpia la lista
 	var elem = Number.NaN;
 	if (!isEmpty(listOr)){
 		var length = size(listOr);	
 		for (var i = 0; i < length; i++){
 			listOr[i] = Number.NaN;
 		} 		 		 		
 	} 	
 } 

 function firstElement(listOr){//Devuelve el primer elemento de la lista
 	var first;
 	if (!isEmpty(listOr)){
 		first = listOr[0]; 		
 	} else {
 		throw "La lista esta vacia";
 	}
 	return first;
 } 

 function lastElement(listOr){//Devuelve el ultimo elemento de la lista
 	var last;
 	if (!isEmpty(listOr)){
 		last = listOr[size(listOr) - 1]; 		
 	} else {
 		throw "The queue is empty.";
 	}
 	return last;
 } 

 function remove(listOr, index){//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
	var i = 0;
	length = size(listOr);
	var igual = false;
	if(index > MAX_ELEMEMENTO){
		throw "El indice esta fuera de los limites de la lista";
	}
	var borrado = listOr.splice(index);
	return borrado;
}

function removeElement(listOr, elem){//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso concreto
	var i = 0;
	length = size(listOr) - 1;
	var igual = false;
	if(isNaN(elem)){
		throw "El elemento no es un numero";
	}
	while (i < length ){
		if (listOr[i] == elem || igual ){
			for(var x = i; x < length; x++){
				var guardar =  listOr[(i+1)];
				listOr[i] = guardar;
		}
		igual = true;
		i++
	}
	}
	listOr[length] = Number.NaN;
	return igual;
}
 
 function testList(){
 	//var queue = create (); 	
 	var listOr = []; 	
 	console.log ("Capacidad: " + capacity(listOr));
 	console.log("Es vacía: " + isEmpty(listOr));
 	console.log("Longitud: " + size(listOr));

 	try {
	 	for (var i=0; i<MAX_ELEMENTO; i++){
	 		console.log("Nº de elementos: " + add(listOr,i*10));
	 	}
	 	add(listOr,i); //Genera una excepcion
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("Funcion toString: " + toString(listOr));
 	console.log ("El primer elemento: " + firstElement(listOr));
 	console.log ("El ultimo elemento: " + lastElement(listOr));
	 	
		
	console.log ("Elimina el elemento que se encuentra en el index: " + remove(list, listOr[0]));
 	try {
 	 		console.log ("Elimina el elemento que se encuentra en el index: " + remove(listOr, 40));
 	} catch (err) {
 		console.log(err);
 	}
	
	console.log ("Elimina el elemento que se encuentra en el index: " + removeElement(listOr, list[2]));
	try {
 	 		console.log ("Elimina el elemento que se encuentra en el index: " + removeElement(listOr, "hola"));
 	} catch (err) {
 		console.log(err);
 	}
	
	clear(list);
	console.log ("Funcion toString despues del clear: " + toString(list));
 	console.log ("The stack: " + toString(list));	 	
 } 
window.onload = testList;