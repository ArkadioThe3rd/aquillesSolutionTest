/* eslint-disable no-unused-vars */
import { SensorLecture, Card } from '../../components';
import Chart from '../../assets/chart.jpg';

const Home = () => (
  <div className="flex bg-gray-300 px-14 py-6 w-full">
    <div className="flex flex-row justify-between w-full">
      <Card borderW="border-4" borderColor="border-gray-400">
        <SensorLecture
          titulo="Grafica 1"
          descripcion="Esto es una descripcion"
          active
          img={Chart}
        />
      </Card>
      <Card borderW="border-4" borderColor="border-gray-400">
        <SensorLecture
          titulo="Grafica 1"
          descripcion="Esto es una descripcion"
          active
          img={Chart}
        />
      </Card>
    </div>
  </div>
);

export default Home;
