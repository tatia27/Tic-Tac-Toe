import "./Item.css";

function Item({ mark, position, changeMark }) {
  return (
    <div
      className={`Block mark${mark}`}
      onClick={(e) => changeMark(position)}
    ></div>
  );
}

export default Item;
