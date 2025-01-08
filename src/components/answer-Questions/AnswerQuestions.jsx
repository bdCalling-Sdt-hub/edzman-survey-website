'use client';
import React, { useState } from 'react';
import { Button, Input, Progress } from 'antd';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const questions = [
    {
        id: 1,
        title: 'What am I passionate about?',
        subQuestions: [
            'What activities make me feel alive or energized?',
            "When do I lose track of time because I'm so engrossed in what I'm doing?",
            'What topics or issues do I feel compelled to learn more about?',
        ],
    },
    {
        id: 2,
        title: 'What are my strengths?',
        subQuestions: [
            'What skills or talents come naturally to me?',
            'What do others often praise me for or ask for my help with?',
            'What accomplishments am I most proud of?',
        ],
    },
];

const AnswerQuestions = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const currentQuestion = questions[currentQuestionIndex];
    const handleInputChange = (value, questionId, subQuestionIndex) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: {
                ...prev[questionId],
                [subQuestionIndex]: value,
            },
        }));
    };

    const isAllAnswersFilled = currentQuestion.subQuestions.every(
        (_, index) => answers[currentQuestion.id]?.[index]?.trim() !== ''
    );

    const totalSubQuestions = questions.reduce(
        (sum, question) => sum + question.subQuestions.length,
        0
    );

    const answeredSubQuestions = Object.values(answers).reduce(
        (sum, questionAnswers) =>
            sum + Object.values(questionAnswers || {}).filter((answer) => answer.trim() !== '').length,
        0
    );

    const progressPercentage = parseFloat(((answeredSubQuestions / totalSubQuestions) * 100).toFixed(2));
    const handleNext = () => {
        if (isAllAnswersFilled && currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = () => {
        console.log('User Answers:', answers);
        alert('Answers Submitted! Check console for details.');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4 py-8">
            <Progress
                percent={progressPercentage}
                status="active"
                strokeColor="#00b0f2"
                className="my-6 w-full max-w-3xl"
            />
            <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl w-full">
                <h2 className="text-xl font-bold mb-6">
                    {currentQuestionIndex + 1}. {currentQuestion.title}
                </h2>
                {currentQuestion.subQuestions.map((subQuestion, index) => (
                    <div key={index} className="mb-4">
                        <p className="mb-2 font-medium">{subQuestion}</p>
                        <Input.TextArea
                            rows={3}
                            placeholder="Your Answer"
                            value={answers[currentQuestion.id]?.[index] || ''}
                            onChange={(e) =>
                                handleInputChange(e.target.value, currentQuestion.id, index)
                            }
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-between md:flex-row container flex-col items-center mt-8">
                <Button
                    type="default"
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                >
                    <IoIosArrowBack /> Previous Question
                </Button>
                <p>
                    Question {currentQuestionIndex + 1} of {questions.length}
                </p>
                {currentQuestionIndex === questions.length - 1 ? (
                    <Button
                        type="primary"
                        onClick={handleSubmit}
                        disabled={progressPercentage !== 100}
                    >
                        Submit
                    </Button>
                ) : (
                    <Button
                        type="primary"
                        onClick={handleNext}
                        disabled={!isAllAnswersFilled}
                        className='bg-[#00b0f2] hover:bg-[#00b0f2]/70'
                    >
                        Next Question
                        <IoIosArrowForward />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default AnswerQuestions;
