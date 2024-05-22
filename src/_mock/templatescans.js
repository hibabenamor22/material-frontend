import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

const PRODUCT_NAME = [
  'Cybersecurity Reconnaissance Toolkit',
  'Vulnerability Scanner Toolkit',
  'Targeted Exploitation Toolkit',
  
];
const scans= [...Array(3)].map((_, index) => {
  const setIndex = index + 1;
  let path;
  switch (index) {
    case 0:
      path = '/recon';
      break;
    case 1:
      path = '/vulnerability';
      break;
    case 2:
      path = '/exploitation.';
      break;      
    default:
      path = null;
  }
 
  return {
    id: faker.string.uuid(),
    cover: `/assets/images/scans/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    status: sample(['', '']),
    path,
    style: { margin: '7rem' }, // Add a style property to each card
  };
});

export { scans };
