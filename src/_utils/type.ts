export interface IApiSuccess<T> {
  data: T;
  message: string;
  statusCode: number;
}

export interface IApiError {
  message: string;
  statusCode: number;
}
