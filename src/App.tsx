import "./App.scss";
import Card from "./component/Card";
import ProfileCard from "./component/ProfileCard";
import timeframes from "./timeframes";

function App() {
  return (
    <main className="wrapper">
      <ProfileCard />
      <div className="cards">
        {timeframes.map((item, itemIndex) => (
          <Card {...item} key={`${itemIndex}-${item.title}`} />
        ))}
      </div>
    </main>
  );
}

export default App;
