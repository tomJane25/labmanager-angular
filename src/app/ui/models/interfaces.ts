export interface ContractsSearchParams {
  clientId: number;
  contractStatus: string;
}

export type NotificationType = 'success' | 'warning' | 'error';

export interface Notification {
  type: NotificationType;
  text: string;
}

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface AuthResponse {
  email: string;
  idToken: string;
  expiresIn: string;
}
