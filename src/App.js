import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box>
        <Stack direction='row' spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        
      </Box>
      
    </div>
  );
}

export default App;
