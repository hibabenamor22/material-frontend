import * as React from 'react';

import { styled } from '@mui/system';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

function ToolDocumentation() {
    return (
      <FullWidthRectangle>
        <Paper sx={{ p: 3, width: '80%', maxWidth: 800, mb: 3 }}>
          <Typography variant="h3" gutterBottom>
            Firewall Detection Tool Documentation
          </Typography>
          <Typography variant="h4">
            Introduction
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          Welcome to our Firewall Detection Tool documentation.
          This tool is designed to help you identify potential firewall configurations on a target system.
          Additionally, we provide recommendations on how to secure your system by addressing any vulnerabilities found during the detection process.
          </Typography>
        <Typography variant="h4">
          How to Use
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        1.Input Target: Enter the URL or IP address of the target system you wish to analyze.<br />
        2.Start Detection: Click the "Start Detection" button to initiate the firewall detection process.<br />
        3.Review Results: Once the detection is complete, the tool will display potential firewall configurations detected on the target system.<br />
        4.Security Recommendations: For each potential vulnerability detected, the tool provides recommendations on how to secure the system and enhance its security posture.
        </Typography>
        <Typography variant="h4">
          Understanding Results
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        <span style={{ textDecoration: 'underline' }}>Firewall Name:</span>
        This is the specific name of the firewall system as identified by our firewall detection tool.<br />
          <span style={{ textDecoration: 'underline' }}>Firewall Type:</span>
          The firewall detection tool categorizes the firewall based on its characteristics and functionality.<br />
          <span style={{ textDecoration: 'underline' }}>Firewall Function:</span>
            This section provides details on the specific functions and capabilities of the detected firewall.<br />
          <span style={{ textDecoration: 'underline' }}>Security Recommendations:</span>
          We provide actionable recommendations to help you address any detected firewall configurations and enhance the security of your system.
        </Typography>
        <Typography variant="h4">
        Best Practices
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        <span style={{ textDecoration: 'underline' }}>Thorough Testing:</span>
        Test the effectiveness of firewall configurations using penetration testing and vulnerability scanning techniques.<br />
         <span style={{ textDecoration: 'underline' }}>Firewall Configuration Review: </span>
         Evaluate the firewall configuration to ensure it aligns with best practices and security requirements.<br />
         <span style={{ textDecoration: 'underline' }}>Integration with Other Tools:</span>
         Integrate firewall detection results with broader network security assessments to provide a holistic view of the network security posture.<br />
         <span style={{ textDecoration: 'underline' }}>Reporting and Documentation:</span>
         Maintain detailed records of firewall detection results, including configuration details and recommended actions.<br />
         <span style={{ textDecoration: 'underline' }}>Continuous Learning:</span>
         Stay updated on emerging firewall technologies and security best practices to continuously improve network security defenses.
        </Typography>
      </Paper>
    </FullWidthRectangle>
  );
}



function FirewallDetectionPage() {
  return (
    <div>
      <h1 style={{ color: '#0C8599', textAlign: 'center', fontWeight: 'bold' }}>Welcome to our firewall detection service!</h1>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em', marginBottom: '2em' }}>Our tool helps you identify potential firewall configurations on your network, which is crucial for assessing security vulnerabilities.</p>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em' }}>Start your Scan </p>
      <UnstyledInputIntroduction />
      <ToolDocumentation />
      {/* Add more content here */}
    </div>
  );
}

export default FirewallDetectionPage;