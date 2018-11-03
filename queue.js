"use strict";

/* Page functions */
 var NUMBERS_LIST= create(); function cleanData(){
 	document.getElementById ("num").value = "" ;  
 }

function addNumber(num){
	var error = document.getElementById ("error");
	var queue = document.getElementById ("queue");
	error.innerHTML = "";  
 	try {
	 	add(NUMBERS_QUEUE,num);
	 	queue.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
 	}	
}

function pollNumber (){
	var error = document.getElementById ("error");
	var queue = document.getElementById ("queue");
	error.innerHTML = "";  
 	try {
	 	poll(NUMBERS_QUEUE);
	 	queue.innerHTML = toString(NUMBERS_QUEUE);
 	} catch (err) {
 		error.innerHTML = err;
 	}		
}

/* queue Functions */
 var MAX_ELEMENTO = 5; 
 function create(){
 	var listOr = [];
 	for (var i = 0; i < MAX_ELEMENTO; i++){
 		listOr[i] = Number.NaN;
 	}
 	return listOr;
 } 

 function isEmpty(listOr){
 	var isEmpty = false;
 	if (isNaN(listOr[0])){
 		isEmpty = true;
 	}
 	return isEmpty;
 } 

 function isFull(listOr){
 	var isFull = false;
 	if (!isNaN(listOr[MAX_ELEMENTO-1])){
 		isFull = true;
 	}
 	return isFull;
 } 

 function size(listOr){
 	var length = 0;
 	while (length<MAX_ELEMENTO && !isNaN(listOr[length])){
 		length++;
 	}
 	return length;
 } 

 function add(listOr,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(queue)){
 		listOr[size(listOr)] = elem;
 	} else {
 		throw "La cola está llena. No puedes poner el elemento en él.";
 	}
 	return size(listOr);
 } 

 function poll(queue){
 	var elem = 0;
 	if (!isEmpty(queue)){ 			
 		var lastIndex = size(queue)-1;	
 		elem = queue[0]; 		 	 		
 		for (var i=0; i<lastIndex;i++){
 			queue[i] = queue[i+1];
 		} 		 		
 		queue[i] = Number.NaN;
 	} else {
 		throw "The queue is empty. You can't poll any element";
 	} 	
 	return elem;
 } 

function peek(queue){
 	var elem = 0;
 	if (!isEmpty(queue)){ 			
 		var lastIndex = size(queue)-1;	
 		elem = queue[0]; 		 	 		
 	} else {
 		throw "The queue is empty. You can't peek any element";
 	} 	
 	return elem;
 }

 function toString(listOr){
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

 function search(queue,elem){
 	var position = -1;
 	elem = parseInt(elem);
 	if (!isNaN(elem)) {
	 	if (!isEmpty(queue)){
	 		var length = size(queue);	
	 		var i=0;
	 		while (i<length && position === -1){
	 			if (queue[i] === elem) {
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

 function capacity(listOr){
 	return MAX_ELEMENTO;
 } 

 function clear(listOr){
 	var elem = Number.NaN;
 	if (!isEmpty(listOr)){
 		var length = size(listOr);	
 		for (var i = 0; i < length; i++){
 			listOr[i] = Number.NaN;
 		} 		 		 		
 	} 	
 } 

 function firstElement(listOr){
 	var first;
 	if (!isEmpty(listOr)){
 		first = listOr[0]; 		
 	} else {
 		throw "La lista esta vacia";
 	}
 	return first;
 } 

 function lastElement(listOr){
 	var last;
 	if (!isEmpty(listOr)){
 		last = listOr[size(listOr) - 1]; 		
 	} else {
 		throw "The queue is empty.";
 	}
 	return last;
 } 

 function testqueue(){
 	//var queue = create (); 	
 	var queue=[]; 	
 	console.log ("Capacidad: " + capacity(queue));
 	console.log("Es vacía: " + isEmpty(queue));
 	console.log("Tamaño: " + size(queue));

 	try {
	 	for (var i = 0; i<MAX_ELEMENTO; i++){
	 		console.log("Nº de elementos: " + add(listOr,i*10));
	 	}
	 	add(listOr,i); 
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("Los elementos son: " + toString(listOr));	 	
 	console.log ("El primer elemento de la lista es: " + firstElement(listOr));
 	console.log ("El ultimo elemento de la lista es: " + lastElement(listOr));

 	console.log ("is 40 in queue: " + search(queue,40));	 	
 	console.log ("is -40 in queue: " + search(queue,-40));	 	
 	//clear(queue);

 	try {
	 	while (true){
	 		console.log ("Unnonsumed Element: " + peek(queue));
	 		console.log ("Consumed Element: " + poll(queue));
	 		console.log ("The queue: " + toString(queue));	 	 		 	
	 	}
 	} catch (err) {
 		console.log(err); //When the queue is empty, an exception will be catched.
 	}

 	console.log ("La lista: " + toString(queue));	 	
 } 
window.onload = testqueue;
