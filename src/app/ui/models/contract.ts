import { Entity } from './entity';

export type ContractStatusType = 'OPEN' | 'CLOSED' | 'CANCELED';

export class Contract extends Entity {
  number: string;
  clientId: number;
  title: string;
  startDate: Date;
  finishDate: Date;
  amount: number;
  balance: number;
  status: ContractStatusType;
}
