export const Button = props => {
  return (
    <div className="flexContainer">
      <button className="Button" onClick={props.onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
