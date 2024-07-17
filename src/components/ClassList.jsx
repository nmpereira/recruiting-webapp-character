import { CLASS_LIST } from "../consts";

const ClassList = () => {
  return (
    <div className="class-list">
      <h2>Classes</h2>
      <div>
        {Object.keys(CLASS_LIST).map((charClass) => (
          <p key={charClass}>{charClass}</p>
        ))}
      </div>
    </div>
  );
};

export default ClassList;
