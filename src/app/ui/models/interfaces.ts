export interface ContractsSearchParams {
  clientId: number;
  contractStatus: string;
}

export type NotificationType = 'success' | 'warning' | 'error';

export interface Notification {
  type: NotificationType;
  text: string;
}
