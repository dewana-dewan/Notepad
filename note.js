//***Starting Packery***

var elem = document.querySelector('.grid');
var pckry = new Packery( elem, {
  // options
  itemSelector: '.grid-item',
  gutter: 10
});

// element argument can be a selector string
//   for an individual element
var pckry = new Packery( '.grid', {
  // options
});

//***menu-btn animation***

var menubtn = document.getElementById('menu-btn');
menubtn.addEventListener("click", changetooption);

function changetooption(){
	//animation 1;
	//document.getElementsByClassName('grid')[0].style.transform = 'rotateY(90deg)';
	//document.getElementById('form').style.transform = 'rotateY(0deg)';
	
	//animation 2;
	//abhi ke liye this is good. :)
	document.getElementsByClassName('grid')[0].style.left = '1500px';
	document.getElementById('form').style.left = '20px';
	menubtn.removeEventListener("click", changetooption);
	menubtn.addEventListener('click', changetonotes);
	menubtn.title = "Back to notes";
}

function changetonotes(){
	document.getElementsByClassName('grid')[0].style.left = '10px';
	document.getElementById('form').style.left = '-1500px';
	menubtn.addEventListener("click", changetooption);
	menubtn.removeEventListener("click", changetonotes);
	menubtn.title = "A new Note";

}