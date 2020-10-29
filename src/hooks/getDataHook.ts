import { useState, useEffect, useRef } from "react";
import { ApiHelper } from "../helpers/ApiHelper";
import { genQuery } from "../helpers/helpers";
import { Config } from "../constants";
import { IMethods, IProps } from "../models";

const ApiInstance = new ApiHelper();

const GetDataHook = (props: IProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>({});  // backend response type
  const [error, setError] = useState<any>();  // backend error type
  const timerRef = useRef<number>();

  const getData = async () => {
    const query = genQuery(props.timeRange, props.componentName, Math.random());
    const response = await ApiInstance.FetchData(Config.METRIC_ENDPOINT, IMethods.POST, { query });

    setLoading(false);
    if (response.isError) {
      setError(response);
    } else {
      setData(response);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
    timerRef.current = window.setInterval(getData, props.refreshSecs);

    return () => {
      clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [loading, data, error];
};

export default GetDataHook;
