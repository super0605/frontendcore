export class Config {
  public static METRIC_ENDPOINT = '/metrics';
  public static API_ENDPOINT =
    process.env.NODE_ENV === 'production'
      ? 'https://prod.dummy-svr.com"'
      : 'https://dev.dummy-svr.com';
}
