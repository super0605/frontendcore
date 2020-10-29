import React from 'react';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <>
      <TestComponent refreshSecs={60000} componentName="c1" timeRange="timeRang1" />
      <TestComponent refreshSecs={10000} componentName="c2" timeRange="timeRang2" />
      <TestComponent refreshSecs={15000} componentName="c3" timeRange="timeRang3" />
      <TestComponent refreshSecs={42000} componentName="c4" timeRange="timeRang4" />
      <TestComponent refreshSecs={30000} componentName="c5" timeRange="timeRang5" />
    </>
  );
}

export default App;
