//							=== examples with logic gates	===
//
let dataset = [		[0,0],
									[0,1], 
									[1,0],
									[1,1]]
//or gate
let OR = new Perceptron()
OR.bias=0, OR.lrnRate= 0.5
OR.trainning( dataset, [0,1,1,1])// 80 epochs nedded

//end gate 
let AND= new Perceptron()
AND.bias = -1
AND.lrnRate = 0.05 
AND.trainning( dataset, [0,0,0,1]) // 400 epochs nedded

//nand gate  
let NAND = new Perceptron()
NAND.bias = 1, NAND.lrnRate= 0.5
NAND.trainning( dataset, [1,1,1,0])   

