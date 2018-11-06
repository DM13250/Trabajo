"use strict";

/* Page functions */
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
 	if (!isFull(listOr)){
		while(i < lenght){
			if(listOr[i] < elem){
					i++;
			} else{
				guardar = listOr[i];
				listOr[i] = elem;
				elem = guardar;
			}
		}
 	} else {
 		throw "La cola está llena. No puedes poner el elemento en él.";
 	}
 	return size(listOr);
 } 
 

function get (listOr,index){
	if (index > MAX_ELEMENTO) {
 		throw "El indice esta fuera de la lista";
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
 	return listOr[index];
	
}

function indexOf(listOr, elem){
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

function lastIndexOf (listOr, elem){
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

 function remove(listOr, index){
	var i = 0;
	length = size(listOr);
	var igual = false;
	if(index > MAX_ELEMEMENTO){
		throw "El indice esta fuera de los limites de la lista";
	}
	var borrado = listOr.splice(index);
	return borrado;
}

function removeElement(listOr, elem){
	var i = 0;
	length = size(listOr);
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
	return igual;
}
 
 function testlistOr(){
 	//var queue = create (); 	
 	var listOr=[]; 	
 	console.log ("Capacidad: " + capacity(listOr));
 	console.log("Es vacía: " + isEmpty(listOr));
 	console.log("Tamaño: " + size(listOr));

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
	 		console.log ("The queue: " + toString(listOr));	 	 		 	
	 	}
 	} catch (err) {
 		console.log(err); //When the queue is empty, an exception will be catched.
 	}

 	console.log ("La lista: " + toString(listOr));	 	
 } 
window.onload = testqueue;
