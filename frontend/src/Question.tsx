import React from 'react';
import { QuestionData } from './QuestionsData';

interface PropsQuestionData {
  data: QuestionData;
  showContent?: boolean;
}

export const Question = ({ data, showContent = true }: PropsQuestionData) => (
  <div>
    <div>{data.title}</div>
    {showContent && ( //short circuit operator
      <div>
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}.............`
          : data.content}
      </div>
    )}

    <div>
      {`Asked by ${data.userName} on 
            ${data.created.toLocaleDateString()} 
            ${data.created.toLocaleTimeString()}
            `}
    </div>
  </div>
);
