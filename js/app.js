'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('about', 'about.html')
        ]);
    }
    init();

     document.addEventListener("DOMContentLoaded", init2);

    function init2() {
    	//const about = document.getElementById('click-1');
    	const home = document.getElementById('click-2')

	   //about.addEventListener('click', letGo('about'));
	   home.addEventListener('click', letGo);

	   function letGo(e) {
	   	alert(`kliknuo si ${e.explicitOriginalTarget.data}`);
	   }
    }
}());

