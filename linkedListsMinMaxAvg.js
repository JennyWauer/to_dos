function maxMinAvg() {
    var count = 0;
    var max = this.head.value
    var min = this.head.value
    var runner = this.head
    while(runner) {
        count += runner.value;
        if(runner.value > max) {
            max = runner.value
        }
        else if(runner.value < min) {
            min = runner.value
        }
        runner = runner.next
    }
    return `max: ${max}, min: ${min}, avg: ${count/this.length()}`
}