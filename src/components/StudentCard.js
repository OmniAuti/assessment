import { useState, useEffect } from "react";

import CardExpansionButton from "./CardExpansionButton";
import Tags from "./Tags";
import TagInput from "./TagInput";
import GradesList from "./GradesList";

const StudentCard = ({ data, handleTagSubmission }) => {
  // STATES ================================================
  const [cardExpansion, setCardExpansion] = useState(false);
  const [tagArr, setTagArr] = useState([]);

  // END OF STATES =========================================
  // GET AVERAGE OF GRADES
  const averageGrade =
    data.grades.reduce((a, b) => Number(a) + Number(b)) / data.grades.length;

  // EFFECTS =============================================
  useEffect(() => {
    for (const tag of data.tags) {
      handleCreateTag(tag);
    }
  }, [data]);

  // FUNCTIONS =============================================
  const handleCardExpansion = () => {
    setCardExpansion(!cardExpansion);
  };

  const handleCreateTag = (value) => {
    const idx = tagArr.length;
    setTagArr([{ value: value, id: idx }, ...tagArr]);
  };

  return (
    <div
      className={
        cardExpansion ? "card-container active-grades" : "card-container"
      }
    >
      <div className="card">
        <CardExpansionButton
          cardExpansion={cardExpansion}
          handleCardExpansion={handleCardExpansion}
        />
        <img
          className="card-image"
          src={data.pic}
          alt="Student Profile Image"
        />
        <ul className="card-list">
          <li>
            {data.firstName.toUpperCase()} {data.lastName.toUpperCase()}
          </li>
          <li>Email: {data.email}</li>
          <li>Company: {data.company}</li>
          <li>Skill: {data.skill}</li>
          <li>Average: {averageGrade.toFixed(2)}%</li>
        </ul>
      </div>
      <ul className="card__grades-list">
        <GradesList data={data.grades} />
      </ul>
      <div className="tags-container">
        <Tags tagArr={tagArr} />
        <TagInput
          data={data}
          handleTagSubmission={handleTagSubmission}
          handleCreateTag={handleCreateTag}
        />
      </div>
    </div>
  );
};

export default StudentCard;
