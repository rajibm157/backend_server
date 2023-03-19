export interface ISignup {
  name: string;
  email: string;
  password: string;
}

export interface ICCity {
  name: string;
  description?: string;
}

interface IError {
  statusCode?: number;
  message?: string;
}

export interface IResponse {
  result?: object;
  errors?: IError | any;
  status?: number;
  message?: string;
}
