class Data{
	 constructor(){
		 // min < x < max e min < y < max
		 const max=500,min=0
		 this.x = Math.floor(Math.random() * (max - min + 1) ) + min;
		 this.y = Math.floor(Math.random() * (max - min + 1) ) + min;
		 this.label = (this.x > this.y) ? 1 : -1
		 }
		 show(){
			 stroke(0)
			 if(this.label==1){
				 fill(255)
			 }else{
				 fill(0)
			 }
			 ellipse(this.x,this.y,8,8)
		 }
	 }
