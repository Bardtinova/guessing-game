class GuessingGame {
    constructor(minValue, maxValue, guesNumber) {
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.guesNumber = guesNumber;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return this.guesNumber = Math.ceil((this.minValue + this.maxValue) / 2);

    }

    lower() {
        return this.maxValue = this.guesNumber;

    }

    greater() {
        return this.minValue = this.guesNumber;
    }
}

module.exports = GuessingGame;
