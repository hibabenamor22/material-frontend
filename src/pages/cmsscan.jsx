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
        CMS Scan Tool Documentation
        </Typography>
        <Typography variant="h4">
          Introduction
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        Welcome to our CMS Scan Tool documentation. This tool is designed to assist you in identifying vulnerabilities and security weaknesses within Content Management Systems (CMS) deployed on your web servers. CMS platforms, such as WordPress, Joomla, and Drupal, are common targets for attackers due to their widespread use and potential security vulnerabilities. This tool helps you proactively assess and mitigate risks associated with CMS installations.
        </Typography>
        <Typography variant="h4">
          How to Use
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          1.Input Target: Enter the URL or IP address of the target system you wish to scan.<br />
          2.Start Scan: Click the &quot;Start Scan&quot; button to initiate the port scan process.<br />
          3.Review Results: Once the scan is complete, carefully review the report to identify vulnerabilities, misconfigurations, and security issues within the target CMS.<br />
          4.Security Recommendations: Based on the scan results, implement the provided security recommendations to mitigate identified vulnerabilities and enhance the overall security posture of the CMS.
        </Typography>
        <Typography variant="h4">
          Understanding Results
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        The CMS Scan Tool provides insights into various aspects of the target CMS, including:<br />
        <span style={{ textDecoration: 'underline' }}>Vulnerabilities: </span>
        Identified security vulnerabilities within the CMS core, plugins, themes, or extensions.<br />
        <span style={{ textDecoration: 'underline' }}>Misconfigurations:</span>
         Configuration weaknesses or insecure settings that may expose the CMS to potential attacks.<br />
        <span style={{ textDecoration: 'underline' }}>Outdated Software:</span>
         Detection of outdated CMS versions, plugins, themes, or extensions that may contain known security vulnerabilities.<br />
        <span style={{ textDecoration: 'underline' }}> Security Headers:</span>
         Analysis of HTTP security headers used by the CMS to protect against common web-based attacks.<br />
        <span style={{ textDecoration: 'underline' }}>User Enumeration:</span>
         Detection of user enumeration vulnerabilities that may allow attackers to discover valid usernames or user IDs.<br />
        <span style={{ textDecoration: 'underline' }}>File Integrity:</span>
         Verification of file integrity to detect unauthorized modifications or tampering of CMS files.<br />
        </Typography>
        <Typography variant="h4">
        Best Practices
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        <span style={{ textDecoration: 'underline' }}>Thorough Testing:</span>
        Perform regular security audits and scans of the CMS to identify new vulnerabilities, misconfigurations, or security issues that may arise over time..<br />
         <span style={{ textDecoration: 'underline' }}>User Awareness:</span> 
         Educate CMS administrators and users about security best practices, such as avoiding common security pitfalls, practicing good password hygiene, and staying vigilant against phishing attacks.<br />
         <span style={{ textDecoration: 'underline' }}>Integration with Other Tools:</span> 
         Integrate CMS scan results with broader vulnerability management and security monitoring processes to facilitate proactive risk management and incident response.<br />
         <span style={{ textDecoration: 'underline' }}>Reporting and Documentation:</span>
         Maintain detailed documentation of CMS scan results, including vulnerabilities, recommendations, and remediation steps taken to address identified issues.<br />
         <span style={{ textDecoration: 'underline' }}>Continuous Learning:</span> 
         Stay updated on emerging threats, security trends, and best practices related to CMS security through ongoing education, training, and participation in relevant security communities and forums.
        </Typography>
      </Paper>
    </FullWidthRectangle>
  );
}


function CmsscanPage() {
  return (
    <div>
      <h1 style={{ color: '#0C8599', textAlign: 'center', fontWeight: 'bold' }}>Welcome to our CMS scan service!</h1>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em', marginBottom: '2em' }}>Our tool helps you bolster website security by swiftly identifying vulnerabilities within your content management system (CMS).</p>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em' }}>Start your Scan </p>
      <UnstyledInputIntroduction />
      <ToolDocumentation />
      {/* Add more content here */}
    </div>
  );
}

export default CmsscanPage;
