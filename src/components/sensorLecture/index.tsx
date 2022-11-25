/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { CloseCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import Chart from '../../assets/chart.jpg';

export interface ISensorLecture {
  name: string;
  description: string;
  active: boolean;
  data: Array<Object>;
}

const SensorLecture = (datos: ISensorLecture) => {
  const [data, setData] = useState(datos);
  // const { active, description, name } = data;
  return (
    <div className="flex flex-col px-10 py-2.5">
      <h1 className="text-black text-3xl font-semibold mx-4">{data?.name}</h1>
      <hr />
      <div className="flex flex-row mt-8">
        <div className="mr-4">
          <div className="bg-gray-400 text-lg px-4 py-1 rounded-full text-center font-semibold mb-1">
            {data?.name}
          </div>
          <p className="text-center">{data?.description}</p>
        </div>
        <div>
          <img src={Chart} alt="grafica" className="h-28" />
        </div>
        {data?.active ? (
          <CheckCircleFilled style={{ fontSize: '25px' }} />
        ) : (
          <CloseCircleFilled style={{ fontSize: '25px' }} />
        )}
      </div>
    </div>
  );
};

export default SensorLecture;
