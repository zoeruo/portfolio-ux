import { Banner } from '../components/Banner';
import { Project } from '../components/Project';
import { Playground } from '../components/Playground';

function Home() {
    return (
      <div className="Home">
        <Banner />
        <Project/>
        {/* <Playground/> */}
      </div>
  
    );
  }
  
  export default Home;