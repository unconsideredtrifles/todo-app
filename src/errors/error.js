function throwError(errorType) {
    let errors = {
        number: new NumberError(),
        day: new DayError(),
        month: new MonthError(),
    };

    let errorToThrow = errors[errorType];
    errorToThrow.throw();
}


class NumberError {
    constructor(errorMessage) {
        if(errorMessage === undefined) {
            this.errorMessage = "it must be a valid number";
            return;
        }
        this.errorMessage = errorMessage;
    }

    throw() {
        throw new TypeError(this.errorMessage);
    }
}


class DayError {
    constructor(errorMessage) {
        if(errorMessage === undefined) {
            this.errorMessage = "Day should be in a range from 1 to 31";
            return;
        }
        this.errorMessage = errorMessage;
    }

    throw() {
        throw new RangeError(this.errorMessage);
    }
}


class MonthError {
    constructor(errorMessage) {
        if(errorMessage === undefined) {
            this.errorMessage = "Month should be in a range from 1 to 12";
            return;
        }
        this.errorMessage = errorMessage;
    }

    throw() {
        throw new RangeError(this.errorMessage);
    }
}

export {
    throwError,
};