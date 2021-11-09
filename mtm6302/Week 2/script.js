const object = {
    value: 42,
    displayValue: function() {
        console.log(this.value)
    }
}

	
object.displayValue()