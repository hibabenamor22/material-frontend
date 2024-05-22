import * as React from 'react';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Input as BaseInput } from '@mui/base/Input';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export function AlignItemsList() {
  return (
    <div>
    <List
        sx={{
          display: 'flex',
          width: '100%',
          bgcolor: 'background.paper',
        }}
      >
        {/* First Item */}
        <ListItem
          sx={{
            flex: '1 1 auto',
            alignItems: 'flex-start',
            flexDirection: 'row',  
            margin: '0 8px', 
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/assets/images/avatars/avatar_1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Firewall detection"
            secondary={"Identify potential firewall configurations on a target."}
          />
        </ListItem>
        <Divider orientation="vertical" flexItem />
  
        {/* Second Item */}
        <ListItem
          sx={{
            flex: '1 1 auto',
            alignItems: 'flex-start',
            flexDirection: 'row',  
            margin: '0 8px',
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/assets/images/avatars/avatar_2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="URL Fuzzer"
            secondary={"Discover hidden directories and files on a target website."}
          />
        </ListItem>
        <Divider orientation="vertical" flexItem />
  
        {/* Third Item */}
        <ListItem 
          sx={{
            flex: '1 1 auto',
            alignItems: 'flex-start',
            flexDirection: 'row',  
            margin: '0 8px',
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/assets/images/avatars/avatar_3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="DNS Enumeration"
            secondary={'Gather information about DNS records.'}
          />
        </ListItem>
      </List>

      {/* Second set of three items */}
      <List
        sx={{
          display: 'flex',
          width: '100%',
          bgcolor: 'background.paper',
        }}
      >
        {/* Fourth Item */}
        <ListItem 
          sx={{
            flex: '1 1 auto',
            alignItems: 'flex-start',
            flexDirection: 'row',  
            margin: '0 8px',
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Fourth Avatar" src="/assets/images/avatars/avatar_4.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Port Scanner"
            secondary={' Identify open ports on a target system.'}
          />
        </ListItem>
        <Divider orientation="vertical" flexItem />
  
        {/* Fifth Item */}
        <ListItem 
          sx={{
            flex: '1 1 auto',
            alignItems: 'flex-start',
            flexDirection: 'row',  
            margin: '0 8px',
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Fifth Avatar" src="/assets/images/avatars/avatar_5.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="DNS Lookup"
            secondary={'perform DNS (Domain Name System) lookups.'}
          />
        </ListItem>
        <Divider orientation="vertical" flexItem />
  
        {/* Sixth Item */}
        <ListItem 
          sx={{
            flex: '1 1 auto',
            alignItems: 'flex-start',
            flexDirection: 'row',  
            margin: '0 8px',
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Sixth Avatar" src="/assets/images/avatars/avatar_6.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Linkedin Scraper"
            secondary={'Extract professional and personal information from LinkedIn profiles.'}
          />
        </ListItem>
      </List>
    </div>
  );
}

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
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
        Cybersecurity Reconnaissance Toolkit Documentation
        </Typography>
        <Typography variant="h4">
          Introduction
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
        The Cybersecurity Reconnaissance Toolkit is designed to help you assess the security posture of websites and web applications. This toolkit includes various tools to perform essential reconnaissance tasks such as firewall detection, URL fuzzing, DNS enumeration, port scanning, DNS lookup, and LinkedIn scraping. By utilizing these tools, you can gather critical information and identify potential vulnerabilities in your target systems.
        </Typography>
        <Typography variant="h4">
          How to Use
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          1Input Target:  Enter the URL of the website or web application you wish to assess.<br />
          2.Start Scan: Click the "Start Scan" button to initiate the scanning process.<br />
          3.Review Results: Once the scan is complete, the tool will present a detailed analysis of various quality metrics and performance indicators.<br />
          4.Recommendations: Analyze the scan results to identify areas for improvement and implement recommended actions to enhance  the security.
        </Typography>
        <Typography variant="h4">
          Understanding Results
        </Typography>
        After the scan is complete, the toolkit provides a comprehensive report detailing various findings:<br />
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          <span style={{ textDecoration: 'underline' }}>Firewall Detection Results:</span>
          Indicates whether a firewall is present and provides details about its type.<br />
          <span style={{ textDecoration: 'underline' }}>URL Fuzzer Results:</span>
          Lists discovered URLs, directories, and files along with their status codes.<br />
          <span style={{ textDecoration: 'underline' }}>DNS Enumeration Results:</span>
          Displays identified subdomains and their corresponding DNS records.<br />
          <span style={{ textDecoration: 'underline' }}>Port Scanner Results:</span>
          Shows open ports and the services running on them..<br />
          <span style={{ textDecoration: 'underline' }}>DNS Lookup Results:</span>
          Provides detailed DNS records for the target domain.<br />
          <span style={{ textDecoration: 'underline' }}>LinkedIn Scraper Results:</span>
          Presents extracted data from LinkedIn profiles, including names, job titles, and contact information.
        </Typography>
        <Typography variant="h4">
        Tips for Using Cybersecurity Reconnaissance Toolkit
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          <span style={{ textDecoration: 'underline' }}>Perform Regular Reconnaissance: </span>
          Schedule regular scans using the toolkit to monitor changes in the target's security posture. This helps in detecting new vulnerabilities, unauthorized changes, or misconfigurations that could pose security risks.<br />
          <span style={{ textDecoration: 'underline' }}>Understand Your Target:</span>
          Before running any reconnaissance tools, gather preliminary information about your target website or web application. Identify key assets, sensitive data locations, and the overall structure of the target. This helps prioritize which areas to focus on during scans.<br />
          <span style={{ textDecoration: 'underline' }}>Prioritize Critical Issues:</span>
          Focus on addressing the most critical issues first. High-risk findings, such as exposed sensitive services, unexpected open ports, and leaked personal information, should be addressed promptly to enhance security.<br />
          <span style={{ textDecoration: 'underline' }}>Validate and Take Action:</span>
          After identifying issues, validate their accuracy and understand their implications. Decide if open ports should be closed or secured, and take necessary actions to protect sensitive information.<br />
          <span style={{ textDecoration: 'underline' }}>Adhere to Legal and Ethical Standards:</span>
          Ensure you have the necessary permissions to perform reconnaissance on the target system. Unauthorized scanning can result in legal consequences and potential disruption of services. Always operate within the legal and ethical boundaries.<br />
          <span style={{ textDecoration: 'underline' }}>Stay Informed on Security Trends:</span>
          Keep yourself informed about the latest security threats, vulnerabilities, and best practices. 
        </Typography>
      </Paper>
    </FullWidthRectangle>
  );
}

function ReconPage() {
  return (
    <div>
      <h1 style={{ color: '#0C8599', textAlign: 'center', fontWeight: 'bold' }}>Welcome to our Cybersecurity Reconnaissance Toolkit!</h1>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em', marginBottom: '2em' }}>Our toolkit helps you perform comprehensive cybersecurity reconnaissance, enabling efficient vulnerability identification and strengthening your security defenses.</p>
      <AlignItemsList />
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em' }}>Start your Scan </p>
      <UnstyledInputIntroduction />
      <ToolDocumentation />
      
      {/* Add more content here */}
    </div>
  );
}

export default ReconPage;
