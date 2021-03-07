class SLL {
    // constructor, other methods, removed for brevity
    display() {
    	// neatly display nodes in my list
        const output = ""
        let runner = this.head
        while(runner){
            output += runner.value + " "
            runner = runner.next
        }
        return output
    }
 }