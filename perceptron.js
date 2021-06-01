
/*												=== THE MODEL	===
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
		trainning(data, labels){//trainnig our model by epochs means  repeat the train as many time we set to converge the wgths to desired ones	
			this.epoch=0
			let output= new Array(data.length)
			while(output!=labels){
				for(let i = 0; i< data.length; i++){
					//calling the train
					this.train(data[i], labels[i])
					output[i] = this.guess(data[i])
				}
				this.epoch++
				if(this.epoch==this.maxEpochs){ // I give max 400 epochs to converge else break the loop
					break;
				}
			}
		}				
}
// 							by Talisma	:) enjoy it!