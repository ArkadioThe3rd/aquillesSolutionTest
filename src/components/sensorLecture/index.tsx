/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { CloseCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import Chart from '../../assets/chart.jpg';

export interface ISensorLecture {
  name: string;
  description: string;
  active: boolean;
  data: Array<Object>;
}

const SensorLecture = (datos: ISensorLecture) => {
  const [data, setData] = useState(datos);

  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
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
          <button type="button" aria-label="Show modal" onClick={showModal}>
            <CheckCircleFilled style={{ fontSize: '25px' }} />
          </button>
        ) : (
          <button type="button" aria-label="Show modal" onClick={showModal}>
            <CloseCircleFilled style={{ fontSize: '25px' }} />
          </button>
        )}
        <Modal
          title={data?.name}
          open={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <hr />
          <p>
            Name:<span className="text-green-700"> {data?.name}</span>
          </p>
          <p>
            Description:{' '}
            <span className="text-green-700"> {data?.description}</span>
          </p>
          <p>
            Completed:<span className="text-green-700"> Yes</span>
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default SensorLecture;
