let Filter = (props) => {
  return (
    <select className="filter">
      {props.fil.map((i) => {
        return <option value={i}> {i} </option>;
      })}
    </select>
  );
};
export default Filter;
