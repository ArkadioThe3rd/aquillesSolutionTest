import React from 'react';
import { Row, Col } from 'antd';

interface ITabla {
  nombreColumnas: Array<string>;
  children: React.ReactNode;
}

const Tabla = ({ nombreColumnas, children }: ITabla) => (
  <Row className="w-full">
    <Row className="w-full px-2 py-4 bg-gray-100 rounded-t-md">
      {nombreColumnas.map((item, index) => {
        const llave = `nombresColumnas-${index}`;
        let separador = '|';
        let ancho = 4;
        if (item === 'Description') ancho = 6;
        if (index === nombreColumnas.length - 1) {
          separador = '';
          ancho = 2;
        }
        return (
          <Col span={ancho} className="flex justify-between" key={llave}>
            <span>{item}</span>
            <span className="text-gray-600 mr-3">{separador}</span>
          </Col>
        );
      })}
    </Row>
    {children}
  </Row>
);

export default Tabla;
