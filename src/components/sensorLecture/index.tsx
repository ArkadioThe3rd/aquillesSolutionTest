/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { CloseCircleFilled, CheckCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { LineChart, XAxis, YAxis, Line } from 'recharts';

export interface ISensorLecture {
  name: string;
  description: string;
  active: boolean;
  data: Array<Object>;
}

const SensorLecture = ({ name, description, active, data }: ISensorLecture) => {
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
  return (
    <div className="flex flex-col px-10 py-2.5">
      <h1 className="text-black text-3xl font-semibold mx-4">{name}</h1>
      <hr />
      <div className="flex flex-row mt-8">
        <div className="mr-4">
          <div className="bg-gray-400 text-lg px-4 py-1 rounded-full text-center font-semibold mb-1">
            {name}
          </div>
          <p className="text-center">{description}</p>
        </div>
        <div className="flex">
          <LineChart width={650} height={100} data={data} className="h-full">
            <Line
              type="monotone"
              dataKey="value"
              strokeWidth={1}
              stroke="#1A4EE2"
            />
            <YAxis />
            <XAxis />
          </LineChart>
        </div>
        {active ? (
          <button type="button" aria-label="Show modal" onClick={showModal}>
            <CheckCircleFilled style={{ fontSize: '25px' }} />
          </button>
        ) : (
          <button type="button" aria-label="Show modal" onClick={showModal}>
            <CloseCircleFilled style={{ fontSize: '25px' }} />
          </button>
        )}
        <Modal
          title={name}
          open={isOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <hr />
          <p>
            Name:<span className="text-green-700"> {name}</span>
          </p>
          <p>
            Description: <span className="text-green-700"> {description}</span>
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
