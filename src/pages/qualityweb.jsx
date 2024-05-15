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
          Quality Scan Tool Documentation
        </Typography>
        <Typography variant="h4">
          Introduction
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          Welcome to our Quality Scan Tool documentation. This tool is designed to assist in the assessment of the quality and performance of websites or web applications, ensuring they meet industry standards and best practices. In today's digital landscape, maintaining high-quality web assets is essential for user satisfaction, search engine optimization, and overall brand reputation. Our tool aims to streamline the process of evaluating and improving the quality of your web presence.
        </Typography>
        <Typography variant="h4">
          How to Use
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          1Input Target: Enter the URL of the website or web application you wish to assess for quality.<br />
          2.Start Scan: Click the "Start Scan" button to initiate the scanning process.<br />
          3.Review Results: Once the scan is complete, the tool will present a detailed analysis of various quality metrics and performance indicators.<br />
          4.Recommendations: Analyze the scan results to identify areas for improvement and implement recommended actions to enhance the quality of your web assets.
        </Typography>
        <Typography variant="h4">
          Understanding Results
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          <span style={{ textDecoration: 'underline' }}>Accessibility:</span>
          Evaluation of accessibility features to ensure compliance with WCAG (Web Content Accessibility Guidelines) standards.<br />
          <span style={{ textDecoration: 'underline' }}>Performance:</span>
          Assessment of website loading speed, page size, and optimization techniques to enhance user experience and search engine ranking.<br />
          <span style={{ textDecoration: 'underline' }}>Security Recommendations:</span>
          We provide actionable recommendations to help you address any quality issues and enhance the overall quality and performance of your web assets.
        </Typography>
        <Typography variant="h4">
          Best Practices
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem' }} paragraph>
          <span style={{ textDecoration: 'underline' }}>Regular Scanning:</span>
          Incorporate periodic quality scans into your website maintenance routine to ensure ongoing adherence to quality standards.<br />
          <span style={{ textDecoration: 'underline' }}>Continuous Improvement:</span>
          Use scan results to identify areas for improvement and implement iterative enhancements to enhance overall quality.<br />
          <span style={{ textDecoration: 'underline' }}>Collaboration with Development Teams:</span>
          Work closely with web development teams to address identified quality issues and implement best practices for website optimization.<br />
          <span style={{ textDecoration: 'underline' }}>Documentation and Reporting:</span>
          Maintain detailed documentation of quality scan results, including identified issues, recommended actions, and progress tracking, to support continuous improvement efforts.<br />
          <span style={{ textDecoration: 'underline' }}>User Experience (UX) Testing:</span>
          Conduct regular UX testing to ensure that website design and functionality meet user expectations and contribute to a positive user experience.<br />
          <span style={{ textDecoration: 'underline' }}>Performance Optimization:</span>
          Implement optimization techniques such as image compression, caching, and code minification to improve website loading speed and overall performance.<br />
          <span style={{ textDecoration: 'underline' }}>Compliance Monitoring:</span>
          Stay updated on regulatory requirements and industry standards relevant to your website's domain and ensure compliance through regular quality scans and assessments.
        </Typography>
      </Paper>
    </FullWidthRectangle>
  );
}




function QualitywebPage() {
  return (
    <div>
      <h1 style={{ color: '#0C8599', textAlign: 'center', fontWeight: 'bold' }}>Welcome to our Quality Scan service!</h1>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em', marginBottom: '2em' }}>Our tool assists you in identifying quality issues within your website, facilitating the enhancement of overall website performance and user experience.</p>
      <p style={{ color: '#000435', textAlign: 'center', fontSize: '1.5em' }}>Start your Scan </p>
      <UnstyledInputIntroduction />
      <ToolDocumentation />
      {/* Add more content here */}

    </div>
  );
}

export default QualitywebPage;
