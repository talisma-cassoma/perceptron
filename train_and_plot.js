
//criar os dados de treinamento
let data = new Array(100)// numero de dados a treinar 

//obejto Perceptron
let p = new Perceptron

let getLabel = []
let getGuess = []
//usando a bibiotecla p5js afixar cada dado sob forma de circulos 
 function setup(){
	// um canvas 500x500
  createCanvas(500, 500);

	//criando dados randomicamente
	for(let i = 0; i< data.length; i++){
  	data[i]= new Data
		
		let input= []
 		input= [data[i].x, data[i].y]
		//treino
		p.train(input, data[i].label)
		getGuess[i]=p.guess(input)
		getLabel[i]=data[i].label
	}
}
function draw(){
background(200);
//afixado os dados no plan 
stroke(0)
 for(let i = 0; i< data.length; i++){
	 data[i].show()
	}
	//recta que o plano em dois triangulos
line(0,0, width, height)

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
