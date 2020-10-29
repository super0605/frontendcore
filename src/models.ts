export interface IResponseHandlerModel {
  code: number;
  isError: boolean;
  timestamp: number;
  error?: string;
  messages?: string[];
  data?: any;
}

export enum IMethods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

export interface IProps {
  timeRange: string;
  componentName: string;
  refreshSecs: number;
}
