import { Race } from "./Race";

export interface Program {
  id: string;
  title: string;
  note: string;
  races: Race[];
}
