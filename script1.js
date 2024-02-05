class UberPriceCalculator {
    constructor(baseRate = 2, costPerMile = 1, costPerMinute = 0.2, minimumFare = 5.0) {
        this.baseRate = baseRate;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.minimumFare = minimumFare;
    }

    calculatePrice(distance, duration) {
      
        const fare = this.baseRate + (distance * this.costPerMile) + (duration * this.costPerMinute);
        return Math.max(fare, this.minimumFare);
    }
}


const uberCalculator = new UberPriceCalculator();


const distance = 10; 
const duration = 20; 


const price = uberCalculator.calculatePrice(distance, duration);

console.log(`The estimated Uber price is: rs.${price.toFixed(2)}`);
