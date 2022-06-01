// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi pop.

module.exports = class Stack {
    constructor() {
        // TODO: answer here
        this.data = []
        this.size = 10
        this.top = -1
    }

    push(elemen) {
        // TODO: answer here
        if(this.data.length == this.size){
            throw("stack overflow");
        }else{
            this.top += 1
            return this.data.push(elemen)
        }
    }

    pop() {
        // TODO: answer here
        if(this.data.length == 0){
            throw("stack underflow") 
        }else{
            this.top -= 1
            return this.data.pop()
        }
    }
}
