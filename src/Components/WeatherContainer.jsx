import React from "react";
import sunSVG from "../Images/sun.svg";
import windSVG from "../Images/wind.svg";
import thermometerSVG from "../Images/thermometer.svg";
import { kelvinToCelsius, meterToHour, convertToKm } from '../helpers/converters';


const getSvg = (text) => {
  switch (text) {
    case "Humidity":
      return windSVG;
    case "Visibility":
      return thermometerSVG;
    case "Description":
      return sunSVG;
    default:
      return windSVG;
  }
};

function Column(props) {
  const hasIcon = props.icon;

  return (
    <article className="weatherParameters smallerBox">
      <div className="svg-container">
        {hasIcon ? (
          <img
            src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            width="25"
            height="25"
            alt=""
          />
        ) : (
          <img
            className="svg"
            src={getSvg(props.text)}
            alt=""
            width="20"
            height="20"
          />
        )}
        <span>{props.text === 'Description' && props.info ? props.info : props.text}</span>
      </div>
      {props.text !== 'Description' && props.info && <p className='info'>{props.info}</p>}
    </article>
  );
}

function WeatherContainer(props) {
  const description =
    (props &&
      props.weatherInfo &&
      props.weatherInfo.weather &&
      props.weatherInfo.weather[0] &&
      props.weatherInfo.weather[0].description) ||
    "";

  const icon =
    (props &&
      props.weatherInfo &&
      props.weatherInfo.weather &&
      props.weatherInfo.weather[0] &&
      props.weatherInfo.weather[0].icon) ||
    "";

  const windSpeed = props?.weatherInfo?.wind?.speed ?? "";
  const humidity = props?.weatherInfo?.main?.humidity
    ? `${props.weatherInfo.main.humidity}%`
    : "";

  const visibility = props?.weatherInfo?.visibility ?? "";

  const temperature = props?.weatherInfo?.main?.temp ?? "";

  const feelsLike = props?.weatherInfo?.main?.feels_like

  const tempToCelsius = temperature ? `${kelvinToCelsius(temperature)}°C` : '0°C'
  const tempToCelsiusFeels = feelsLike ? `${kelvinToCelsius(feelsLike)}°C` : ''

  const windToKm = windSpeed ? `${meterToHour(windSpeed)} km/h`: ''

  const visibilityToKm =visibility ? `${convertToKm(visibility)} km` : ''

  return (
    <section className="weatherContainer">
      <div className="weatherContainer__inner">
        <div className="parametersBox">
          <article className="weatherParameters mainBox">
            <div>
              <h2>{tempToCelsius}</h2>
              {props?.weatherInfo?.main?.feels_like && (
                <>
                  <span>Feels like </span>
                  <span>{tempToCelsiusFeels}</span>
                </>
              )}
            </div>
          </article>
          <Column icon={icon} info={description} text="Description" />
          <Column info={windToKm} text="Wind" />
          <Column info={humidity} text="Humidity" />
          <Column info={visibilityToKm} text="Visibility" />
        </div>
      </div>
    </section>
  );
}

export default WeatherContainer;
