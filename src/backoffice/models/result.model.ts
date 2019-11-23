export class Result {
  constructor(
    public message: string,
    public succcess: boolean,
    public data: any,
    public error: any,
  ) {}
}
