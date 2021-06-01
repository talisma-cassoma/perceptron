
//criar os dados de treinamento
let data = new Array(200)// numero de dados a treinar 

//obejto Perceptron
let p = new Perceptron

let getLabel = []
let getGuess = []
//usando a bibiotecla p5js afixar cada dado sob forma de circulos 
 function setup(){
	// um canvas 500x500
   var myCanvas = createCanvas(600, 600);
	myCanvas.parent("graphXY");//colocar  o canvas na div
	//criando dados randomicamente
	for(let i = 0; i< data.length; i++){
  	data[i]= new Data
		
		let input= []
 		input= [data[i].x, data[i].y]
		//treino
		p.train(input, data[i].label) //we have many data no need to train by epochs
		getGuess[i]=p.guess(input)
		getLabel[i]=data[i].label
	}
}
function draw(){
background(200);
stroke(255)// cor branca para eixos xy
line(0,height/2, width, height/2); //eixo x
line(width/2,0, width/2, height); //eixo y
//afixado os dados no plan 
stroke(0)
translate(width/2, height/2)// centrar o plano no centro do canvas
 for(let i = 0; i< data.length; i++){
	 data[i].show()
	}
	//recta que o plano em dois triangulos
stroke(255,5,0)
line(-width/2, -height/2, width/2, height/2)// recta y=ax+b
//com o treinamento			
 for(let i = 0; i< data.length; i++){
		
	  if(getGuess[i] == getLabel[i]){
		
		 fill(0, 255, 0)// green color
	 }else{
			fill(255, 0, 0)//red color
	 }
	noStroke()
	ellipse(data[i].x, data[i].y, 5, 5)
	}
}
