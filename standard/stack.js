 "use strict";

/* Page functions */
 var NUMBERS_STACK = create();
 function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function pushNumber(num){
	var error = document.getElementById ("error");
	var list = document.getElementById ("list");
	error.innerHTML = "";
 	try {
	 	push(NUMBERS_STACK,num);
	 	list.innerHTML = toString(NUMBERS_STACK);
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

 function pop(stack){
 	var elem = 0;
 	if (!isEmpty(stack)){ 			
 		elem = stack.pop();
 	} else {
 		throw "The stack is empty. You can't pop any element";
 	} 	
 	return elem;
 } 

function peek(stack){
 	var elem = 0;
 	if (!isEmpty(stack)){ 			
 		elem = stack[stack.length-1]; 
 	} else {
 		throw "The stack is empty. You can't pop any element";
 	} 	
 	return elem;
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

 function search(stack,elem){
 	var position = -1;
 	elem = parseInt(elem);
 	if (!isNaN(elem)) {
	 	if (!isEmpty(stack)){
	 		position = stack.indexOf(elem); 		
	 	} 		
 	} else{
 		throw "The element is not a number";
 	}
 	return position;
 } 

 function capacity(list){
 	return MAX_ELEMENTO;
 } 

 function clear(list){
 	var elem = Number.NaN;
	var tam = list.length
 	if (!isEmpty(stack)){
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

 function testStack(){
 	//var queue = create (); 	
 	var stack=[]; 	
 	console.log ("Capacidad: " + capacity(stack));
 	console.log("Es vacía: " + isEmpty(stack));
 	console.log("Longitud: " + size(stack));

 	try {
	 	for (var i=0; i<MAX_ELEM_STACK; i++){
	 		console.log("Nº de elementos: " + push(stack,i*10));
	 	}
	 	push(stack,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("The full stack: " + toString(stack));	 	
 	console.log ("The first element stack: " + firstElement(stack));
 	console.log ("The last element stack: " + lastElement(stack));

 	console.log ("is 40 in stack: " + search(stack,40));	 	
 	console.log ("is -40 in stack: " + search(stack,-40));	 	
 	//clear(stack);

 	try {
	 	while (true){
	 		console.log ("Unnonsumed Element: " + peek(stack));
	 		console.log ("Consumed Element: " + pop(stack));
	 		console.log ("The stack: " + toString(stack));	 	 		 	
	 	}
 	} catch (err) {
 		console.log(err); //When the queue is empty, an exception will be catched.
 	}

 	console.log ("The stack: " + toString(stack));	 	
 } 
window.onload = testStack;
