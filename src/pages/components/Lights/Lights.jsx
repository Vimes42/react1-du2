import './Lights.css';

const Lights = ({lights}) => (
			<div className="lights">
				<div className="light">
					<div className="light__icon">
						<img src="./images/light-off.svg" />
					</div>
					<div className="light__name">
						Obývací pokoj
					</div>
				</div>

				<div className="light">
					<div className="light__icon">
						<img src="./images/light-on.svg" />
					</div>
					<div className="light__name">
						Ložnice
					</div>
				</div>

				<div className="light">
					<div className="light__icon">
						<img src="./images/light-on.svg" />
					</div>
					<div className="light__name">
						Kuchyň
					</div>
				</div>

				<div className="light">
					<div className="light__icon">
						<img src="./images/light-off.svg" />
					</div>
					<div className="light__name">
						Chodba
					</div>
				</div>

			</div>
);

export default Lights;
