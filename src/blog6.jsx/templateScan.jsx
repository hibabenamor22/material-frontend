import { Helmet } from 'react-helmet-async';

import { ScansViews } from 'src/sections/templateScan/view';

// ----------------------------------------------------------------------

export default function ScansPage() {
  return (
    <>
      <Helmet>
        <title> Template Scans | pentesting </title>
      </Helmet>
      <ScansViews />
    </>
  );
}
