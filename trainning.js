class Points{
	 constructor(){
		 // -10 < x < 10 e -10 < y < 10
		 this.x = (Math.random()<0.5 ? -10 : 10)*Math.random()
		 this.y = (Math.random()<0.5 ? -10 : 10)*Math.random()
		 this.label = (this.x > this.y) ? 1 : -1
		 }
	 }
