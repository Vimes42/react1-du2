import './Climate.css';
import React, {useState} from 'react';
import temperatureImg from './images/temp.svg';

const Climate = ({ temperature, humidity }) => {
	
	const [temperatureState, setTemperatureState] = useState(temperature);
	const [humidityState, setHumidityState] = useState(humidity);

	return (<div className="climate">
		<div className="climate__icon">
			<img src={temperatureImg} />
		</div>
		<div className="climate__content">
			<div className="climate__temperature">{temperatureState}&deg;C</div>
			<div className="climate__humidity">Vlhkost vzduchu {humidityState}&nbsp;%</div>
		</div>
		<div className="climate__controls">
			<button className="button" onClick={_ => {setTemperatureState( temperatureState + 1)}}>+</button>
			<button className="button" onClick={_ => {setTemperatureState( temperatureState - 1)}}>-</button>
		</div>
	</div>);}

export default Climate;
