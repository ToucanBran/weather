export class WeatherForecast {
    max_temp: number;
    min_temp: number;
    datetime: string;
    weather: object;
    private _days = ['SUN', 'MON', 'TUES', 'WED', 'THU', 'FRI', 'SAT'];
    constructor() { }

    // Returns the day of the week for the given datetime
    getDay() {
        return (this._days[this.getDate().getDay()]);
    }

    getDescription() {
        return this.weather['description'] ? this.weather['description'] : '';
    }

    getMaxTempF() {
        return Math.round(this.getFahrenheit(this.max_temp));
    }

    getMinTempF() {
        return Math.round(this.getFahrenheit(this.min_temp));
    }

    getFahrenheit(celsius) {
        return (celsius * (9 / 5)) + 32;
    }

    getShortDate() {
        const date = this.getDate();
        return `${date.getMonth() + 1}-${date.getDate()}`;
    }

    getDate() {
        // this is cool and it works
        const [year, month, day] = this.datetime.split('-');

        // Have to create the date like this because it wasn't really
        // working by just passing in the normal string.
        return new Date(Number(year), Number(month) - 1, Number(day));
    }
}
