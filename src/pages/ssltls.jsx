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
        SSL/TLS Checker Tool Documentation
        </Typography>
        <Typography variant="h4">
          Introduction
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        Welcome to our SSL/TLS Checker Tool documentation. This tool is designed to assist you in assessing the security configuration of SSL/TLS certificates used by your web servers. SSL/TLS certificates are crucial for securing communications between clients and servers, and ensuring their proper configuration is essential for maintaining a secure web environment.
        </Typography>
        <Typography variant="h4">
          How to Use
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          1.Input Target: Enter the URL or IP address of the target system you wish to scan.<br />
          2.Start Scan: Click the &quot;Start Scan&quot; button to initiate the scan process.<br />
          3.Review Results: Once the check is complete, the tool will display a report detailing the SSL/TLS certificate's configuration, including key information such as certificate validity, encryption strength, certificate authority, and potential security vulnerabilities.<br />
          4.Security Recommendations: Based on the check results, the tool may provide recommendations for improving the security configuration of the SSL/TLS certificate, such as renewing expired certificates, updating weak cryptographic algorithms, or resolving certificate chain issues.
        </Typography>
        <Typography variant="h4">
          Understanding Results
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        The SSL/TLS Checker Tool provides insights into various aspects of the SSL/TLS certificate's configuration, including:<br />
        <span style={{ textDecoration: 'underline' }}>Certificate Validity: </span>
         Check the validity period of the SSL/TLS certificate to ensure it has not expired or been revoked.<br />
        <span style={{ textDecoration: 'underline' }}>Encryption Strength: </span>
         Assess the strength of the encryption algorithms used by the SSL/TLS certificate, including the key size and cipher suite.<br />
        <span style={{ textDecoration: 'underline' }}>Certificate Authority:  </span>
        Verify the authenticity of the SSL/TLS certificate issuer (Certificate Authority) and ensure it is trusted by commonly used web browsers.<br />
        <span style={{ textDecoration: 'underline' }}>Certificate Chain:  </span>
        Validate the certificate chain to ensure it is properly configured and includes all necessary intermediate certificates.<br />
        <span style={{ textDecoration: 'underline' }}>Security Vulnerabilities: </span>
         Identify potential security vulnerabilities or misconfigurations in the SSL/TLS certificate, such as the use of weak cryptographic algorithms or SSL/TLS protocol versions susceptible to known attacks.<br />
        </Typography>
        <Typography variant="h4">
        Best Practices
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        <span style={{ textDecoration: 'underline' }}>Thorough Testing:</span>
        Perform regular SSL/TLS certificate checks to monitor certificate validity, encryption strength, and overall security configuration, and address any issues promptly.<br />
         <span style={{ textDecoration: 'underline' }}>Renew Expired Certificates: </span> 
         Renew SSL/TLS certificates that have expired to ensure uninterrupted secure communications.<br />
         <span style={{ textDecoration: 'underline' }}>Integration with Other Tools:</span> 
         Integrate SSL/TLS certificate check results with broader security monitoring and management processes to facilitate proactive risk management and compliance with security standards and regulations.<br />
         <span style={{ textDecoration: 'underline' }}>Reporting and Documentation:</span>
         Maintain detailed records of SSL/TLS certificate check results, including observed configurations, recommendations, and any remediation steps taken to address identified issues.<br />
         <span style={{ textDecoration: 'underline' }}>Continuous Learning:</span> 
         Stay updated on emerging SSL/TLS security threats, vulnerabilities, and best practices through ongoing education, training, and participation in relevant security communities and forums.
        </Typography>
      </Paper>
    </FullWidthRectangle>
  );
}


function SslcheckerPage() {
  return (
    <div>
      <h1 style={{ color: '#0C8599', textAlign: 'center', fontWeight: 'bold' }}>Welcome to our SSL/TLS checker  service!</h1>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em', marginBottom: '2em' }}>Our tool helps you enhance website security by swiftly checking SSL/TLS configurations, ensuring robust encryption for your online presence.</p>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em' }}>Start your Scan </p>
      <UnstyledInputIntroduction />
      <ToolDocumentation />
      {/* Add more content here */}
    </div>
  );
}

export default SslcheckerPage;
