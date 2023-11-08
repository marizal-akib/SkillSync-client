import Banner from "./Banner";
// import TabArea from "./TabArea";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AllJob from "./Tabs/AllJob";
import DigiMarketing from "./Tabs/DigiMarketing";
import Web from "./Tabs/Web";
import GraphicDesign from "./Tabs/GraphicDesign";
import Coding from "./Tabs/Coding";
import VideoEditing from "./Tabs/VideoEditing";
import How from "./How/How";

const Home = () => {
  return (
    <div className='bg-slate-100'>
        <div>

      <Tabs className='bg-slate-100' defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList className="font-semibold text-xs lg:text-sm justify-between absolute md:sticky md:top-16 z-50 bg-slate-400">
          <Tab>All Jobs</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Web Design and Development</Tab>
          <Tab>Graphic Design</Tab>
          <Tab>Coding</Tab>
          <Tab>Video Editing</Tab>
        </TabList>
        <Banner></Banner>
        <TabPanel>
          <AllJob></AllJob>
        </TabPanel>
        <TabPanel><DigiMarketing></DigiMarketing></TabPanel>
        <TabPanel><Web></Web></TabPanel>
        <TabPanel><GraphicDesign></GraphicDesign></TabPanel>
        <TabPanel><Coding></Coding></TabPanel>
        <TabPanel><VideoEditing></VideoEditing></TabPanel>
      </Tabs>
        </div>
        <How></How>
    </div>
  );
};

export default Home;
