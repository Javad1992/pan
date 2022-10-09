import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FirstSupport from '../FirstSpport/FirstSupport';
import SecondTab from '../SecondTab/SecondTab';
import ThirdTab from '../ThirdTab/ThirdTab';

const TabsContainer=({visit})=>{
    return (
        <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 px-0"
      >
        <Tab eventKey="home" title="ویرایش">
            <FirstSupport visit={visit} />
        </Tab>
        <Tab eventKey="profile" title="پیگیری اولیه">
          <SecondTab visit={visit} />
        </Tab>
        <Tab eventKey="contact" title="تعیین کارشناس" >
          <ThirdTab visit={visit} />
        </Tab>
      </Tabs>
    )
}
export default TabsContainer;