class FibbonaciSeries{
    constructor(){

    }
    calculateFibonaciValue(number){
        var s = 0;
        var returnValue;

        if(number == 0){
            return (s);
        }

        if(number == 1){
            s += 1
            return (s);
        } 
        else{
            return (this.calculateFibonaciValue(number-1) + this.calculateFibonaciValue(number-2))
        }
    }
}

module.exports = new FibbonaciSeries();