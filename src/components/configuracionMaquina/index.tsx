/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Col, Row, Checkbox } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

interface IConfiguracionMaquina {
  datos: {
    id: number;
    name: string;
    code: number;
    active: boolean;
    type: string;
    description: string;
  };
}

const ConfiguracionMaquina = ({ datos }: IConfiguracionMaquina) => {
  const [configuracion, setConfiguracion] = useState({ datos });

  return (
    <div>
      <Row className="bg-white px-2 py-4 text-4xl">
        <Col span={4}>
          <span className="text-blue-700 text-base">
            {configuracion.datos.name}
          </span>
        </Col>
        <Col span={4}>
          <span className="bg-red-400 p-0.5 border-2 border-red-700 text-red-900 text-base">
            {configuracion.datos.code}
          </span>
        </Col>
        <Col span={4}>
          <span className="p-0.5 bg-green-400 border-2 border-green-700 text-green-900 text-base">
            {configuracion.datos.type}
          </span>
        </Col>
        <Col span={6}>
          <span className="text-base">{configuracion.datos.description}</span>
        </Col>
        <Col span={4} className="flex justify-center">
          <Checkbox />
        </Col>
        <Col span={2} className="flex justify-center">
          <span>
            <EditFilled />
            <DeleteFilled />
          </span>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default ConfiguracionMaquina;
