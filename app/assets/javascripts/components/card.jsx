const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">{props.title}</span>
        {props.children}
      </div>
    </div>
  );
};