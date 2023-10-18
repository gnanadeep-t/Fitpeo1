let Card = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} />
      </div>
      <span className="card-data">
        <p>{props.text}</p>
        <h3>{props.value}</h3>
        <p>
          <span>{props.per}</span> this month
        </p>
      </span>
    </div>
  );
};
export default Card;
