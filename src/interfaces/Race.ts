import { Participant } from "./Participant";
import { Meta } from "./Meta";
import { PEvent } from "./PEvent";

export interface Race {
  id: string;
  position: number;
  totalCode: number;
  totalPoints: number;
  metas: Meta[];
  pEvents: PEvent[];
  participant: Participant;
}
