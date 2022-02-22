export interface Idestinatarios {
  ID: number;
  NomDestinatario: string;
  Direccion: string;
  PaisID: number;
}

export class Destinatarios implements Idestinatarios {
  constructor(
    ID: number,
    NomDestinatario: string,
    Direccion: string,
    PaisID: number
  ) {
      this.ID = ID;
      this.NomDestinatario = NomDestinatario;
      this.Direccion = Direccion;
      this.PaisID = PaisID;
  }
  ID: number;
  NomDestinatario: string;
  Direccion: string;
  PaisID: number;
}
