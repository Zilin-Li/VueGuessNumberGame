
// Literation 1
  var vm1 = new Vue({
    el:'#app1',
    data:{
      result: "",
      count:0,
      correctNumber:null,
      guessNumber:null,
	  game1:false
    },

    methods: {

      // Prepare or renew the game.
      init(){
        this.count = 0
        this.correctNumber = Math.floor((Math.random() * 100));
        this.result = "Please guess a number, enter it, and press Guess."

      },

      guess(){

        if (this.guessNumber != null && this.correctNumber !=null){

          this.count++

          if(this.correctNumber > this.guessNumber){
            this.result = "Try higher"
          }

          else if(this.correctNumber < this.guessNumber){
            this.result = "Try lower"
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
