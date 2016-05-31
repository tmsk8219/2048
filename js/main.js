var grid = [[],[],[],[]];
var numList = [[], [], [], []];
var move;
var end = 0;

document.onkeydown = keydown;

function keydown(){
	if(end == 0){
		if(event.keyCode == 37){
			onLeft();
		}else if(event.keyCode == 38){
			onUp();
		}else if(event.keyCode == 39){
			onRight();
		}else if(event.keyCode == 40){
			onDown();
		}
	}
}

function init(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			grid[i][j] = 0;
		}
	}
	genGrid();
}

function genGrid(){
	while(true){
		var rand_x1 = Math.floor(Math.random() * 4);
		var rand_y1 = Math.floor(Math.random() * 4);
		var rand_x2 = Math.floor(Math.random() * 4);
		var rand_y2 = Math.floor(Math.random() * 4);

		if(rand_x1 != rand_x2 || rand_y1 != rand_y2){
			grid[rand_x1][rand_y1] = 2;
			grid[rand_x2][rand_y2] = 2;
			break;
		}
	}

	move = 1;
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var ele = document.getElementById(4 * i + j);
			if(grid[i][j] == 0){
				ele.textContent = "";
			}else{
				ele.textContent = grid[i][j];
			}
		}
	}
	isNum();
}


function updateGrid(){
	var x, y;

	if(move == 1){
		while(true){
			x = Math.floor(Math.random() * 4);
			y = Math.floor(Math.random() * 4);
			if(grid[x][y] == 0){
				grid[x][y] = 2;
				break;
			}
		}

		for(var i = 0; i < 4; i++){
			for(var j = 0; j < 4; j++){
				var ele = document.getElementById(4 * i + j);
				if(grid[i][j] == 0){
					ele.textContent = "";
				}else{
					ele.textContent = grid[i][j];
				}
			}
		}
		isNum();
		if(endJudge() == 1){
			alert("Game Over!");
			end = 1;
		}else if(endJudge() == 2){
			alert("Clear!");
			end = 1;
		}
	}

}

function isNum(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var ele = document.getElementById(4 * i + j);
			if(grid[i][j] != 0){
				numList[i][j] = 1;
				if(grid[i][j] == 2){
					ele.style.color = "#786E66";
					ele.style.fontSize = 50 + "px";
					ele.style.backgroundColor = "#EEE4DA";
				}else if(grid[i][j] == 4){
					ele.style.color = "#786E66";
					ele.style.fontSize = 50 + "px";
					ele.style.backgroundColor = "#EDE0C8";
				}else if(grid[i][j] == 8){
					ele.style.color = "#FFFFFF";
					ele.style.fontSize = 50 + "px";
					ele.style.backgroundColor = "#F2B179";
				}else if(grid[i][j] == 16){
					ele.style.color = "#FFFFFF";
					ele.style.fontSize = 50 + "px";
					ele.style.backgroundColor = "#F59563";
				}else if(grid[i][j] == 32){
					ele.style.color = "#FFFFFF";
					ele.style.fontSize = 50 + "px";
					ele.style.backgroundColor = "#F67C5F";
				}else if(grid[i][j] == 64){
					ele.style.color = "#FFFFFF";
					ele.style.fontSize = 50 + "px";
					ele.style.backgroundColor = "#F65E3B";
				}else if(grid[i][j] == 128){
					ele.style.color = "#FFFFFF";
					ele.style.fontSize = 40 + "px";
					ele.style.backgroundColor = "#EDCF72";	
				}else if(grid[i][j] == 256){
					ele.style.color = "#FFFFFF";
					ele.style.fontSize = 40 + "px";
					ele.style.backgroundColor = "#EDCC61";
				}else if(grid[i][j] == 512){
					ele.style.color = "#FFFFFF";
					ele.style.fontSize = 40 + "px";
					ele.style.backgroundColor = "#E5C02B";
				}else if(grid[i][j] == 1024){
					ele.style.color = "#FFFFFF";
					ele.style.fontSize = 30 + "px";
					ele.style.backgroundColor = "#E3B914";
				}else if(grid[i][j] == 2048){
					ele.style.color = "#FFFFFF";
					ele.style.fontSize = 30 + "px";
					ele.style.backgroundColor = "#EDC401";
				}
			}else{
				numList[i][j] = 0;
				ele.style.color = "#FFFFFF";
				ele.style.fontSize = 30 + "px";
				ele.style.backgroundColor = "#CDBFB5";
			}
		}
	}
}

function change(){
	move = 0;
	for(var i = 0; i < 4; i++){
		if(numList[i].toString() == [0,0,0,0].toString()){

		}else if(numList[i].toString() == [0,0,0,1].toString()){

		}else if(numList[i].toString() == [0,0,1,0].toString()){
			move = 1;
			grid[i][3] = grid[i][2];
			grid[i][2] = 0;
		}else if(numList[i].toString() == [0,0,1,1].toString()){
			if(grid[i][2] == grid[i][3]){
				move = 1;
				grid[i][3] = grid[i][2] + grid[i][3];
				grid[i][2] = 0;
			}			
		}else if(numList[i].toString() == [0,1,0,0].toString()){
			move = 1;
			grid[i][3] = grid[i][1];
			grid[i][1] = 0;
		}else if(numList[i].toString() == [0,1,0,1].toString()){
			move = 1;
			if(grid[i][1] == grid[i][3]){
				grid[i][3] = grid[i][1] + grid[i][3];
				grid[i][1] = 0;
			}else{
				grid[i][2] = grid[i][1];
				grid[i][1] = 0;
			}
		}else if(numList[i].toString() == [0,1,1,0].toString()){
			move = 1;
			if(grid[i][1] == grid[i][2]){
				grid[i][3] = grid[i][1] + grid[i][2];
				grid[i][1] = 0;
				grid[i][2] = 0;
			}else{
				grid[i][3] = grid[i][2];
				grid[i][2] = grid[i][1];
				grid[i][1] = 0;
			}
		}else if(numList[i].toString() == [0,1,1,1].toString()){
			if(grid[i][2] == grid[i][3]){
				move = 1;
				grid[i][3] = grid[i][2] + grid[i][3];
				grid[i][2] = grid[i][1];
				grid[i][1] = 0;
			}else if(grid[i][1] == grid[i][2]){
				move = 1;
				grid[i][2] = grid[i][1] + grid[i][2];
				grid[i][1] = 0;
			}			
		}else if(numList[i].toString() == [1,0,0,0].toString()){
			move = 1;
			grid[i][3] = grid[i][0];
			grid[i][0] = 0;
		}else if(numList[i].toString() == [1,0,0,1].toString()){
			move = 1;
			if(grid[i][0] == grid[i][3]){
				grid[i][3] = grid[i][0] + grid[i][3];
				grid[i][0] = 0;
			}else{
				grid[i][2] = grid[i][0];
				grid[i][0] = 0;
			}
		}else if(numList[i].toString() == [1,0,1,0].toString()){
			move = 1;
			if(grid[i][0] == grid[i][2]){
				grid[i][3] = grid[i][0] + grid[i][2];
				grid[i][0] = 0;
				grid[i][2] = 0;
			}else{
				grid[i][3] = grid[i][2];
				grid[i][2] = grid[i][0];
				grid[i][0] = 0;
			}
		}else if(numList[i].toString() == [1,0,1,1].toString()){
			move = 1;
			if(grid[i][0] == grid[i][2]){
				grid[i][2] = grid[i][0] + grid[i][2];
				grid[i][0] = 0;
			}else if(grid[i][2] == grid[i][3]){
				grid[i][3] = grid[i][2] + grid[i][3];
				grid[i][2] = grid[i][0];
				grid[i][0] = 0;
			}else{
				grid[i][1] = grid[i][0];
				grid[i][0] = 0;
			}
		}else if(numList[i].toString() == [1,1,0,0].toString()){
			move = 1;
			if(grid[i][0] == grid[i][1]){
				grid[i][3] = grid[i][0] + grid[i][1];
				grid[i][0] = 0;
				grid[i][1] = 0;
			}else{
				grid[i][2] = grid[i][0];
				grid[i][3] = grid[i][1];
				grid[i][0] = 0;
				grid[i][1] = 0;
			}
		}else if(numList[i].toString() == [1,1,0,1].toString()){
			move = 1;
			if(grid[i][0] == grid[i][1]){
				grid[i][2] = grid[i][0] + grid[i][1];
				grid[i][0] = 0;
				grid[i][1] = 0;
			}else if(grid[i][1] == grid[i][3]){
				grid[i][3] = grid[i][1] + grid[i][3];
				grid[i][2] = grid[i][0];
				grid[i][0] = 0;
				grid[i][1] = 0;
			}else{
				grid[i][2] = grid[i][1];
				grid[i][1] = grid[i][0];
				grid[i][0] = 0;
			}
		}else if(numList[i].toString() == [1,1,1,0].toString()){
			move = 1;
			if(grid[i][0] == grid[i][1]){
				grid[i][3] = grid[i][2];
				grid[i][2] = grid[i][0] + grid[i][1];
				grid[i][0] = 0;
				grid[i][1] = 0;
			}else if(grid[i][1] == grid[i][2]){
				grid[i][3] = grid[i][1] + grid[i][2];
				grid[i][2] = grid[i][0];
				grid[i][0] = 0;
				grid[i][1] = 0;
			}else{
				grid[i][3] = grid[i][2];
				grid[i][2] = grid[i][1];
				grid[i][1] = grid[i][0];
				grid[i][0] = 0;
			}
		}else if(numList[i].toString() == [1,1,1,1].toString()){
			if(grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2] && grid[i][2] == grid[i][3]){
				move = 1;
				grid[i][3] = grid[i][2] + grid[i][3];
				grid[i][2] = grid[i][0] + grid[i][1];
				grid[i][0] = 0;
				grid[i][1] = 0;
			}else if(grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]){
				move = 1;
				grid[i][2] = grid[i][1] + grid[i][2];
				grid[i][1] = grid[i][0];
				grid[i][0] = 0;
			}else if(grid[i][1] == grid[i][2] && grid[i][2] == grid[i][3]){
				move = 1;
				grid[i][3] = grid[i][2] + grid[i][3];
				grid[i][2] = grid[i][1];
				grid[i][1] = grid[i][0];
				grid[i][0] = 0;
			}else if(grid[i][0] == grid[i][1]){
				move = 1;
				grid[i][1] = grid[i][0] + grid[i][1];
				grid[i][0] = 0;
			}else if(grid[i][1] == grid[i][2]){
				move = 1;
				grid[i][2] = grid[i][1] + grid[i][2];
				grid[i][1] = grid[i][0];
				grid[i][0] = 0;
			}else if(grid[i][2] == grid[i][3]){
				move = 1;
				grid[i][3] = grid[i][2] + grid[i][3];
				grid[i][2] = grid[i][1];
				grid[i][1] = grid[i][0];
				grid[i][0] = 0;
			}
		}
	}
}

function onRight(){
	change();
	updateGrid();
}

function reverse(){
	for(var i = 0; i < 4; i++){
		var tmp = grid[i][0];
		grid[i][0] = grid[i][3];
		grid[i][3] = tmp;
		tmp = grid[i][1];
		grid[i][1] = grid[i][2];
		grid[i][2] = tmp;
	}
	isNum();
}

function rotateR(){
	var tmp = [[], [], [], []];
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			tmp[i][j] = grid[i][j];
		}
	}

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			grid[j][3-i] = tmp[i][j];
		}
	}
	isNum();
}

function rotateL(){
	var tmp = [[], [], [], []];
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			tmp[i][j] = grid[i][j];
		}
	}

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			grid[3-j][i] = tmp[i][j];
		}
	}
	isNum();
}

function endJudge(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			if(grid[i][j] == 2048){
				return 2;
			}
		}
	}

	if(numList.toString() != [[1,1,1,1],[1,1,1,1],[1,1,1,1,],[1,1,1,1]].toString()){
		return 0;
	}

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var currentNum = grid[i][j];
			if(i != 0){
				if(currentNum == grid[i-1][j]){
					return 0;
				}
			}
			if(j != 0){
				if(currentNum == grid[i][j-1]){
					return 0;
				}
			}
			if(i != 3){
				if(currentNum == grid[i+1][j]){
					return 0;
				}
			}
			if(j != 3){
				if(currentNum == grid[i][j+1]){
					return 0;
				}
			}
		}
	}
	return 1;
}

function onLeft(){
	reverse();
	change();
	reverse();
	updateGrid();
}

function onUp(){
	rotateR();
	change();
	rotateL();
	updateGrid();
}

function onDown(){
	rotateL();
	change();
	rotateR();
	updateGrid();
}