import { StrictMode, React } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    coding: "Laravel",
    level: "intermediate",
    backgroundColor: "red",
    textColor: "white",
  },
  {
    coding: "SQL",
    level: "intermediate",
    backgroundColor: "yellow",
    textColor: "black",
  },
  {
    coding: "Visual Basic",
    level: "intermediate",
    backgroundColor: "purple",
    textColor: "white",
  },
  {
    coding: "Git",
    level: "advanced",
    backgroundColor: "black",
    textColor: "white",
  },
  {
    coding: "React",
    level: "beginner",
    backgroundColor: "blue",
    textColor: "white",
  },
];

/*
💪 -> advanced
👍 -> intermediate
👶 -> basic
*/

/* Personal approach with terniary
  {level === "advanced" ? (
    <span>{skill} 💪</span>
  ) : level === "beginner" ? (
    <span>{skill} 👶</span>
  ) : level === "intermediate" ? (
    <span>{skill} 💪</span>
  ) : (
    <span>{skill}</span>
  )}
*/

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="logo192.png" alt="react"></img>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.coding}
          level={skill.level}
          textColor={skill.textColor}
          backgroundColor={skill.backgroundColor}
          key={skill.coding}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, textColor, backgroundColor }) {
  return (
    <div
      className="skill"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
    >
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "beginner" && "👶"}
        {level === "intermediate" && "💪"}
      </span>
    </div>
  );
}

function Intro() {
  return (
    <div className="body">
      <h1>Dicky Herlambang</h1>
      <p className="skill">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        dolorem reprehenderit repellat eaque nostrum tempore adipisci esse in
        asperiores animi repellendus itaque harum aut recusandae! Odit accusamus
        possimus mollitia ducimus.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
