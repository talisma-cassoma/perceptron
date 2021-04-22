function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

class Data{
	 constructor(){
		 // min < x < max e min < y < max
		 const max=400,min=0
		 
		 this.x = getRndInteger(min, max)
		 this.y = getRndInteger(min, max)
		 this.label = (this.x > this.y) ? 1 : -1
		 
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
