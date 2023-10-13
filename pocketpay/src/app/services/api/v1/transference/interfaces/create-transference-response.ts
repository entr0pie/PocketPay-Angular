export interface CreateTransferenceResponse {
  id: string,
  transaction: string,
  timestamp: string,
  sender: string,
  receiver: string,
  value: number
}
