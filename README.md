# single layer perceptron 

using js i made (and i trained) a single layer perceptron.  a perceptron is also the most simple neural network model there is 
i'm studing machine learning and deep learning and for better understending concepts and algorithms i'm writing those algoritms in javascript and i admit having fun with it
```js

/*				=== THE MODEL	===
perceba perceptron como um problema de classificacao em regressao linear*/

//the labels of our output is 0 or 1
function sign(n){
			return (n > 0) ? 1 : 0;//Heaviside step function
		}
class Perceptron{
	
	constructor(){
		// array de length 2 
		this.weigth = new Array(2);
		this.lrnRate = 0.01 // learning Rate
		this.bias=0 //the bias help us to determinate our output when input are only zeros
		this.epoch 
		this.maxEpochs=800

		// -1 < weigth < 1
		for(let i = 0; i< this.weigth.length; i++){	
			this.weigth[i]= ((Math.random()<=0.5)? -1 : 1)*Math.random()
		}
	}
		//the train method 
		train(input, target){
			
			for(let i = 0; i< this.weigth.length; i++){
			let guess = this.guess(input)
			let error = target - guess 
				//correcting weigths
				this.weigth[i]+= error*input[i]*this.lrnRate;
				}
		}
    //guess method 
		guess(inputs){// feedforward
			let sum = 0
			for(let i = 0; i< this.weigth.length; i++){
				//the weigred sum
				sum += this.weigth[i]*inputs[i]
			}	 
			sum+= this.bias // Σwx + bias 
			//outputo of perceptron
			let output = sign(sum)
			return output;	
		}	
		//trainnig our model by epochs 	
		trainning(data, labels){//trainnig our model by epochs means  repeat 
    //the train as many time we set to converge the wgths to desired ones	
			this.epoch=0
			let output= new Array(data.length)
			while(output!=labels){
				for(let i = 0; i< data.length; i++){
					//calling the train
					this.train(data[i], labels[i])
					output[i] = this.guess(data[i])
				}
				this.epoch++
				if(this.epoch==this.maxEpochs){ // I give max 400 epochs 
        //to converge else break the loop
					break;
				}
			}
		}				
}
//                                by Talisma	:) enjoy it!
```


* to visualize the data i used P5js a js library that uses canvas for draw in html,

# what problems can a single perceptron can solve?

a simple perceptron can only solve linearly separable problems

* How to know whether the data is linearly separable?

usually we can just visualise the data if its a 1, 2 or enven 3 dimention data and it 
//really not worth it cause single layer percetron also becomes an unviable (bad) model 
//when there is a the data has too much params(ex data(x, y, z, k)) 


🤩 special thanks for "the coding train" for their marvelous neural network playlist on youtube

