export interface Iods {
  ID: number;
  NomODS: string;
  Foto: string;
}

export class ODS implements Iods{
  constructor(ID: number, NomODS: string, Foto: string) {
      this.ID = ID;
      this.NomODS = NomODS;
      this.Foto = Foto;
  }

  ID: number;
  NomODS: string;
  Foto: string;
}
