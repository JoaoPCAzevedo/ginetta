/** Dependencies */
import React from 'react';

/** Props interface */
interface Props {
  question: string;
  answer: string;
}

/** Component */
const QuestionAnswer: React.FunctionComponent<Props> = ({
  question,
  answer,
}: Props) => {
  return (
    <>
      <h6>{question}</h6>
      <p>{answer}</p>
    </>
  );
};

/** Export */
export default QuestionAnswer;
