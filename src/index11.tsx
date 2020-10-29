import React from 'react';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <>
      <TestComponent refreshSecs={60} componentName="c1" timeRange="timeRang1" />
      <TestComponent refreshSecs={10} componentName="c2" timeRange="timeRang2" />
      <TestComponent refreshSecs={15} componentName="c3" timeRange="timeRang3" />
      <TestComponent refreshSecs={42} componentName="c4" timeRange="timeRang4" />
      <TestComponent refreshSecs={30} componentName="c5" timeRange="timeRang5" />
    </>
  );
}

export default App;
