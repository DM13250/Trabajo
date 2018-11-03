 "use strict";

/* Esto es la pagina con las funciones */
 var NUMBERS_STACK = create();
 function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function pushNumber(num){
	var error = document.getElementById ("error");
	var stack = document.getElementById ("stack");
	error.innerHTML = "";  
 	try {
	 	push(NUMBERS_STACK,num);
	 	stack.innerHTML = toString(NUMBERS_STACK);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

function popNumber (){
	var error = document.getElementById ("error");
	var stack = document.getElementById ("stack");
	error.innerHTML = "";  
 	try {
	 	pop(NUMBERS_STACK);
	 	stack.innerHTML = toString(NUMBERS_STACK);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* stack Functions */
 var MAXIMO_ELEMENTO = 5; 
 function create(){
 	var list = [];
 	for (var i=0; i<MAX_ELEMEMENTO; i++){
 		list[i] = Number.NaN;
 	}
 	return list;
 } 

 function isEmpty(list){
 	var isEmpty = false;
 	if (isNaN(list[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(list){
 	var isFull = false;
 	if (!isNaN(list[MAX_ELEMEMENTO-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(list){
 	var tam = 0;
 	while (tam < MAX_ELEMEMENTO && !isNaN(stack[tam])){
 		tam++;
 	}
 	return tam;
 } 

 function add(list,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(list)){
 		list[size(list)] = elem;
 	} else {
 		throw "La pila está llena. No puedes poner mas elementos en la lista.";
 	}
 	return size(list);
 } 
 
function addAt(list, elem, index){
	elem = parseInt(elem);
 	if (isNaN(elem) || isNaN(index)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(list)){
		var i = index;
		var lenght = size(list);
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

function get (list,index){
	index = parseInt(elem);
	if (isNaN(index)) {
 		throw "El index no es un numero";
 	}
	var lenght = size(list);
	else{
		while (i < index){
		var a = list[i];
 		list[i] = b;
		b = a;
 	} else {
 		throw "La pila está llena. No puedes poner mas elementos en la lista.";
 	}
 	return size(list);
	
}

function indexOf(list, elem){
	
}

function lastIndexOf (list, eleme){
	
}

 function toString(list){
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

 function search(stack,elem){
 	var position = -1;
 	elem = parseInt(elem);
 	if (!isNaN(elem)) {
	 	if (!isEmpty(stack)){
	 		var length = size(stack);	
	 		var i=0;
	 		while (i<length && position === -1){
	 			if (stack[i] === elem) {
	 				position = i;
	 			}
	 			i++;
	 		} 		 		
	 	} 		
 	} else{
 		throw "The element is not a number";
 	}
 	return position;
 } 

 function capacity(list){
 	return MAX_ELEMEMENTO;
 } 

 function clear(list){
 	var elem = Number.NaN;
 	if (!isEmpty(stack)){
 		var length = size(list);	
 		for (var i=0; i < length;i++){
 			stack[i] = Number.NaN;
 		} 		 		 		
 	} 	
 } 

 function firstElement(list){
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
 		throw "La pila esta vacia.";
 	}
 	return last;
 } 
function remove(list, index){
	var i = 0;
	length = size(list);
	var igual = false;
	while (i < length ){
		if (list[i] == elem || igual ){
			for(var x = i; x < length; x++){
				var borrado = list[i];
				var guardar =  list[(i+1)];
				lista[i] = guardar;
		}
		igual = true;
	}
		else{
			throw "El elemento no existe en la lista";
		}
		i++
	}
	return borrado;
}

function removeElement(list, elem){
	var i = 0;
	length = size(list);
	var igual = false;
	while (i < length ){
		if (list[i] == elem || igual ){
			for(var x = i; x < length; x++){
				var guardar =  list[(i+1)];
				lista[i] = guardar;
		}
		igual = true;
		else{
			throw "El elemento no existe en la lista";
		}
		i++
	}
	return igual;
}
 
 function testStack(){
 	//var queue = create (); 	
 	var stack=[]; 	
 	console.log ("Capacidad: " + capacity(stack));
 	console.log("Es vacía: " + isEmpty(stack));
 	console.log("Longitud: " + size(stack));

 	try {
	 	for (var i=0; i<MAX_ELEMEMENTO; i++){
	 		console.log("Nº de elementos: " + add(list,i*10));
	 	}
	 	add(list,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("Los elementos de la lista son: " + toString(list));	 	
 	console.log ("El primer elemento de la lista: " + firstElement(list));
 	console.log ("El ultimo elemento de la lista es: " + lastElement(list));

 	console.log ("is 40 in stack: " + search(stack,40));	 	
 	console.log ("is -40 in stack: " + search(stack,-40));	 	
 	//clear(stack);

 	try {
	 	while (true){
	 		console.log ("Unnonsumed Element: " + peek(stack));
	 		console.log ("Consumed Element: " + pop(stack));
	 		console.log ("Elemento : " + toString(list));	 	 		 	
	 	}
 	} catch (err) {
 		console.log(err); //When the queue is empty, an exception will be catched.
 	}

 	console.log ("The stack: " + toString(list));	 	
 } 
window.onload = testStack;
