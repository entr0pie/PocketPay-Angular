export interface WithdrawResponse {
  idWithdraw: string;
  idTransaction: string;
  timestamp: string;
  value: number;
}

export interface GetAllWithdrawsResponse {
  withdraws: WithdrawResponse[];
}
