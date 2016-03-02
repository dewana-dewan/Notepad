var c;
//pop up thing
document.getElementById('new-button').addEventListener('click',show_add_option);

//pop up background functioning
document.getElementById('hider').addEventListener('click',function(){
	document.getElementById('thetable').style.width = '20%';
	document.getElementById('thetable').style.left = '40%'
	document.getElementById('thetable').style.top = '40%';
	setTimeout(function(){	
		document.getElementById('list-add').style.opacity = '0';
	},100);
	document.getElementById('list-add').style.display = 'none';
	setTimeout(function(){	
		document.getElementById('text-add').style.opacity = '0';
	},100);
	document.getElementById('text-add').style.display = 'none';	
	document.getElementById('thetable').style.opacity = '0';
	
	setTimeout(function(){	
		document.getElementById('thetable').style.display = 'none';
	},1000);

	document.getElementById('hider').style.opacity = '0';

	setTimeout(function(){	
		document.getElementById('hider').style.display = 'none';
	},1000);
	document.getElementById('addda_shit').style.display = 'nonex';

});

function hider(){
	document.getElementById('thetable').style.width = '20%';
	document.getElementById('thetable').style.left = '40%'
	document.getElementById('thetable').style.top = '40%';
	setTimeout(function(){	
		document.getElementById('list-add').style.opacity = '0';
	},100);
	document.getElementById('list-add').style.display = 'none';
	setTimeout(function(){	
		document.getElementById('text-add').style.opacity = '0';
	},100);
	document.getElementById('text-add').style.display = 'none';	
	document.getElementById('thetable').style.opacity = '0';
	
	setTimeout(function(){	
		document.getElementById('thetable').style.display = 'none';
	},1000);

	document.getElementById('hider').style.opacity = '0';

	setTimeout(function(){	
		document.getElementById('hider').style.display = 'none';
	},1000);
	document.getElementById('addda_shit').style.display = 'nonex';

}

document.getElementById('add-list').addEventListener('click',function(){
	console.log('eee');
	c=1;
	setTimeout(function(){	
		document.getElementById('text-add').style.opacity = '0';
	},100);
	document.getElementById('text-add').style.display = 'none';	
	document.getElementById('list-add').style.display = 'initial';
	document.getElementById('addda_shit').style.display = 'initial';
	document.getElementById('thetable').style.top = '20%';
	document.getElementById('thetable').style.width = '30%';
	document.getElementById('thetable').style.left = '35%'
	setTimeout(function(){	
		document.getElementById('list-add').style.opacity = '1';
	},100);
})


//adding text wala note
document.getElementById('add-text').addEventListener('click',function(){
	setTimeout(function(){	
		document.getElementById('list-add').style.opacity = '0';
	},100);
	c =0;
	document.getElementById('list-add').style.display = 'none';
	document.getElementById('text-add').style.display = 'initial';
	document.getElementById('thetable').style.top = '20%';
	document.getElementById('thetable').style.width = '30%';
	document.getElementById('thetable').style.left = '35%'
	document.getElementById('addda_shit').style.display = 'initial';
	setTimeout(function(){	
		document.getElementById('text-add').style.opacity = '1';
		document.getElementById('text-note').style.height = '100px';

	},100);
});

function show_add_option(){

	document.getElementById('hider').style.display = 'initial';
	setTimeout(function(){	document.getElementById('hider').style.opacity = '1';},50);
	document.getElementById('thetable').style.display = 'initial';
	setTimeout(function(){	document.getElementById('thetable').style.opacity = '1';},50);

}

function addnode(){
	var cat = document.getElementById('node').innerHTML;
	var dog = document.getElementById('nodes').innerHTML;
	document.getElementById('nodes').innerHTML = dog + cat;
}

car = 1;

function get_in_feed(){
	var text = '';
	if(c == 0){
		text = "<center><h1 style = \"margin:15px\">" + document.getElementById('text-note-head').value + "</h1><hr style=\'width:60% \'>" + "<p>" + document.getElementById('text-note').value + "</p></center>";
	}
	document.getElementById('feed' + car).style.borderWidth = '1px';
	document.getElementById('feed' + car).innerHTML = text;
	car++;
	hider;
}