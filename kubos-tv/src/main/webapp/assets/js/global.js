'use strict'




/*
--- ADICIONAR EVENTO EM MULTIPLOS ELEMENTOS ---
*/

const addEventOnElements = function (elements, eventType, callback) {
	for (const elem of elements) elem.addEventlistener(eventType, callback);
}

/*
--- TOGGLE SEARCH BOX NO MOBILE OU TELA PEQUENA ---
*/

