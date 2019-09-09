
// Literation 2

var dis = new Vue({
	el:'#Display',
	data:{

	},

	methods:{
		display1(){
			vm1.game1=true,
			vm2.game2=false,
			vm3.game3=false,
			vm4.game4=false
		},

		display2(){
			vm2.game2=true,
			vm1.game1=false,
			vm3.game3=false,
			vm4.game4=false
		},
		display3(){
			vm3.game3=true,
			vm2.game2=false,
			vm1.game1=false,
			vm4.game4=false
		},
		display4(){
			vm4.game4=true,
			vm2.game2=false,
			vm1.game1=false,
			vm3.game3=false
		}

	}

});
  var vm2 = new Vue({
    el:'#app2',
    data:{
      result: "",
      count:0,
	  absValue:null,
      correctNumber:null,
      guessNumber:null,
	  game2:false
    },

    methods: {

      resetGame(){
        this.count = 0
        this.correctNumber = Math.floor((Math.random() * 100));
        this.result = "Please guess a number, enter it, and press Guess."

      },

      guess(){

        if (this.guessNumber != null && this.correctNumber !=null){

          this.count++
		  absValue = Math.abs(this.correctNumber - this.guessNumber);

          if(absValue >= 40){
            this.result = "COLD"
          }

          else if(absValue>=20 && absValue <= 39){
            this.result = "COOL"
          }

		  else if(absValue>=10 && absValue <= 19){
            this.result = "WARM"
          }

		  else if(absValue>=1 && absValue <= 9){
            this.result = "HOT"
          }

          else{
            this.result = "Well Done! It took you " + this.count + " attempts to guess this number"
            this.count = 0
          }

            this.guessNumber = ""
          }

        }
      },
});
