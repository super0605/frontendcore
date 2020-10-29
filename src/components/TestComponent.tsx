import React from 'react';
import Loader from './Loader';
import { IProps } from '../models';
import getDataHook from '../hooks/getDataHook';

function TestComponent(props: IProps) {
  const [loading, data,] = getDataHook(props);
  if (loading) {
    return <Loader />;
  }
  return <>Hi {JSON.stringify(data)}</>;
}

export default TestComponent;
