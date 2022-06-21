export class ResultVO<T> {
  code: number;
  result: string;
  message: string;
  data: T;

  constructor(message: string, data: T, result = 'success', code = 200) {
    this.message = message;
    this.data = data;
    this.result = result;
    this.code = code;
  }
}
