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
        Framework Finder Tool Documentation
        </Typography>
        <Typography variant="h4">
          Introduction
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        Welcome to our Framework Finder tool documentation. This tool is developed to assist you in identifying the frameworks utilized in web applications. By analyzing HTTP headers, cookies, HTML structure, and other indicators, the tool can detect common web frameworks and technologies employed in the target application.
        </Typography>
        <Typography variant="h4">
          How to Use
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          1.Input Target: Enter the URL or IP address of the target system you wish to scan.<br />
          2.Start Scan: Click the &quot;Start Scan&quot; button to initiate the port scan process.<br />
          3.Review Results: Once the analysis is complete, the tool will display a list of detected frameworks and technologies used in the target application.<br />
          4.Further Inspection:  Each detected framework or technology may have associated details and recommendations for further investigation or mitigation.
        </Typography>
        <Typography variant="h4">
          Understanding Results
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        The Framework Finder tool detects the following frameworks and technologies:<br />
        <span style={{ textDecoration: 'underline' }}>Bootstrap:</span>
        Bootstrap: Indicates the presence of the Bootstrap framework in the target application.<br />
        <span style={{ textDecoration: 'underline' }}>Cookies:</span>
         Provides insights into the usage of cookies and their attributes.<br />
        <span style={{ textDecoration: 'underline' }}>Email: </span>
        Detects email-related technologies or services utilized within the application.<br />
        <span style={{ textDecoration: 'underline' }}>HTML Version:</span>
         Identifies the version of HTML used in the web pages.<br />
        <span style={{ textDecoration: 'underline' }}>HTTPOnly:</span>
         Indicates whether the HTTPOnly attribute is set for cookies, enhancing security.<br />
        <span style={{ textDecoration: 'underline' }}>jQuery:</span> 
         Detects the usage of jQuery library in the web application.<br />
        <span style={{ textDecoration: 'underline' }}>Java: </span>
        Identifies the presence of Java-related technologies.<br />
        <span style={{ textDecoration: 'underline' }}>Script:</span>
         Detects scripting languages such as JavaScript.<br />
        <span style={{ textDecoration: 'underline' }}>X-UA-Compatible:</span>
         Provides information about the X-UA-Compatible meta tag.<br />
        <span style={{ textDecoration: 'underline' }}>HTTP Headers:</span>
         Analyzes various HTTP headers for additional insights into the technology stack.<br />
        </Typography>
        <Typography variant="h4">
        Best Practices
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        <span style={{ textDecoration: 'underline' }}>Thorough Testing:</span>
        Perform periodic scans to keep track of changes in the application's technology stack..<br />
        <span style={{ textDecoration: 'underline' }}>Review Framework Usage:</span>
         Assess the impact and security implications of detected frameworks.
        <span style={{ textDecoration: 'underline' }}>Security Configuration:</span>
         Ensure proper configuration of cookies, including the use of secure and HTTPOnly attributes.
        <span style={{ textDecoration: 'underline' }}> Update Technologies:</span>
        Keep frameworks and technologies up-to-date to mitigate known vulnerabilities.
        <span style={{ textDecoration: 'underline' }}>Training and Awareness:</span>
         Keep abreast of new web development trends and security best practices to improve analysis accuracy.
        </Typography>
      </Paper>
    </FullWidthRectangle>
  );
}


function FrameworkPage() {
  return (
    <div>
      <h1 style={{ color: '#0C8599', textAlign: 'center', fontWeight: 'bold' }}>Welcome to our Framework Finder service!</h1>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em', marginBottom: '2em' }}>Our Framework Finder tool helps you identify the frameworks and technologies used in web applications, providing crucial insights for assessing security vulnerabilities. </p>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em' }}>Start your Scan </p>
      <UnstyledInputIntroduction />
      <ToolDocumentation />
      {/* Add more content here */}
    </div>
  );
}

export default FrameworkPage;
