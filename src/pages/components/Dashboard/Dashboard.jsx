import './Dashboard.css';
import Lights from '../Lights/Lights';
import Climate from '../Climate/Climate';
import Blinds from '../Blinds/Blinds';
import Energy from '../Energy/Energy';

const Dashboard = ({data}) => (
    <main className="dashboard">
        <Lights />
        <Climate />
        <Blinds />
        <Energy />
    </main>
)

export default Dashboard;
