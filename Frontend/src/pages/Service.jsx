import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import Libraries from '../components/Libraries';

import Service from '../components/Services';

function MyService() {
  return (
    <>
              <Libraries/>
{/*        
            <Headers/> */}
            <Banner/>
            <Service/>
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default MyService;
