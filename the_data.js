//train dataset
class Data{
	 constructor(){
		 // min < x < max e min < y < max
		 const max=200,min=-200
		 
		 this.x = random( min, max)
		 this.y = random( min, max)
		 this.label = (this.x > this.y) ? 1 : 0//-1
		 
		 }
		 show(){
			 stroke(0)
			 if(this.label==1){
				 fill(255)
			 }else{
				 fill(0)
			 }
			 ellipse(this.x,this.y,10,10)
		 }
	 }
