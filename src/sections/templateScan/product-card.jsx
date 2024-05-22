import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { useRouter } from 'src/routes/hooks';


// Mapping of product names to paths
const productPaths = {
  'Vulnerability Scanner Toolkit': '/vulnerability',
  'Cybersecurity Reconnaissance Toolkit': '/recon',
  'Targeted Exploitation Toolkit': '/exploitation',
  
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
    'Cybersecurity Reconnaissance Toolkit':
      'Cybersecurity Reconnaissance Toolkit is a versatile solution for thorough reconnaissance. With features like firewall detection, URL fuzzing, DNS enumeration, port scanning, DNS lookup, and LinkedIn scraping, it empowers you to  identify vulnerabilities efficiently. Stay ahead of threats and strengthen cybersecurity with this comprehensive toolkit.',
    'Vulnerability Scanner Toolkit':
      'vulnerabulity scanner toolkit is your comprehensive solution for identifying weaknesses in digital infrastructures. With specialized modules for CMS, framework, SSL, and quality assessments, its your go-to solution for robust vulnerability detection. Stay ahead of potential threats and secure your digital assets with Vulnerability Scanner toolkit.',
    'Targeted Exploitation Toolkit':
      'The Targeted Exploitation Toolkit is a solution designed for exploiting vulnerabilities. With features like SQL injection, xss, and header security analysis, this toolkit enables you to identify and exploit weaknesses in target systems effectively. Stay agile in your offensive strategies and elevate your exploitation game with this comprehensive toolkit.',
 
  };

  return (
    <Stack spacing={5}>
    <Card sx={{ width: '150%', margin: '2rem'  }}>
      <Box sx={{ pt: '80%', position: 'relative', backgroundColor: 'black'}}>
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
    </Stack>
  );
}

ShopProductCard.propTypes = {
  product: PropTypes.object,
};