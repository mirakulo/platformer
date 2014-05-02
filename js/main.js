console.log("hello");
var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");
ctx.webkitImageSmoothingEnabled = false;
var character = {
	name: "Beamio",
	xPos: 47,
	yPos: 60,
	render: function() {
		cvs.width = cvs.width;
		ctx.fillStyle = "#D72700";
		ctx.fillRect(this.xPos + 3,this.yPos + 15,10,40);
		ctx.fillStyle = "black";
		ctx.fillRect(this.xPos,this.yPos,15,15);
	}
}

var marioSprite = new Image();
marioSprite.src = '../img/mario-sprite.gif';

marioSprite.addEventListener("load", function(){
	ctx.drawImage(marioSprite,12,5,12,15,0,0,60,75);
});


document.addEventListener("keydown", function(event){
	switch(event.keyCode){
		// Left arrow
		case 37:
			console.log('left');
			character.xPos -= 5;
			character.render();
		break;		
		// Right arrow
		case 39:
			console.log('right');
			character.xPos += 5;
			character.render();
		break;
		// Down arrow
		case 40:
			console.log('down');
			character.yPos +=10;
			character.render();
		break;
		// Up arrow
		case 38:
			console.log('up');
			character.yPos -=40;
			character.render();
		break;		
	}
});