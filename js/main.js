console.log("hello");
var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");
ctx.webkitImageSmoothingEnabled = false;
var character = {
	name: "Mario",
	xPos: 47,
	yPos: 60,
	isWalking: false,
	render: function() {
		clearCanvas();
		if (this.isWalking){
			ctx.drawImage(marioSprite,114,4,15,16,this.xPos,this.yPos,75,80);
			this.isWalking = false;
		}else{
			ctx.drawImage(marioSprite,12,5,12,15,this.xPos,this.yPos,60,75);
			this.isWalking = true;
		}		
	}
}

function clearCanvas(){
	ctx.clearRect(0,0,cvs.width,cvs.height);
}

var marioSprite = new Image();
marioSprite.src = '../img/mario-sprite.gif';

marioSprite.addEventListener("load", function(){
	ctx.drawImage(marioSprite,12,5,12,15,0,0,60,75);
	//ctx.drawImage(marioSprite,114,4,15,16,0,0,75,80);
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