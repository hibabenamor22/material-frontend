import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

const PRODUCT_NAME = [
  'Port Scanner',
  'URL Fuuzzer',
  'WordPress Vulnerability Scanner',
  'SQLi Exploiter',
  'Firewall Detection Tool',
  'DNS Enumeration Tool', 
  'DNS Lookup Tool',
  'QualityWeb Checker', 
  'Framework Finder',    
  'Headers-Security Scanner', 
  'CMS Scanner',
  'SSL/TLS Checker',
  
];
const products = [...Array(12)].map((_, index) => {
  const setIndex = index + 1;
  let path;
  switch (index) {
    case 0:
      path = '/scanport';
      break;
    case 1:
      path = '/urlfuzzer';
      break;
    case 2:
      path = '/wordpressscanner';
      break;
    case 3:
      path = '/sqliexploiter';
      break;
    case 4:
      path = '/firewalldetection';
      break;
    case 5:
      path = '/dnsenumeration';
      break;
    case 6:
      path = '/dnslookup';
      break;
    case 7:
      path = '/qualityweb';
      break;  
    case 8:
      path = '/frameworkfinder';
      break;
    case 9:
      path = '/headersscan';
      break;
    case 10:
      path = '/cmsscan';
      break; 
    case 11:
      path = '/ssltls';
      break;            
    default:
      path = null;
  }
 
  return {
    id: faker.string.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    status: sample(['', '']),
    path,
  };
});

export { products };
