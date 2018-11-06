"use strict";

/* Page functions */
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
 	return listOr;
 } 

 function isEmpty(listOr){
 	return (listOr.length === 0);
 } 

 function isFull(listOr){
 	return (listOr.length === MAX_ELEMENTO);
 } 

 function size(listOr){
 	return listOr.length;
 } 

 function add(listOr,elem){
 	elem = parseInt(elem);
 	if (isNaN(elem)) {
 		throw "El elemento no es un numero";
 	}
 	if (!isFull(listOr)){
 		listOr.push(elem);
		while(i < lenght){
			if(listOr[i] < elem){
					i++;
			} else{
				listOr.add(elem, listOr[i]);
			}
		}
 	} else {
 		throw "La cola está llena. No puedes poner el elemento en él.";
 	}
 	return size(listOr);
 } 

 function toString(listOr){
	return listOr.toString();
 } 

 function capacity(listOr){
 	return MAX_ELEMENTO;
 } 

 function clear(listOr){
 	var elem = Number.NaN;
 	if (!isEmpty(listOr)){
 		listOr.splice(0, listOr.length);	 		 		
 	} 	
 } 

 function firstElement(listOr){
 	var first;
 	if (!isEmpty(listOr)){
 		first = listOr[0]; 		
 	} else {
 		throw "El array está lleno.";
 	}
 	return first;
 } 

 function lastElement(listOr){
 	var last;
 	if (!isEmpty(listOr)){
 		last = listOr[listOr.length-1]; 			
 	} else {
 		throw "El array esta lleno.";
 	}
 	return last;
 } 
function indexOf(list, elem){
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

function lastIndexOf (listOr, elem){
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
 function testqueue(){
 	//var queue = create (); 	
 	var queue=[]; 	
 	console.log ("Capacidad: " + capacity(queue));
 	console.log("Es vacía: " + isEmpty(queue));
 	console.log("Longitud: " + size(queue));

 	try {
	 	for (var i=0; i<MAX_ELEM_QUEUE; i++){
	 		console.log("Nº de elementos: " + add(listOr,i*10));
	 	}
	 	add(listOr,i); //It will generate an exception.
 	} catch (err) {
 		console.log(err);
 	}

 	console.log ("The full queue: " + toString(listOr));	 	
 	console.log ("The first element queue: " + firstElement(listOr));
 	console.log ("The last element queue: " + lastElement(listOr));

 	console.log ("is 40 in queue: " + search(queue,40));	 	
 	console.log ("is -40 in queue: " + search(queue,-40));	 	
 	//clear(queue);

 	try {
	 	while (true){
	 		console.log ("Unnonsumed Element: " + peek(queue));
	 		console.log ("Consumed Element: " + poll(queue));
	 		console.log ("The queue: " + toString(listOr));	 	 		 	
	 	}
 	} catch (err) {
 		console.log(err); //When the queue is empty, an exception will be catched.
 	}

 	console.log ("The queue: " + toString(listOr));	 	
 } 
window.onload = testqueue;
