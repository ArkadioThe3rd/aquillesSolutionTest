export interface IConfiguracionDataBase {
  name: string;
  code: number;
  active: boolean;
  type: string;
  description: string;
}

export interface IServicioDataBase extends IConfiguracionDataBase {
  id: number;
}
