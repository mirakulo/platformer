console.log("hello");
var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");

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
	}
});