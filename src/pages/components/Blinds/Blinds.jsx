import './Blinds.css';
import {useState} from 'react';
import open from './images/blinds-open.svg';
import closed from './images/blinds-closed.svg';

const Blinds = ({ state }) => {
	const [blindsState, setBlindsState] = useState({state});
	
	return (
			<div className="blinds">
				<div className="blinds__icon">
					<img src={blindsState === "open" ? open : closed} />
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className={ blindsState === "open" ? "button button--active" : "button"} onClick={_ => setBlindsState('closed')}>Otevřeno</button> 
					<button className={ blindsState === "closed" ? "button button--active" : "button"} onClick={_ => setBlindsState('open')}>Zavřeno</button>
				</div>
			</div>
);}

export default Blinds;

