export type ContractStatusType = 'OPEN' | 'CLOSED' | 'CANCELED';

export class Contract {
  id?: number;
  number: string;
  clientId: number;
  title: string;
  startDate: Date;
  finishDate: Date;
  amount: number;
  balance: number;
  status: ContractStatusType;
}
