import { IResponseHandlerModel } from "../models";

export function genQuery(timeRange: string, componentName: string, seed: number) {
  return `SELECT ${timeRange} WHERE c = ${componentName} AND x = ${
    seed % 7 === 0 ? "true" : "false"
  }`;
}

export class SuccessHandlerHelper {
  constructor(response: any, status: number) {
    this.responseModel.code = status;
    this.responseModel.data = status === 204 ? "" : response;
  }

  public responseModel: IResponseHandlerModel = {
    code: 0,
    isError: false,
    timestamp: Date.now(),
  };
}

export class ErrorHandlerHelper {
  private rawError: any;
  public error: IResponseHandlerModel = {
    code: 500,
    isError: true,
    timestamp: Date.now(),
    error: "Unknown error",
    messages: [],
    data: undefined,
  };
  constructor(err: Response) {
    this.rawError = err;
    this.setError();
  }

  private setError = () => {
    this.error.code = this.rawError.code ? this.rawError.code : this.error.code;
    this.error.timestamp = Date.now();
    this.error.messages = [];
    if (this.rawError.responseObject && typeof this.rawError.responseObject === "object") {
      for (const i in this.rawError.responseObject) {
        if (this.rawError.responseObject.hasOwnProperty(i)) {
          let element: any = this.rawError.responseObject[i];
          this.error.error = i;

          if (typeof element !== "string") {
            element = "Unknown error !";
          }
          this.error.messages.push(element);
        }
      }
    } else {
      this.error.error = "Unknown";
      this.error.messages = ["An unexpected error occured"];
    }
  };
}
