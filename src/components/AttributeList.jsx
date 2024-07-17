const AttributeList = ({ attributes }) => {
  return (
    <>
      <div className="attribute-list">
        <h2>Attributes</h2>
        <div>
          {attributes.map((attribute) => (
            <p key={attribute}>{attribute}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AttributeList;
