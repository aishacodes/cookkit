import "./Card.scss";

const Card = ({ title }: { title: string }) => {
  return (
    <section className="card">
      <div className="top-bg">
        <img src={`/images/${title}.svg`} alt="" />
      </div>
      <div className="content">
        <p>
          <span>{title}</span>
        </p>
      </div>
    </section>
  );
};

export default Card;
