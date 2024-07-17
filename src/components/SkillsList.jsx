const SkillsList = ({ skills }) => {
  return (
    <>
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <p key={skill.name}>
            {skill.name} | {skill.attributeModifier}
          </p>
        ))}
      </div>
    </>
  );
};

export default SkillsList;
