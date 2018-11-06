 "use strict";

/* Page functions */
 var NUMBERS_LIST = create();
 function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function pushNumber(num){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";
 	try {
	 	push(NUMBERS_LIST,num);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

function popNumber (){
	var error = document.getElementById ("error");
	var stack = document.getElementById ("list");
	error.innerHTML = "";  
 	try {
	 	pop(NUMBERS_LIST);
	 	list.innerHTML = toString(NUMBERS_LIST);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* stack Functions */
 var MAX_ELEMENTO = 5; 
 function create(){
 	var list = [];
 	return list;
 } 

 function isEmpty(list){
 	return (list.length === 0);
 } 

 function isFull(list){
 	return (list.length === MAX_ELEMENTO);
 } 

 function size(list){
 	return list.length;
 } 

 function push(list,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(list)){
 		list.push(elem);
 	} else {
 		throw "La pila está llena. No puedes poner el elemento en él.";
 	}
 	return size(list);
 } 
 
  function add(list,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(list)){
 		list.push(elem);
 	} else {
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

 function toString(list){
 	var str = "";
 	if (!isEmpty(list)){
 		var length = size(stack);	
 		for (var i=0; i<length-1;i++){
 			str = str + list[i] + " - ";
 		} 		 		
 		str = str + list[i]; 		
 	} 	
 	return str;
 } 

 function indexOf (list, elem){
	if(isNaN(elem)){
		throw "El elemento no es numero";
	}
 	if (!isEmpty(list)){
 		var encontrado = list.indexOf(elem);
 	}
	return encontrado;
 }
 
 function lastIndexOf (list, elem){
	if(isNaN(elem)){
		throw "El elemento no es numero";
	}
 	if (!isEmpty(list)){
 		var encontrado = list.lastIndexOf(elem);
 	}
	return encontrado;
 }
 
 function capacity(list){
 	return MAX_ELEMENTO;
 } 

 function clear(list){
 	var elem = Number.NaN;
	var tam = list.length;
 	if (!isEmpty(list)){
 		list.splice(0, tam);
 	} 	
 } 

 function firstElement(list){
 	var first;
 	if (!isEmpty(list)){
 		first = list[0]; 		
 	} else {
 		throw "La lista esta llena";
 	}
 	return first;
 } 

 function lastElement(list){
 	var last;
 	if (!isEmpty(list)){
 		last = list[list.length-1]; 		
 	} else {
 		throw "La lista esta llena.";
 	}
 	return last;
 } 

  function remove(list, index){
	var i = 0;
	length = size(list);
	var igual = false;
	if(index > MAX_ELEMEMENTO){
		throw "El indice esta fuera de los limites de la lista";
	}
	var borrado = list.splice(index);
	}
	return borrado;
}

function removeElement(list, elem){
	var i = 0;
	length = size(list);
	var igual = false;
	if(isNaN(elem)){
		throw "El elemento no es un Number";
	}
	
		for(var x = i; x < length; x++){
				var guardar =  list[(i+1)];
				list[i] = guardar;
		}
		igual = true;
		i++
	}
	return igual;
}
 
 function testStack(){
 	//var queue = create (); 	
 	var list=[]; 	
 	console.log ("Capacidad: " + capacity(list));
 	console.log("Es vacía: " + isEmpty(list));
 	console.log("Longitud: " + size(list));

 	try {
	 	for (var i=0; i<MAX_ELEMENTO; i++){
	 		console.log("Nº de elementos: " + push(list,i*10));
	 	}
	 	push(list,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("The full stack: " + toString(list));	 	
 	console.log ("The first element stack: " + firstElement(list));
 	console.log ("The last element stack: " + lastElement(list));

 	console.log ("is 40 in stack: " + search(stack,40));	 	
 	console.log ("is -40 in stack: " + search(stack,-40));	 	
 	//clear(stack);

 	try {
	 	while (true){
	 		console.log ("Unnonsumed Element: " + peek(stack));
	 		console.log ("Consumed Element: " + pop(stack));
	 		console.log ("The stack: " + toString(list));	 	 		 	
	 	}
 	} catch (err) {
 		console.log(err); //When the queue is empty, an exception will be catched.
 	}

 	console.log ("The stack: " + toString(list));	 	
 } 
window.onload = testStack;
