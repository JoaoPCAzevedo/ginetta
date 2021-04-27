/** Interface */
interface QuestionAnswer {
  question: string;
  answer: string;
}

export const data: QuestionAnswer[] = [
  {
    question: 'What do you like about your solution?',
    answer:
      'Essentially the way I organized the components, although in this case it is a simple application, with this structure the code seems to me quite organized and easy to read and understand, very easy to continue this way to scale it.',
  },
  {
    question: 'What do you dislike about your solution?',
    answer:
      'Visually (CSS) it is very basic implementation, it is not a part that I am proud of in this project.',
  },
  {
    question:
      'If you had a full day more to work on this, what would you improve?',
    answer:
      'Definitely the visual part. And I would develop some tests, unitary and end-2-end. And, use React ref tool to fix the implementation of move in list with keyboard and open user link with enter key press.',
  },
  {
    question:
      'If you would start from scratch now, what would you do differently?',
    answer:
      'Just for fun i would try do the same but with TailwindCSS tool instead of Styled-components. I have done some tests at home with this and I have loved it.',
  },
];
