/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import {
  GetConfiguration,
  DeleteData,
  ModificarData,
  CreateData,
} from '../../services';
import { ConfiguracionMaquina, Formulario, Tabla } from '../../components';
import { IConfiguracionMaquina } from '../../components/configuracionMaquina';
import {
  IConfiguracionDataBase,
  IServicioDataBase,
} from '../../services/interface';

const Configuracion = () => {
  const [configs, setConfigs] = useState<any>([]);

  const CrearConfiguration = async ({
    name,
    code,
    active,
    type,
    description,
  }: IConfiguracionDataBase) => {
    await CreateData({ name, code, active, type, description }).then(
      (response) => {
        const miRespuesta = response;
        if (miRespuesta.data !== null) setConfigs(miRespuesta.data);
      },
    );
  };

  const obtenerConfiguracion = async () => {
    await GetConfiguration().then((response) => {
      const miRespuesta = response;
      if (miRespuesta.data !== null) setConfigs(miRespuesta.data);
    });
  };

  const editarConfiguracion = async ({
    name,
    active,
    code,
    description,
    type,
    id,
  }: IServicioDataBase) => {
    await ModificarData({
      name,
      active,
      code,
      description,
      type,
      id,
    }).then((response) => {
      const miRespuesta = response;
      if (miRespuesta.data !== null) setConfigs(miRespuesta.data);
    });
  };

  const eliminarConfiguracion = async (id: number) => {
    await DeleteData(id).then((response) => {
      const miRespuesta = response;
      if (miRespuesta.data !== null) setConfigs(miRespuesta.data);
    });
  };

  useEffect(() => {
    obtenerConfiguracion();
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
              return (
                <ConfiguracionMaquina
                  {...iconfig}
                  eliminar={eliminarConfiguracion}
                  editar={editarConfiguracion}
                  key={llave}
                />
              );
            })}
          </Tabla>
        </Col>
        <Col span={8}>
          <Formulario crearData={CrearConfiguration} />
        </Col>
      </Row>
    </div>
  );
};

export default Configuracion;
