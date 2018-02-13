new Vue({
  el: '#exercise',
  data: {
  	switchEffect: true,
  	big: 'big',
  	caps: 'caps',
  	userInputClass: '',
  	trueFalseInput: false,
    bgColor: '',
    progressBarWidth: 0
  },
  methods: {
    startEffect: function() {
    	var vm = this;
    	setInterval(function(){
    		vm.switchEffect = !vm.switchEffect;
    	},2000)
    },
    startProgress: function() {
      var vm = this;
      setInterval(function(){
        vm.progressBarWidth += 1;
        console.log(vm.progressBarWidth);
      },20)

    },
    checkTrueFalse: function(event) {
      event.target.value == "true" ? this.trueFalseInput = true : this.trueFalseInput = false;
      console.log(this.trueFalseInput);
    }
  },
  computed: {
    divClasses: function() {
      return {
        rainbow : this.trueFalseInput
      }
    }
  }
});