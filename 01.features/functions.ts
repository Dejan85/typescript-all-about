const add = (a: number, b: number): number => {
    return a + b;
};

const substract = (a: number, b: number): void => {
    a - b;
};

function divide(a: number, b: number): number {
    return a / b;
};

const multyply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
    return null || undefined;

};

const throwError = (message: string): never => {
    throw new Error(message);
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string; }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);

};

logWeather(forecast);

const logWeatherDistract = ({ date, weather }: { date: Date, weather: string; }): void => {
    console.log(date);
    console.log(weather);

};

logWeatherDistract(forecast);