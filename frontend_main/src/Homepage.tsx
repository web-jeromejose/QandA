import React, { useEffect, useState } from 'react';
import { QuestionList } from './QuestionList.tsx';
import { getUnansweredQuestions, QuestionData } from './QuestionsData.ts';
import { Page } from './Page.tsx';
import { PageTitle } from './PageTitle.tsx';

export const HomePage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = React.useState(true);

  useEffect(() => {
    console.log('useEffect1');

    const doGetUnansweredQuestions = async () => {
      const unAnsweredQuestion = await getUnansweredQuestions();
      setQuestions(unAnsweredQuestion);
      setQuestionsLoading(false);
    };

    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    console.log('TODO - move to the ASKPAGE');
  };

  return (
    <Page>
      <div>
        <PageTitle>Unanswered Questions</PageTitle>
        <button onClick={handleAskQuestionClick}>Ask a question</button>
      </div>
      {questionsLoading ? (
        <div>LOADING..............</div>
      ) : (
        <QuestionList data={questions} />
      )}
    </Page>
  );
};
