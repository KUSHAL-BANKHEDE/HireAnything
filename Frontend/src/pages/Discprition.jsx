import { Outlet } from 'react-router-dom';
import Libraries from '../components/Libraries';
import Banner from '../components/Banner';
import DescriptionPage from '../components/DescriptionPage';
import Footer from '../components/Footer';





function Discprition() {
  return (
    <>
            <Libraries/>
            {/* <Headers/> */}
            <Banner/>
            
            <DescriptionPage/>
            <Footer/>

            <Outlet />
     
    </>
  );
}

export default Discprition;
