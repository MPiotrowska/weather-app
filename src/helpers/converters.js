export const kelvinToCelsius = (kelvinTemp) => {
    const celsiusNumber = Math.round(kelvinTemp - 273.15);
    return celsiusNumber;
}


export const meterToHour = (meterSec) => {
    const kmHour = Math.round(meterSec*3.6);
    return kmHour;
}

export const convertToKm = (meters) => {
    return Math.round(meters/1000);
}