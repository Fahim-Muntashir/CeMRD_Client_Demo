import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import Nav from "../../components/Shared/Nav";
import AboutUs from "./AboutUs";
import Accivement from "./Accivement";
import FirstAt from "./FirstAt";
import Statistic from "./Statistic";

const About = () => {
  return (
    <div>
      <Nav></Nav>
      <Header
        title={
          "CeMRD: Pioneering Innovation and Knowledge Advancement for a Sustainable Future"
        }
        description={
          "CeMRD, founded in 2021 by Mr. Mahmudul Hasan, is a dynamic R&D organization committed to innovative solutions and knowledge advancement.The organization's inception is rooted in a shared passion for exploration and a dedicated commitment to solving complex problems."
        }
      ></Header>
      <FirstAt></FirstAt>
      <Statistic></Statistic>
      <AboutUs></AboutUs>
      <Accivement></Accivement>
      <Footer></Footer>
    </div>
  );
};

export default About;
