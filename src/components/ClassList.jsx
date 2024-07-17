import { useEffect, useState } from "react";
import { defaultRequirements } from "../utils/utils";

const ClassList = ({ CLASS_LIST, setSelectedClass, character }) => {
    // Set the initial state of the meetsRequirements array to false for each class
    const [meetsRequirements, setMeetsRequirements] = useState(defaultRequirements(CLASS_LIST));

    const handleClick = (className) => {
        setSelectedClass(className)
    }

    useEffect(() => {
        // Check if the attributes meet the requirements for each class
        const meetsRequirements = Object.keys(CLASS_LIST).map((className) => {
            return Object.keys(CLASS_LIST[className]).every((attribute) => {
                return character.attributes[attribute] >= CLASS_LIST[className][attribute];
            });
        });
        // if the attributes meet the requirements, set the state to true
        setMeetsRequirements(meetsRequirements);
    }, [character]);
    return (
        <div className="class-list">
            <h2>Classes</h2>
            {/* Show the different classes without a list */}
            {Object.keys(CLASS_LIST).map((className) => (
                <div key={className}>
                    <span
                        onClick={() => handleClick(className)}
                        style={{ cursor: 'pointer', color: meetsRequirements[Object.keys(CLASS_LIST).indexOf(className)] ? 'green' : 'white' }}
                    >{className}</span>

                </div>
            ))}
        </div>
    );
};

export default ClassList;