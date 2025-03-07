import "./Card.scss";

const Card = ({
  title,
  timeframes,
  activeTime,
}: {
  title: string;
  activeTime: string;
  timeframes: any;
}) => {
  return (
    <section className="card">
      <div className="top-bg">
        <img src={`/images/${title}.svg`} alt="" />
      </div>
      <div className="content">
        <p className="title">
          <span>{title}</span>
          <img src="/images/menu.svg" alt="" />
        </p>
        <div className="stat">
          <div className="current">
            <p>{timeframes[activeTime.toLocaleLowerCase()]?.current} </p>
            <span>Completed</span>
          </div>
          <p className="previous">
            <span>
              {activeTime == "Daily"
                ? "Yesterday"
                : activeTime == "Weekly"
                ? "Last Week"
                : "Last Month"}
            </span>
            <span>
              : {timeframes[activeTime.toLocaleLowerCase()]?.previous}
            </span>
            <span> completed</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
