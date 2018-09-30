export class WeatherForecast {
    max_temp: number;
    min_temp: number;
    datetime: string;
    weather: object;
    private _days = ['SUN', 'MON', 'TUES', 'WED', 'THU', 'FRI', 'SAT'];
    constructor() { }

    // Returns the day of the week for the given datetime
    getDay() {
        // this is cool and it works
        const [year, month, day] = this.datetime.split('-');

        // Have to create the date like this because it wasn't really
        // working by just passing in the normal string.
        const date = new Date(Number(year), Number(month) - 1, Number(day));
        return (this._days[date.getDay()]);
    }
    
    getDescription() {
        return this.weather['description'] ? this.weather['description'] : '';
    }
}
