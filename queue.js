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
 
  function capacity(listOr){//Devuelve la capacidad de la lista
 	return MAX_ELEMENTO;
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
 		throw "La cola está llena. No puedes poner el elemento en él.";
 	}
 	return size(listOr);
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
 
  function firstElement(listOr){//Devuelve el primer elemento de la lista
 	var first;
 	if (!isEmpty(listOr)){
 		first = listOr[0]; 		
 	}else{
		throw "La lista esta vacia";
	}
 	return first;
 }
 
 function lastElement(listOr){//Devuelve el ultimo elemento de la lista
 	var last;
 	if (!isEmpty(listOr)){
			last = listOr[size(listOr)-1];
 	}else{
		throw "La lista esta vacia";
	}
 	return last;
 } 
 

function get (listOr,index){ //Devuelve el elemento de la lista de la posicion indicada
	if (index > MAX_ELEMENTO) {
 		throw "El indice esta fuera de la lista";
 	}
 	return listOr[index];
	
}


function indexOf(list, elem){//Devuelve la posicion del elemento indicado. Si el elemento no está en la lista devuelve -1
	elem = parseInt(elem);
	var tam = size(list);
	var i = 0;
	var encontrado = -1;
	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
	else{
		while (i <= tam && encontrado != i){
			if (elem === list[i]){
				encontrado = i;
			}
			i++;
		}
	}
	return encontrado;
}

function lastIndexOf(list, elem){//Devuelve la posicion del elemento indicado. Si el elemento no está en la lista devuelve -1
	elem = parseInt(elem);
	var tam = size(list);
	var encontrado = -1;
	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
	else{
		while (tam > 0 && encontrado != tam){
			if (elem === list[tam]){
				encontrado = tam;
			}
			tam--;
		}
	}
	return encontrado;
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

 function remove(listOr, index){//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
	var i = 0;
	var borrado = -1;
	if(index > MAX_ELEMENTO){
		throw "El indice esta fuera de los limites de la lista";
	}
	borrado = listOr[index];
	listOr[index] = Number.NaN;
	return borrado;
}

function removeElement(listOr, elem){//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso concreto
	if(isNaN(elem)){
		throw "El elemento no es un Number";
	}
	var i = 0;
	length = size(listOr);
	var borrado = false;

		while (i < length || borrado){
				if(listOr[i] == elem){
					var guardar =  listOr[(i+1)];
					listOr[i] = guardar;
					borrado = true;
				}
				i++
		}
	return borrado;
}
 
 function testqueue(){
 	var list=[]; 	
 	console.log ("Capacidad: " + capacity(list));
 	console.log("Es vacía: " + isEmpty(list));
 	console.log("Longitud: " + size(list));

 	try {
	 	for (var i=0; i<(MAX_ELEMENTO); i++){
	 		console.log("Nº de elementos: " + add(list,i*10));
	 	}
	 	add(list,i); //Genera una excepcion
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("Funcion toString: " + toString(list));
	
 	console.log ("El primer elemento: " + firstElement(list));
 	console.log ("El ultimo elemento: " + lastElement(list));
	 	
		
	console.log ("Elimina el elemento que se encuentra en el index: " + remove(list, 1));
 	try {
 	 		console.log ("Elimina el elemento que se encuentra en el index: " + remove(list, 2));
 	} catch (err) {
 		console.log(err);
 	}
	console.log ("Elimina el elemento que quieras de la lista: " + removeElement(list, 0));
	try {
 	 		console.log ("Elimina el elemento que quiereas de la lista: " + removeElement(list, "hola"));
 	} catch (err) {
 		console.log(err);
 	}
	clear(list);
	console.log ("Funcion toString despues del clear: " + clear(list));	 	
 } 
window.onload = testqueue;
