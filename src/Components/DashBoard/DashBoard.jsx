import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../SideBar/Sidebar';
import Box from '@mui/material/Box';
import "./Dashboard.css";

const DashBoard = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <Box sx={{ p: 3, flexGrow: 1, backgroundColor: '#f5f5f5' }}>
          {children ? children : <h2>Welcome to Dashboard</h2>}
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoard;
