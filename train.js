//criar os dados de treinamento
let data = new Array(100)// data.length = 
//variable p
let p;
//usando a bibiotecla p5js afixar cada dado sob forma de circulos 
function setup(){
	// um canvas 500x500
  createCanvas(500, 500);

	//obejt Perceptron
	p = new Perceptron
	//criando dados randomicamente
	for(let i = 0; i< data.length; i++){
  	data[i]= new Data
	}
}
async function draw(){
background(200);
//afixado os dados no plan
stroke(0)
 for(let i = 0; i< data.length; i++){
  data[i].show()
	}
	//recta que o plano em dois triangulos
line(0,0, width, height)

	//treinamento
 for(let i = 0; i< data.length; i++){
	let input= []
 	input= [data[i].x, data[i].y]
	//treino
	p.train(input, data[i].label)
	let getLabel = data[i].label
 	let getGuess = p.guess(input)

	  if(getGuess == getLabel){
		 fill(0, 255, 0)// green color
	 }else{
			fill(255, 0, 0)//red color
	 }
noStroke()
ellipse(data[i].x, data[i].y, 4, 4)
	}

}