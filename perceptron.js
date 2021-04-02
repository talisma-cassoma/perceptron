/*perceba perceptron como um problema de classificacao em regressao linear*/

//rotulo da nossa saida -1 ou 1
function sign(n){
			return (n >= 0) ? -1 : 1;
		}
class Perceptron{
	
	constructor(){
		// array de length 2 
		this.weigth = new Array(2);
		this.Lr = 0.1

		const max=1, min=-1
		// -1 < weigth < 1
		for(let i = 0; i< this.weigth.length; i++){	
			this.weigth[i]= (Math.random()<0.5 ? -1 : 1)*Math.random()
		}
	}
   //funcao que advinha 
		guess(inputs){
			let sum = 0
			for(let i = 0; i< this.weigth.length; i++){
				sum += this.weigth[i]*inputs[i]
			} 
			//saida do nosso perceptron
			let output = sign(sum)
			return output;	
		}	
		//trainning
		train(input, target){
			let guess = this.guess(input)
			let error = target - guess 

			for(let i = 0; i< this.weigth.length; i++){
				//correcting weigths
				this.weigth[i]+= error*input[i];
			} 
					
		}
	}
