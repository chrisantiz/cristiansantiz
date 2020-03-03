import React, { useState, useEffect } from 'react';
import { RootProvider } from '@libs/context/root/root.context';
import { DefaultLayout } from '../layouts/DefaultLayout';

export default (props: any) => {
  // const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log(props);
    // the component has been mounted
    // setMounted(true);
    document.body.classList.add('dark');
  }, []);

// return <DefaultLayout>{props.children}</DefaultLayout>;
// return <h1>Hola</h1>
return(
  <RootProvider>
    <DefaultLayout {...props}>{props.children}</DefaultLayout>
  </RootProvider>
)
};
