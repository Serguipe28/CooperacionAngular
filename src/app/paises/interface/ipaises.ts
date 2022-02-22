export interface IPaises {
  ID: number;
  NomPais: string;
  Bandera: string;
}

export class Paises implements IPaises{
  constructor(ID: number, NomPais: string, Bandera: string) {
      this.ID = ID;
      this.NomPais = NomPais;
      this.Bandera = Bandera
  }
  ID: number;
  NomPais: string;
  Bandera: string;
}
