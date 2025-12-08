import React from 'react';
import { useLocation } from 'react-router-dom';
import TestEditor from '../components/testCreator/TestEditor';

const TestCreator = () => {
  return (
    <div className="bg-amber-100 grid grid-cols-6">
      <TestEditor />
    </div>
  );
};

export default TestCreator;
