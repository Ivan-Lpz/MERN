// import './App.css';
import Tabs from './components/Tabs';
import { useState } from "react";
import Tab from './components/Tab';


function App() {
    const [tabs, setTabs] = useState([
        { label: "tab1", content: "This is tab 1" },
        { label: "tab2", content: "This is tab 2" },

        { label: "tab3", content: "This is tab 3" }

    ])

    return (
        <div className="App">
            <Tabs tabs={tabs} />
            <Tab tabs={tabs} setTabs={setTabs}/>
        </div>
    );
}

export default App;
