 "use strict";

/* Esto es la pagina con las funciones */
 var NUMBERS_LIST = create();
 function cleanData(){
 	document.getElementById ("list").value = "" ;  
 }

function pushNumber(num){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_LIST,elem);
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
	 	remove(list, 0);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* Funciones de las listas */
 var MAX_ELEMENTO = 5; 
 function create(){//crea la lista vacía con una determinada longitud que ya esta dada
 	var list = [];
 	for (var i = 0; i < MAX_ELEMENTO; i++){
 		list[i] = Number.NaN;
 	}
 	return list;
 } 

 function isEmpty(list){//devuelve verdadero o falso si la lista esta vacia
 	var isEmpty = false;
 	if (isNaN(list[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(list){//devuelve verdadero o falso en función si la lista esta llena
 	var isFull = false;
 	if (!isNaN(list[MAX_ELEMENTO-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(list){//Devuelve el número de elementos de la lista
 	var tam = 0;
 	while (tam < MAX_ELEMENTO && !isNaN(list[tam])){
 		tam++;
 	}
 	return tam;
 } 

 function add(list,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "The element is not a number";
 	}
 	if (!isFull(list)){
 		list[size(list)] = elem;
 	} else {
 		throw "The queue is Full. You can't put the element in it";
 	}
 	return size(list);
 } 
 
function addAt(list, elem, index){
	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
	if(index > MAX_ELEMENTO){
		throw "El indice esta fuera de los limites de la lista";
	}
		var i = index;
		var lenght = size(list);
		var a;
		var b = elem;
		list[size(list)] = elem;
 	return size(list);
} 

function get (list,index){//Devuelve el elemento de la lista de la posicion indicada
	if (index > MAX_ELEMENTO) {
 		throw "El indice esta fuera de la lista";
 	}
	else{
		var lenght = size(list);
		var a = list[index];
	}
 	return a;
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

 function capacity(list){
 	return MAX_ELEMENTO;
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

 function clear(list){//Limpia la lista
 	var elem = Number.NaN;
 	if (!isEmpty(list)){
 		var length = size(list);	
 		for (var i=0; i < length;i++){
 			list[i] = Number.NaN;
 		} 		 		 		
 	} 	
 } 

 function firstElement(list){//Devuelve el primer elemento de la lista
 	var first;
 	if (!isEmpty(list)){
 		first = list[0]; 		
 	} else {
 		throw "La pila esta vacia.";
 	}
 	return first;
 } 

  function lastElement(list){
 	var last;
 	if (!isEmpty(list)){
 		last = list[size(list)-1]; 		
 	} else {
 		throw "La lista esta llena.";
 	}
 	return last;
 }
 
function remove(list, index){//Elimina el elemento de la posición indicada. Devuelve el elemento borrado
	length = size(list);
	var borrado = -1;
	if(index > MAX_ELEMENTO){
		throw "El indice esta fuera de los limites de la lista";
	}
		if( !isNaN(list[index]) ){
			borrado = list[index];
			list[index] = Number.NaN;
		}
	return borrado;
}

function removeElement(list, elem){//Elimina el elemento indicado de la lista. Devuelve true si se ha podido borrar el elemento, false en caso concreto
	var i = 0;
	length = size(list) - 1;
	var borrado = false;
	if(isNaN(elem)){
		throw "El elemento no es un Number";
	}else{
		while (i < length || borrado){
				if(list[i] == elem){
					var guardar =  list[(i+1)];
					list[i] = guardar;
					borrado = true;
				}
					i++
		}
	}
	return borrado;
}
 
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
	 	for (var i=0; i<(MAX_ELEMENTO); i++){
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
window.onload = testList;
