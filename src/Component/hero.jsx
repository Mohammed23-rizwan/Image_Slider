const hero = ({ count, setcount }) => {
  return (
    <div>
      <ul className="dots">
        <li
          onClick={() => {
            setcount(0);
          }}
          className={count == 0 ? "redbot" : "hero"}
        ></li>
        <li
          onClick={() => {
            setcount(1);
          }}
          className={count == 1 ? "redbot" : "hero"}
        ></li>
        <li
          onClick={() => {
            setcount(2);
          }}
          className={count == 2 ? "redbot" : "hero"}
        ></li>
        <li
          onClick={() => {
            setcount(3);
          }}
          className={count == 3 ? "redbot" : "hero"}
        ></li>
      </ul>
    </div>
  );
};

export default hero;
