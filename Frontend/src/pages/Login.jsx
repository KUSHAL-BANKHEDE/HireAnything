import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';
import Headers from '../components/Headers';
import Banner from '../components/Banner';
import Login  from '../components/Login';

import Footer from '../components/Footer';


function Categories() {
  return (
    <>
              <Libraries/>
           
            <Headers/>
            <Banner/>
            <Login/>
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default Categories;
