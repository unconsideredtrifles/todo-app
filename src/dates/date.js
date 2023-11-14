import { isDirectInstanceOf, getPrototype} from "../misc/util.js";
import { throwError } from "../errors/error.js";

class ToDoDate {
    #date;

    constructor(dateStr) {
        let dateArgs = ToDoDate.convertToDateArgs(dateStr);
        this.#date = new Date(...dateArgs);
    }

    getDateStr() {
        let isoDateStr = this.#date.toISOString();
        let isoDatePart = isoDateStr.split("T")[0];
        let isoDatePartArr = isoDatePart.split("-");
        isoDatePartArr[1] = isoDatePartArr[1].padStart(2, "0");
        isoDatePartArr[2] = isoDatePartArr[2].padStart(2, "0");
        return isoDatePartArr.join("-");
    }

    static convertToDateArgs(dateStr) {
        /* this transforms dateStr into an array compatible
         * for arguments in Date constructor (with spread syntax)
         * for example, "2021-1-18" becomes [2021, 1, 18]
         */
        let dateArr = convertToDateArr(dateStr);
        dateArr[1]--; /* months start from 0 (not 1) */
        return dateArr;
    }
}


function convertToDateArr(dateStr) {
    /* convert date string into an array of numbers.
     * "2021-1-18" becomes [2021, 1, 18];
     */
    let dateArr = dateStr.split("-");
    return dateArr.map(Number);
}


class DateValidator {
    #dateArr; 

    constructor(dateStr) {
        this.#dateArr = convertToDateArr(dateStr);
    }

    validate() {
        if (!isDirectInstanceOf(this.#dateArr, Array) || this.#dateArr.length != 3) {
            return false;
        }

        let ifAllNumbers = this.#dateArr.every(eachNum => !isNaN(eachNum));

        if (!ifAllNumbers) {
            throwError("number");
        }

        let month = this.#dateArr[1];
        let day = this.#dateArr[2];

        let ifValidDay = day >= 1 && day <= DateValidator.getDaysInAMonth(day);
        if(!ifValidDay) {
            throwError("day");
        }

        let ifValidMonth = month >= 1 && month <= 12;
        if(!ifValidMonth) {
            throwError("month");
        }
    }

    static getDaysInAMonth(month) {
        let monthsWith30Days = [4, 6, 7, 9, 11];
        if (monthsWith30Days.includes(month)) {
            return 30;
        }
        return 31;
    }
}

export {
    ToDoDate,
    DateValidator,
};