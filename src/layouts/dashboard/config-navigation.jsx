import Box from '@mui/material/Box';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name, isImage = false) => {
  if (isImage) {
    return (
      <Box
        component="img"
        src={name}
        sx={{ width: 1, height: 1, objectFit: 'cover' }}
      />
    );
  }
  return <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
};

const navConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Scans',
    path: '/products',
    icon: icon('/assets/icons/navbar/icon1.jpg', true),
  },
  {
    title: 'Template Scan',
    path: '/templateScan',
    icon: icon('/assets/icons/navbar/icon3.jpg', true),
  },
  {
    title: 'Domains',
    path: '/Domains',
    icon: icon('/assets/icons/navbar/icon2.jpg', true),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
