/** Dependencies */
import React from 'react';

/** Data */
import { data } from '../../data/qustionsAnswers';

/** Molecules */
import QuestionAnswer from '../molecules/QuestionAnswer';

/** Component */
const ListQuestionsAnswers: React.FC = () => {
  return (
    <>
      {data.map((eachItem, key) => (
        <QuestionAnswer
          key={`question-answer-${key}`}
          question={eachItem.question}
          answer={eachItem.answer}
        />
      ))}
    </>
  );
};

/** Export */
export default ListQuestionsAnswers;
