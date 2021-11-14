/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { QuestionList } from "./QuestionList";
import { getUnansweredQuestions, QuestionData } from "./QuestionsData";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";
import { PrimaryButton } from "./Styles";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log("HomePage - useEffect");
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      console.log("HomePage - unansweredQuestions", unansweredQuestions);
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);
  const handleAskQuestionClick = () => {
    navigate(`ask`);
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions} />
      )}
    </Page>
  );
};
