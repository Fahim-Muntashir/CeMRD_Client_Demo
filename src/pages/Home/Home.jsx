import Footer from "../../components/Shared/Footer";
import Nav from "../../components/Shared/Nav";
import About from "./About";

import Banner from "./Banner";
import Blog from "./Blog";
import Challange from "./Challange";
import Connect from "./Connect";
import Faq from "./Faq";
import Feature from "./Feature";
import States from "./States";

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <Blog></Blog>
      <Challange></Challange>
      <Connect></Connect>
      <Faq></Faq>
      <Feature />
      <States></States>
      <Footer></Footer>
    </>
  );
};

export default Home;
