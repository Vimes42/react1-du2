import lightoff from './images/light-off.svg';
import lighton from './images/light-on.svg';
import React, {useState} from 'react';
import './Light.css';

const Light = ({name, state}) => {
    const [stateLights, setStateLights] = useState({state});
    
    return (<div className="light" onClick={_ => setStateLights( !stateLights )}>
                <div className="light__icon">
                    <img src={stateLights ? lighton : lightoff} />
                </div>
                <div className="light__name">
                    {name}
                </div>
            </div>
    )
};

export default Light;
