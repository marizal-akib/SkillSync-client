import Banner from "./Banner";
// import TabArea from "./TabArea";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllJob from "./Tabs/AllJob";


const Home = () => {
  return (
    <div>
      

      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList className='font-semibold sticky top-16 z-50 bg-slate-400'>
          <Tab>All Jobs</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <Banner></Banner>
        <TabPanel><AllJob></AllJob></TabPanel>
        <TabPanel>bbbb</TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
