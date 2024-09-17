import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';
import Headers from '../components/Headers';
import Banner from '../components/Banner';
import Category from '../components/Category';

import Footer from '../components/Footer';


function Categories() {
  return (
    <>
              <Libraries/>
           
            <Headers/>
            <Banner/>
            <Category/>
            <Footer/>
            <Outlet />
     
    </>
  );
}

export default Categories;
