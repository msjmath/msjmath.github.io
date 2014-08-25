var page= new Object();

page.toppler=false;
page.meowanim=0;
page.scrollar=0;
page.navanim=0;

page.scroll = function() {
	document.getElementById("header").style.top=Math.max(0-window.pageYOffset,-125);
	if(window.pageYOffset>125 && !page.toppler){
		//animatenavbaropen
		page.nav_open();
		page.toppler=true;
	}
	if(window.pageYOffset<125 && page.toppler){
		//animatenavbarclose
		page.nav_close();
		page.toppler=false;
	}
	
	
	
}

page.nav_open = function(){
	if (page.meowanim){
		clearInterval(page.meowanim);
	}
	page.timer=0;
	page.navanim=setInterval(function(){
		page.timer+=0.02;
		document.getElementById("nav_anim").style.left=150*(-200+(1-Math.pow(5,-page.timer))*400)/184;
		document.getElementById("nav_anim2").style.right=150*(-200+(1-Math.pow(5,-page.timer))*400)/184;
		if (page.timer>2){
			clearInterval(page.navanim);
		}
	}, 20);
}

page.nav_close = function(){
	clearInterval(page.navanim);
	page.catcher=page.timer;
	page.timer=0;
	page.meowanim=setInterval(function(){
		page.timer+=0.02;
		document.getElementById("nav_anim").style.left=Math.pow(3,-page.timer)*(150*(-200+(1-Math.pow(5,-page.catcher))*400)/184+400)-400;
		document.getElementById("nav_anim2").style.right=Math.pow(3,-page.timer)*(150*(-200+(1-Math.pow(5,-page.catcher))*400)/184+400)-400;
		if (page.timer>2){
			clearInterval(page.meowanim);
		}
	}, 20);
}

page.scrolltop = function(){
	if (page.meowanim){
		clearInterval(page.meowanim);
	}
	if (page.scrollar){
		clearInterval(page.scrollar);
	}
	page.timer=0;
	page.scrollar=setInterval(function(){
		page.timer+=0.02;
		window.scrollTo(0,0.9*window.pageYOffset-1);
		if (window.pageYOffset<1){
			clearInterval(page.scrollar);
		}
	}, 20);
	
}
