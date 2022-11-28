/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { SensorLecture, Card } from '../../components';
import { GetData } from '../../services';
import { ISensorLecture } from '../../components/sensorLecture';

/**
 * La logica del programa inicia haciendo un llamado al back para traer un arreglo con
 * toda los datos ya que esto define cuantos componentes debe pintar el programa.
 * Una vez hecho esto se guardan en un state, y se recorre un map con el array para pasar
 * la información a cada componente correspondiente.
 */
const Home = () => {
  const [data, setData] = useState<any>();
  const init = async () => {
    await GetData().then((response) => {
      const miRespuesta = response;
      if (miRespuesta.data !== null) setData(miRespuesta.data);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex bg-gray-300 w-full h-full">
      <div className="flex px-14 py-6 w-full">
        <div className="grid grid-cols-2 grid-flow-row auto-rows-min gap-2 w-full">
          {data?.map((item: ISensorLecture, index: number) => {
            const llave = `grafica${index}`;
            return (
              <Card key={llave}>
                <SensorLecture {...item} />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
