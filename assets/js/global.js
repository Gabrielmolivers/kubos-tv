'use strict'




/*
--- ADICIONAR EVENTO EM MULTIPLOS ELEMENTOS ---
*/

const addEventOnElements = function (elements, eventType, callback) {
	for (const elem of elements) elem.addEventListener(eventType, callback);
}

/*
--- TOGGLE SEARCH BOX NO MOBILE OU TELA PEQUENA ---
*/

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", function(){
	searchBox.classList.toggle("active");
});