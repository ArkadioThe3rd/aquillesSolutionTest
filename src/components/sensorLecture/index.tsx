/* eslint-disable no-unused-vars */
import { Checkbox } from 'antd';

interface ISensorLecture {
  titulo: string;
  descripcion: string;
  active: boolean;
  img: string;
}

const SensorLecture = ({
  titulo,
  descripcion,
  active,
  img,
}: ISensorLecture) => (
  <div className="flex flex-col px-10 py-2.5">
    <h1 className="text-black text-3xl font-semibold mx-4">{titulo}</h1>
    <hr />
    <div className="flex flex-row mt-8">
      <div className="mr-4">
        <div className="bg-gray-400 text-lg px-4 py-1 rounded-full text-center font-semibold mb-1">
          {titulo}
        </div>
        <p className="text-center">{descripcion}</p>
      </div>
      <div>
        <img src={img} alt="grafica" className="h-28" />
      </div>
      <Checkbox />
    </div>
  </div>
);

export default SensorLecture;
