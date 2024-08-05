import { useState } from "react";
import "./App.scss";
import Card from "./component/Card";
import ProfileCard from "./component/ProfileCard";
import timeframes from "./timeframes";

function App() {
  const [activeTime, setActiveTime] = useState("Daily");

  return (
    <main className="wrapper">
      <ProfileCard activeTime={activeTime} setActiveTime={setActiveTime} />
      <div className="cards">
        {timeframes.map((item, itemIndex) => (
          <Card
            {...item}
            activeTime={activeTime}
            key={`${itemIndex}-${item.title}`}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
