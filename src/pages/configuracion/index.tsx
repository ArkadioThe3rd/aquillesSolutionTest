/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { GetConfiguration } from '../../services';
import { ConfiguracionMaquina, Formulario, Tabla } from '../../components';
import { IConfiguracionMaquina } from '../../components/configuracionMaquina';

const Configuracion = () => {
  const [configs, setConfigs] = useState<any>([]);
  const init = async () => {
    await GetConfiguration().then((response) => {
      const miRespuesta = response;
      if (miRespuesta.data !== null) setConfigs(miRespuesta.data);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex bg-gray-200 px-14 py-6 w-full h-full">
      <Row gutter={16} className="w-full h-full">
        <Col span={16}>
          <Tabla
            nombreColumnas={[
              'Name',
              'Code',
              'Type',
              'Description',
              'Active',
              'Actions',
            ]}
          >
            {configs?.map((iconfig: IConfiguracionMaquina, index: number) => {
              const llave = `configs-maquina-${index}`;
              return <ConfiguracionMaquina {...iconfig} key={llave} />;
            })}
          </Tabla>
        </Col>
        <Col span={8}>
          <Formulario />
        </Col>
      </Row>
    </div>
  );
};

export default Configuracion;
