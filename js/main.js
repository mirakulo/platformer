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
			// this.isWalking = true;
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

});


var keysPressed = {}

document.addEventListener("keydown", function(event){
	keysPressed[event.keyCode] = true;
});

document.addEventListener("keyup", function(event){
	delete keysPressed[event.keyCode];
});

function handleInput() {
	if(keysPressed[37]){
		character.xPos -= 5;
	}
	if(keysPressed[39]){
		character.xPos += 5;
	}
	if(keysPressed[40]){
		character.yPos += 10;
	}
	if(keysPressed[38]){
		character.yPos -= 10;
	}
}

function update(dt) {

}

function render() {
	character.render();
}


function tick(){
 	handleInput();
	update();
	render();
}

tick();

var gameLoopId = setInterval(tick, 16);