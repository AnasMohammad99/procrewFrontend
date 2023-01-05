import { useEffect } from 'react';
import {Layout} from './layout';

export const CustomerLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="upper-part">

        <Layout />
      </div>
    </>
  );
};

export default CustomerLayout;
