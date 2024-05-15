import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { useRouter } from 'src/routes/hooks';


// Mapping of product names to paths
const productPaths = {
  'Port Scanner': '/scanport',
  'URL Fuuzzer': '/urlfuzzer',
  'WordPress Vulnerability Scanner': '/wordpressscanner',
  'SQLi Exploiter': '/sqliexploiter',
  'Firewall Detection Tool': '/firewalldetection',
  'DNS Enumeration Tool': '/dnsenumeration',
  'DNS Lookup Tool': '/dnslookup',
  'QualityWeb Checker': '/qualityweb',
  'Framework Finder': '/frameworkfinder',
  'Headers-Security Scanner': '/headersscan',
  'SSL/TLS Checker': '/ssltls',




  // Add more mappings as needed
};

export default function ShopProductCard({ product }) {
  const router = useRouter();

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.cover}
      sx={{
        top: 0,
        width: '100%', // full width
        height: '100%', // full height
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  // Updated descriptions
  const productDescriptions = {
    'SQLi Exploiter':
      'Discover SQL injection vulnerabilities in web applications by crawling and performing a deep inspection.',
    'WordPress Vulnerability Scanner':
      'This tool helps you discover security issues and vulnerabilities in the target WordPress website.',
    'Port Scanner':
      'Find open TCP and UDP ports. Easily map your network attack surface and discover open ports and services.',
    'URL Fuuzzer':
      'Find open TCP and UDP ports. Easily map your network attack surface and discover open ports and services.',
    'Firewall Detection Tool':
      'Efficiently evaluate firewall configurations. Identify restrictions and assess service accessibility across networks.',
    'DNS Enumeration Tool':
      'Dive into network insights with our DNS Enumeration Tool. Uncover domain details and vital network information effortlessly.',
    'DNS Lookup Tool':
      'Retrieve domain information with our DNS Lookup Tool.Resolve domain names  IPs and gather essential network details. ',
    'QualityWeb Checker':
      'Ensure web quality with our QualityWeb Checker. Streamline website assessment and optimize performance effortlessly.',
    'Framework Finder':
      'Gain vital insights for website optimization. Explore essential attributes for improved performance and functionality.',
    'Headers-Security Scanner':
      'Boost website security with our Headers-Security Scanner. Analyze HTTP headers to fortify defenses against cyber threats.',
    'CMS Scanner':
      'Simplify CMS security checks with our Scanner. Effortlessly analyze content management systems to identify vulnerabilities .',
    'SSL/TLS Checker':
      'Simplify CMS security checks with our Scanner. Effortlessly analyze content management systems to identify vulnerabilities .',
  };

  return (
    <Card>
      <Box sx={{ pt: '50%', position: 'relative', backgroundColor: 'black' }}>
        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <button
          type="button"
          onClick={() => {
            // Use the product name to get the path from the mapping
            const path = productPaths[product.name];
            router.push(path);
          }}
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
          }}
        >
          <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
            {product.name}
          </Link>
        </button>
        <p>{productDescriptions[product.name]}</p> {/* Display the description */}
      </Stack>
    </Card>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};