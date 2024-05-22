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
            Wordpress Tool Documentation
          </Typography>
          <Typography variant="h4">
            Introduction
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          Welcome to our WordPress Scan Tool documentation. This tool is designed to aid in the security assessment of WordPress websites, a critical step in ensuring the robustness of WordPress installations against common vulnerabilities and threats. WordPress powers a significant portion of websites on the internet, making it a prime target for attackers. Understanding and mitigating WordPress-specific security risks is paramount for maintaining a secure web presence.          </Typography>
          <Typography variant="h4">
          How to Use
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          1.Input Target: Enter the URL of the WordPress website you wish to scan.<br />
          2.Start Scan: Click the "Start Scan" button to initiate the scanning process.<br />
          3.Review Results: Once the scan is complete, the tool will present a list of identified vulnerabilities, misconfigurations, and potential security issues.<br />
          4.Security Recommendations: Analyze the scan results to prioritize and address identified security issues, such as outdated plugins, weak passwords, or exposed sensitive information.
        </Typography>
        <Typography variant="h4">
          Understanding Results
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        <span style={{ textDecoration: 'underline' }}>Vulnerabilities:</span>
        Known vulnerabilities in WordPress core, themes, and plugins, along with associated severity levels.<br />
          <span style={{ textDecoration: 'underline' }}>Misconfigurations:</span>
          Common misconfigurations that could expose the website to security risks, such as directory listing enabled or insecure file permissions.<br />
          <span style={{ textDecoration: 'underline' }}>Security Recommendations:</span>
           We provide actionable recommendations to help you address any open ports and enhance the security of your system.
        </Typography>
        <Typography variant="h4">
        Tips for Using the WordPress Scan Tool
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        <span style={{ textDecoration: 'underline' }}>Regular Scans:</span>
        Schedule regular scans to detect new vulnerabilities and changes in your WordPress installation. Regular scans help maintain a secure and robust site.<br />
         <span style={{ textDecoration: 'underline' }}>Review Scan Results:</span>
         Thoroughly review the scan results and prioritize fixing high-risk vulnerabilities first. Look for issues such as outdated software, weak passwords, and exposed configuration files.<br />
         <span style={{ textDecoration: 'underline' }}>Backup Your Site:</span>
         Regularly back up your WordPress site, especially before running scans or making significant changes. This ensures you can restore your site quickly if something goes wrong.<br />
         <span style={{ textDecoration: 'underline' }}>Combine with Other Tools:</span>
         Use our other tools, such as DNS Lookup and Quality Web Checker, to gather comprehensive information about your site and its environment. This helps in forming a holistic view of your site's security posture.<br />
         <span style={{ textDecoration: 'underline' }}>Continuous Learning:</span>
         Stay updated on emerging security threats, techniques, and tools to enhance the effectiveness of your pentesting activities.<br />
         <span style={{ textDecoration: 'underline' }}>Respect Legal and Ethical Boundaries:</span>
         Ensure you have permission to scan the WordPress site. Unauthorized scanning can lead to legal consequences and potential disruptions.<br />
        </Typography>
      </Paper>
    </FullWidthRectangle>
  );
}

function ScanwordpressPage() {
  return (
    <div>
      <h1 style={{ color: '#0C8599', textAlign: 'center', fontWeight: 'bold' }}>Welcome to our  WordPress Scan service!</h1>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em', marginBottom: '2em' }}>Our tool specializes in scanning WordPress websites, offering comprehensive insights to help you identify vulnerabilities and bolster your website's security.</p>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em' }}>Start your Scan </p>
      <UnstyledInputIntroduction />
      {/* Add more content here */}
        <ToolDocumentation />
    </div>
  );
}

export default ScanwordpressPage;