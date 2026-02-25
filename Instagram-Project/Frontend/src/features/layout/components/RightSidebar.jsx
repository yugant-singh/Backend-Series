import '../styles/rightsidebar.scss'
import Followers from './Followers';
import Following from './Following';

const RightSidebar = () => {
  return (
    <div className="rightSidebar">

      <div className="contents">

        <div className="top">

          <Following/>
         <Followers/>
        </div>

      </div>
    </div>
  );
};

export default RightSidebar;