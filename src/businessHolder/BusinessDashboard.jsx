import React from 'react';
import { useParams } from 'react-router-dom';

const BusinessDashboard = () => {
  const { id } = useParams(); // ✅ get vendor id from route

  return (
    <div>
      <h1>Welcome Vendor #{id}</h1>
    </div>
  );
};

export default BusinessDashboard;