import React from 'react';

interface ICard {
  children: React.ReactNode;
  borderW?: string;
  borderColor?: string;
}

// const editarConfiguracion = async ({
//   name,
//   active,
//   code,
//   description,
//   type,
//   id,
// }: IServicioDataBase) => {
//   await ModificarData({
//     name,
//     active,
//     code,
//     description,
//     type,
//     id,
//   }).then((response) => {
//     const miRespuesta = response;
//     if (miRespuesta.data !== null) setConfigs(miRespuesta.data);
//   });
// };

const Card = ({ children, borderW, borderColor }: ICard) => (
  <div className={`flex flex-col relative bg-white ${borderW} ${borderColor}`}>
    {children}
  </div>
);

Card.defaultProps = {
  borderW: '',
  borderColor: '',
};

export default Card;
