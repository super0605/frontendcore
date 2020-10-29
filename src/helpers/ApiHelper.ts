import { Config } from "../constants";
import { IMethods } from "../models";
import { SuccessHandlerHelper, ErrorHandlerHelper } from "./helpers";

export class ApiHelper {
  protected baseURL: string;

  constructor() {
    this.baseURL = Config.API_ENDPOINT;
  }

  public async FetchData(endpoint: string, method: IMethods, body?: Object) {
    let options: RequestInit = { method: method };
    let url: string = this.baseURL + endpoint;
    options.headers = new Headers();
    options.headers.append("Content-Type", "application/json");

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response: Response = await fetch(url, options);
      const jsonResponse =
        response.status === 204
          ? null
          : await response.text().then((text) => (text && text.length ? JSON.parse(text) : null));

      if (response.ok === false || response.status < 200 || response.status > 204) {
        throw JSON.stringify({
          code: response.status,
          response,
          responseObject: jsonResponse,
        });
      }

      const data = new SuccessHandlerHelper(jsonResponse, response.status);
      return data.responseModel;
    } catch (err) {
      const errorHelper = new ErrorHandlerHelper(err);
      return errorHelper.error;
    }
  }
}
