import { CLASS_LIST } from "../consts";

const ClassMin = () => {
  return (
    <>
      <div className="class-min">
        <h2>Class Minimums</h2>
        <div>
          {Object.keys(CLASS_LIST).map((charClass) => (
            <p key={charClass}>{charClass}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClassMin;
