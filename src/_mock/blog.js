import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Protecting Your Assets: The Importance of Penetration Testing in Cybersecurity',
  '20 Cybersecurity Tips and Best Practices for Your Business',
  'What are The Most Common Cyber Attacks?',
  'What is Cryptography?',
  'Data Security',
  'Simple, Great Looking Animations in Your Project | Video Tutorial',
  '40 Free Serif Fonts for Digital Designers',
  'hiba'
];

export const posts = [...Array(7)].map((_, index) => {
  let path;
  switch (index) {
    case 0:
      path = '/blog1';
      break;
    case 1:
        path = '/blog2';
        break;
    case 2:
        path = '/blog3';
        break;
    case 3:
        path = '/blog4';
        break;
    case 4:
      path = '/blog5';
      break;
    
    default:
      path = null;
  }
  return {
    id: faker.string.uuid(),
    cover: `/assets/images/covers/cover_${index + 1}.jpg`,
    title: POST_TITLES[index],
    author: {
      name: faker.person.fullName(),
    },
    path,
  };
});


