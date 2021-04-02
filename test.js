//test o cPerceptron
let p = new Perceptron

//const arr=[1,3]
//console.log(p.guess(arr)) 

//criar os dados de treinamento
pt = new Array(8)// pt.length = 8
let input= []

for(let i = 0; i< pt.length; i++){
 pt[i]= new Points

 //treino
 input= [pt[i].x, pt[i].y]
 p.train(input, pt[i].label)
}