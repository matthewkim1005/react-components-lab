import './Weather.css';
import '../App.jsx';

const WeatherForecast = (props) => {
  const { day, img, imgAlt, condictions, time } = props;
  return (
    <div className="weather">
      <h2>{ day }</h2>
      <img src={ img } alt={ imgAlt } />
      <p><span>conditions: </span>{ condictions }</p>
      <p><span>time: </span>{ time }</p>
    </div>
  )
};

export default WeatherForecast;