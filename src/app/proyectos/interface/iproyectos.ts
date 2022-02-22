export interface IProyectos {
  ID: number;
  NomProyecto: string;
  DestinatarioID: number;
  ODSID: number;
  FechaInicio: Date;
}

export class Proyectos implements IProyectos {
  constructor(
    ID: number,
    NomProyecto: string,
    DestinatarioID: number,
    ODSID: number,
    FechaInicio: Date
  ) {
      this.ID = ID;
      this.NomProyecto = NomProyecto;
      this.DestinatarioID = DestinatarioID;
      this.ODSID = ODSID;
      this.FechaInicio = FechaInicio;

  }
  ID: number;
  NomProyecto: string;
  DestinatarioID: number;
  ODSID: number;
  FechaInicio: Date;
}
