new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
        	result: function() {
        		return this.value > 15 ? 'Greater than 15' : 'Less than 15';
        	}
        },
        watch: {
        	result: function(value) {
        		var vm = this;
        		setTimeout(function() {
        			vm.value = 0;
        		}, 2000);
        	}
        }
    });