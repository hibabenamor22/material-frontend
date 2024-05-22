import { Helmet } from 'react-helmet-async';

import { DomainsView } from 'src/sections/domains/view';

// ----------------------------------------------------------------------

export default function Domains() {
  return (
    <>
      <Helmet>
        <title> User | pentesting </title>
      </Helmet>
      <DomainsView />
    </>
  );
}
