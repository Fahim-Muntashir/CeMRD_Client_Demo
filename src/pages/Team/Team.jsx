import Member from "./Member";
import Adviser from "./Adviser";
import Nav from "../../components/Shared/Nav";
import Moon from "./Moon";
const Team = () => {
  return (
    <div>
      <Nav></Nav>
      <Moon></Moon>
      <Adviser></Adviser>
      <Member></Member>
    </div>
  );
};

export default Team;
