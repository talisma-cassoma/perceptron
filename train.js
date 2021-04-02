//obejt Perceptron
let p = new Perceptron

//criar os dados de treinamento
let data = new Array(1)// data.length = 
let input= []

for(let i = 0; i< data.length; i++){
  data[i]= new Data
 
 //treino
 input= [data[i].x, data[i].y]
 p.guess(input)
 //p.train(input, data[i].label)
}
