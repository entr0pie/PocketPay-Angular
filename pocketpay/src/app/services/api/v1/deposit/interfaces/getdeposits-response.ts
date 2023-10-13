export interface Deposit {
  id: string;
  transaction: string;
  timestamp: string;
  value: number;
}

export interface GetDepositsResponse {
  deposits: Deposit[];
}
