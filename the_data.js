
class Data{
	 constructor(){
		 // min < x < max e min < y < max
		 const max=400,min=0
		 
		 this.x = random( min, max)
		 this.y = random( min, max)
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
