
const ClassMin = ({ selectedClass, CLASS_LIST, setSelectedClass }) => {
    const minStats = CLASS_LIST[selectedClass];
    return (
        selectedClass === null ? null :
            <div className="class-min">
                <h2>Minimum Stats for {selectedClass}</h2>

                {Object.keys(minStats).map((stat) => (
                    <div key={stat}>
                        <span>{stat}: {minStats[stat]}</span>
                    </div>
                ))}
                <button onClick={() => setSelectedClass(null)}>Close Requirement View</button>
            </div>
    );
};

export default ClassMin;