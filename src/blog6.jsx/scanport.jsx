import * as React from 'react';

import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Input as BaseInput } from '@mui/base/Input';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const InputElement = styled('input')(
  ({ theme }) => `
  width: 480px; // increased width
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.2rem; // increased font size
  font-weight: 400;
  line-height: 1.5;
  padding: 12px 16px; // increased padding
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

const InfoIcon = () => (
  <img src="https://static-00.iconduck.com/assets.00/info-icon-2048x2048-tcgtx810.png" alt="info" width="20" height="20" />
);

const InputWithPopover = React.forwardRef((props, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState('');

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <BaseInput slots={{ input: InputElement }} value={value} onChange={(event) => setValue(event.target.value)} {...props} ref={ref} />
      <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        <InfoIcon />
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>To initiate your scan, please enter the URL of the target website or server in the provided field below.</Typography>
      </Popover>
    </div>
  );
});

const Rectangle = styled('div')`
  background-color: #E3FAFC ;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StartScanButton = styled(Button)`
  background-color: #0C8599;
  color: white;
  &:hover {
    background-color: #005f73;
  }
`;

function UnstyledInputIntroduction() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ marginRight: '1em', fontSize: '1.2em', color: '#1F1F1F' }}>Target:</span>
        <InputWithPopover aria-label="Demo input" placeholder="Target URL......" />
      </div>
      <Rectangle>
        <Typography variant="body1">
          By starting this scan, you confirm authorization to scan the target and accept our terms of service.
        </Typography>
        <StartScanButton variant="contained" style={{ marginTop: '10px' }}>
          Start Scan
        </StartScanButton>
      </Rectangle>
    </div>
  );
}

const FullWidthRectangle = styled('div')`
  background-color: #EFF8FF;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function ToolDocumentation() {
  return (
    <FullWidthRectangle>
      <Paper sx={{ p: 3, width: '80%', maxWidth: 800, mb: 3 }}>
        <Typography variant="h3" gutterBottom>
          Port Scan Tool Documentation
        </Typography>
        <Typography variant="h4">
          Introduction
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          Welcome to our Port Scan Tool documentation. This tool is designed to help you identify open ports on a target system, along with the corresponding services and versions running on those ports. Additionally, we provide recommendations on how to secure your system by addressing any open ports found during the scan.
        </Typography>
        <Typography variant="h4">
          How to Use
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          1.Input Target: Enter the URL or IP address of the target system you wish to scan.<br />
          2.Start Scan: Click the &quot;Start Scan&quot; button to initiate the port scan process.<br />
          3.Review Results: Once the scan is complete, the tool will display a list of open ports along with the services and versions detected.<br />
          4.Security Recommendations: For each open port detected, the tool provides recommendations on how to secure the system and enhance its security posture.
        </Typography>
        <Typography variant="h4">
          Understanding Results
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        <span style={{ textDecoration: 'underline' }}>Open Ports:</span>
          These are ports on the target system that are accessible from the network.<br />
          <span style={{ textDecoration: 'underline' }}>Services and Versions:</span>
           The tool identifies the services running on the open ports and their corresponding versions. This information can help you understand the potential vulnerabilities associated with each service.<br />
          <span style={{ textDecoration: 'underline' }}>Security Recommendations:</span>
           We provide actionable recommendations to help you address any open ports and enhance the security of your system.
        </Typography>
        <Typography variant="h4">
         Tips for Using the Port Scanner Tool
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        <span style={{ textDecoration: 'underline' }}>Understand Your Network:</span>
        Before running a port scan, map out the network and identify critical assets and sensitive data locations. Knowing your network helps in prioritizing scanning efforts.<br />
         <span style={{ textDecoration: 'underline' }}>Perform Regular Scans:</span> 
         Schedule regular port scans to keep track of any changes in your network infrastructure and to detect new or rogue services.<br />
         <span style={{ textDecoration: 'underline' }}>Scan from Multiple Perspectives:</span> 
         Conduct scans from both internal and external perspectives to identify different potential vulnerabilities. Internal scans can reveal misconfigurations, while external scans help assess exposure to outside threats.<br />
         <span style={{ textDecoration: 'underline' }}>Analyze and Interpret Results:</span>
         Don't just identify open ports; understand the implications. Determine which services are running, their versions, and any known vulnerabilities associated with them.<br />
         <span style={{ textDecoration: 'underline' }}>Follow Up on Open Ports:</span> 
         Investigate unexpected open ports, understand why they are open, and decide if they should be closed or secured. Pay special attention to high-risk ports (e.g., 22, 80, 443, 3389).<br />
         <span style={{ textDecoration: 'underline' }}>Respect Legal and Ethical Boundaries:</span> 
         Ensure you have permission to scan the network. Unauthorized scanning can lead to legal consequences and network disruptions.
        </Typography>
      </Paper>
    </FullWidthRectangle>
  );
}


function ScanPortPage() {
  return (
    <div>
      <h1 style={{ color: '#0C8599', textAlign: 'center', fontWeight: 'bold' }}>Welcome to our port scan service!</h1>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em', marginBottom: '2em' }}>Our tool helps you identify open ports on your network, which is crucial for assessing security vulnerabilities.</p>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em' }}>Start your Scan </p>
      <UnstyledInputIntroduction />
      <ToolDocumentation />
      {/* Add more content here */}
    </div>
  );
}

export default ScanPortPage;
