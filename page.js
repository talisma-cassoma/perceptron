
run= document.querySelector("#run")
let  bias_="bias"  
	 		x1="X1",
	 		x2="X2",
	 		y=" Y ";
		logic_gate=	"     OR"

//-----------------model animation-----------
var canva= document.getElementById('percep')
var ctx = canva.getContext('2d')
class mouvingByte{
	constructor(x0, y0, y1){
	this.x= x0 
	this.y= y0
	this.y_= y1
	this.radius= 5,
  this.color = 'blue'
	}
	draw(){
	//-------drawing-------- 
	const y1= 150
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
	ctx.closePath();
	ctx.fillStyle = this.color;
	ctx.fill();
	ctx.stroke();
	//--------limits--------
		if (this.x == 260 ) {//pass away
				this.x += 80
				}
		if (this.x == 500 ) {//restart
				this.x = 100

				}
  	}
	}
//----------network fig---
let LOGIC_GATE={
	byte0: new mouvingByte(100, 50),
	byte1: new mouvingByte(100, 150),
	byte2: new mouvingByte(100, 250),
	draw: function(){

		//CIRCULO
		ctx.arc(canva.width/2, canva.height/2, 40, 0, 2 * Math.PI);
		ctx.fillStyle = "#fff"; //fill color
		ctx.fill();
		//text "OR"
		ctx.fillStyle = "green";
		ctx.font = "15px Lato";
		ctx.fillText(`${logic_gate}`, (canva.width/2)-25, (canva.height/2)+10);
		ctx.fillStyle = "#fff";
		ctx.font = "12px Lato";
		//X1
		ctx.fillText(`${x1}`, 	40, 50);
		//X2
		ctx.fillText(`${x2}`, 	40,	canva.height/2);
		//bias
		ctx.fillText(`${bias_}`, 40, canva.height-50);
		//y
		ctx.fillText(`${y}`, 	510,canva.height/2);
		//L1		----> uma linha é a ligacao de dois pontos no espaço
		ctx.beginPath();
		ctx.moveTo(canva.width/2-40,canva.height/2 ); 		
		ctx.lineTo(100, 50); //
		//L2
		ctx.moveTo(canva.width/2-40,canva.height/2 ); 		
		ctx.lineTo(100, canva.height/2); //
		//L3
		ctx.moveTo(canva.width/2-40,canva.height/2);
		ctx.lineTo(100, canva.height-50); //
		//this.ctx.stroke();
		//L4 
		ctx.moveTo(canva.width/2+40,canva.height/2 ); 		
		ctx.lineTo(500, canva.height/2); //
		ctx.lineWidth = 2;
		ctx.strokeStyle = '#fff'
		ctx.stroke();
		//mouvingByte
		this.byte0.draw()
		//mouvingByte1
		this.byte1.draw()
		//mouvingByte2
		this.byte2.draw()
		}
}

var raf;
LOGIC_GATE.draw()

function animate(){
  ctx.clearRect(0,0, canva.width, canva.height);
	LOGIC_GATE.draw()
	//line1															mx + b
	 LOGIC_GATE.byte0.y= (LOGIC_GATE.byte0.x<260) ? (0.625*LOGIC_GATE.byte0.x-12.5):150
	 LOGIC_GATE.byte0.x++
	//line2
	LOGIC_GATE.byte1.y = 150
  LOGIC_GATE.byte1.x++
		//line1														mx + b	
	 LOGIC_GATE.byte2.y= (LOGIC_GATE.byte0.x<260) ? (-0.625*LOGIC_GATE.byte2.x+312.5):150
	 LOGIC_GATE.byte2.x++
	//----------show in html
	logic_gate= form.gate.value

	 		x1=form.input1.value
	 		x2=form.input2.value
	//update y
	if(LOGIC_GATE.byte0.x>499){
		switch(logic_gate){
			case "   AND":
						bias_=AND.bias 
						y=AND.guess([parseInt(x1),parseInt(x2)])
						//help text
						form.helpText.innerText= `some help for you :
			bias = -1 learning Rate = 0.05, 400 epochs nedded train
			w1=${AND.weigth[0]} 
			w2=${AND.weigth[1]}`
			break;
			case "    OR":
						bias_=OR.bias
						y=OR.guess([parseInt(x1),parseInt(x2)])
						//help text
						form.helpText.innerText= `some help for you :
			bias=0, learning Rate = 0.5 , 80 epochs nedded for train
			w1=${OR.weigth[0]} 
			w2=${OR.weigth[1]}`
			break;
			case " NAND":
						bias_=NAND.bias
						y=NAND.guess([parseInt(x1),parseInt(x2)])
						//help text
						form.helpText.innerText= `some help for you :
			bias = 1, learning Rate = 0.5, 400 epochs nedded train
			w1=${NAND.weigth[0]} 
			w2=${NAND.weigth[1]}`
		}
	}
	//animation request
  raf = window.requestAnimationFrame(animate);
}
 //---------------html part-	
 
 run.addEventListener('click', runPercetron);
	let form ={
	gate: document.querySelector("#LOGIC_GATE"),
	input1: document.querySelector("#input1"),
	input2: document.querySelector("#input2"),
	lrngR: document.querySelector("#learningRate"),
	bias: document.querySelector("#bias"),
	epochs: document.querySelector("#epochs"),
	btn_train: document.querySelector("#train"),
	helpText: document.querySelector("#help_text")
	}
	
	function runPercetron(){	
		//stop Animation if it's also running
		window.cancelAnimationFrame(raf)
		//call animation	
		raf = window.requestAnimationFrame(animate)
			//	window.cancelAnimationFrame(raf)
	}