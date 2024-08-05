import "./ProfileCard.scss";

const ProfileCard = ({
  activeTime,
  setActiveTime,
}: {
  activeTime: string;
  setActiveTime: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const timeframe = ["Daily", "Weekly", "Monthly"];

  return (
    <section className="profile-card">
      <div className="bio">
        <img src="/images/avatar.png" alt="" />
        <div>
          <p>Report for</p>
          <h2>Stancey Castilo</h2>
        </div>
      </div>
      <div className="time-frame">
        {timeframe.map((time, timeIndex) => (
          <p
            key={`${timeIndex}-${time}`}
            className={`time ${time === activeTime ? "active" : ""}`}
            onClick={() => {
              setActiveTime(time);
            }}
          >
            {time}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ProfileCard;
