import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const SeeKanji = () => {
  const navigate = useNavigate();
  const buttonArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleGradeClick = (grade) => {
    navigate(routes.gradeKanji.replace("/:gradeID", `/${grade}`));
  };

  return (
    <div>
      {buttonArray.map((grade) => (
        <button key={grade} onClick={() => handleGradeClick(grade)}>
          Grade {grade} Kanji
        </button>
      ))}
    </div>
  );
};

export default SeeKanji;
