import { Col } from 'antd';
import { ConfiguracionMaquina } from '../../components';

const Configuracion = () => {
  const datos = {
    id: 1,
    name: 'Gráfica 1',
    code: 32,
    active: true,
    type: 'Type1',
    description: 'Esto es una descripción 1',
  };

  return (
    <div className="flex bg-gray-300 px-14 py-6 w-full h-full">
      <Col span={16}>
        <ConfiguracionMaquina datos={datos} />
        <ConfiguracionMaquina datos={datos} />
        <ConfiguracionMaquina datos={datos} />
        <ConfiguracionMaquina datos={datos} />
        <ConfiguracionMaquina datos={datos} />
        <ConfiguracionMaquina datos={datos} />
      </Col>
    </div>
  );
};

export default Configuracion;
