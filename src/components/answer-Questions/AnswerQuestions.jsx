"use client";
import React, { use, useEffect, useState } from "react";
import { Button, Input, Progress, Spin } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useGenarateWhyMutation } from "@/app/provider/redux/services/whyApis";
import { toast } from "sonner";

const questions = [
  {
    id: 1,
    title: "What am I passionate about?",
    subQuestions: [
      "What activities make me feel alive or energized?",
      "When do I lose track of time because I’m so engrossed in what I’m doing?",
      "What topics or issues do I feel compelled to learn more about?",
    ],
  },
  {
    id: 2,
    title: "What do I value most in life?",
    subQuestions: [
      "What principles or beliefs do I hold most dear?",
      "What would I fight for or stand up for, no matter the consequences?",
      "Which qualities in others do I admire the most?",
    ],
  },
  {
    id: 3,
    title: "What do I want my legacy to be?",
    subQuestions: [
      "How do I want to be remembered by others?",
      "What kind of impact do I want to leave on my community or the world?",
      "If I could accomplish just one thing in my life, what would it be?",
    ],
  },
  {
    id: 4,
    title: "What makes me feel fulfilled or content?",
    subQuestions: [
      "What experiences or achievements have made me feel truly proud?",
      "What gives me a sense of purpose or deep satisfaction?",
      "How do I define personal success?",
    ],
  },
  {
    id: 5,
    title: "What strengths do I possess?",
    subQuestions: [
      "What talents or skills come naturally to me?",
      "How do my unique abilities contribute to the world around me?",
      "What do others often ask for my help with?",
    ],
  },
  {
    id: 6,
    title: "What struggles or challenges have shaped me?",
    subQuestions: [
      "How have past hardships or difficult experiences shaped my perspective on life?",
      "What have I learned from overcoming adversity?",
      "How do I want to use my struggles to help others?",
    ],
  },
  {
    id: 7,
    title: "What kind of relationships do I want to cultivate?",
    subQuestions: [
      "What types of people do I want in my life?",
      "How do I want to show up for others, and how do I want them to show up for me?",
      "What role do I want to play in my family, friendships, and community?",
    ],
  },
  {
    id: 8,
    title: "How do I want to feel on a daily basis?",
    subQuestions: [
      "What emotions or states of being do I want to experience regularly?",
      "How do I want to feel when I wake up in the morning and when I go to bed at night?",
      "What does a sense of balance, peace, or joy look like for me?",
    ],
  },
  {
    id: 9,
    title: "What impact do I want to make on others?",
    subQuestions: [
      "How do I want to make people feel when they interact with me?",
      "What role do I want to play in helping others grow, learn, or heal?",
      "In what way do I want to contribute to the well-being of others?",
    ],
  },
  {
    id: 10,
    title: "What would I do if money, time, and fear were no object?",
    subQuestions: [
      "If there were no limitations, how would I spend my time?",
      "What kind of work or creative projects would I pursue if I wasn’t worried about making a living?",
      "What risks would I take if I knew I couldn’t fail?",
    ],
  },
  {
    id: 11,
    title: "What does true happiness look like for me?",
    subQuestions: [
      "What does a truly fulfilling life look like for me?",
      "What needs to change in my life to make me feel more aligned with my values and passions?",
      "How do I define happiness in a way that’s meaningful to me?",
    ],
  },
  {
    id: 12,
    title: "What is my greatest fear, and how does it relate to my purpose?",
    subQuestions: [
      "What am I most afraid of, and how does that fear shape my decisions and actions?",
      "Does my fear stem from a desire to protect myself, or is it a call to grow beyond my comfort zone?",
      "What would happen if I faced this fear head-on?",
    ],
  },
  {
    id: 13,
    title: "What makes me feel most connected to the world?",
    subQuestions: [
      "When do I feel most at peace with myself and the world around me?",
      "What experiences make me feel like I’m part of something bigger than myself?",
      "How do I connect with nature, other people, or my spiritual beliefs?",
    ],
  },
  {
    id: 14,
    title: "What do I want to learn or experience in my lifetime?",
    subQuestions: [
      "What experiences or places are on my bucket list?",
      "What knowledge or skills do I want to acquire before I die?",
      "How can these desires shape my broader purpose?",
    ],
  },
  {
    id: 15,
    title: "What would I regret not pursuing?",
    subQuestions: [
      "What would I deeply regret never trying or achieving in my life?",
      "What dreams or aspirations have I put aside, and why?",
      "If I only had a limited amount of time left, what would I make sure to do?",
    ],
  },
  {
    id: 16,
    title: "What does personal growth mean to me?",
    subQuestions: [
      "How do I define growth, and what does it look like in my life?",
      "What areas of my life do I want to improve or evolve?",
      "What lessons have I learned, and how do I want to continue learning?",
    ],
  },
  {
    id: 17,
    title: "Who are my role models, and why?",
    subQuestions: [
      "Who do I admire and look up to, and what qualities do they embody?",
      "What aspects of their life or journey resonate with my own aspirations?",
      "How can I emulate the best traits of those I admire in my own life?",
    ],
  },
  {
    id: 18,
    title: "What would I do if I had to start over from scratch?",
    subQuestions: [
      "If I lost everything today, what would I pursue next?",
      "What parts of my current life would I rebuild, and what would I leave behind?",
      "How would I go about creating a life that feels meaningful and true to me?",
    ],
  },
];

const cardData = [
  {
    icon: "/Icon/answer1.png",
    title: `Copmleate The WHY's`,
    subTitle:
      "Be yourself and answer honestly to find out your personality type.",
    styling: "from-[#17b4ec] to-[#fff]",
  },
  {
    icon: "/Icon/answer2.png",
    title: `View The Detail Result`,
    subTitle:
      "Learn how your personality type influences many areas of your life.",
    styling: "from-[#2397f3] to-[#ced7f6]",
  },
  {
    icon: "/Icon/answer3.png",
    title: `Unlock Your Potential`,
    subTitle:
      "Grow into the person you want to be with your optional Premium Suite.",
    styling: "from-[#2397f3] to-[#ced7f6]",
  },
];

const AnswerQuestions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const currentQuestion = questions[currentQuestionIndex];
  const [genarateWhy, { isLoading: isGenerateWhyLoading }] =
    useGenarateWhyMutation();
  const router = useRouter();
  const handleInputChange = (value, questionId, subQuestionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [subQuestionIndex]: value,
      },
    }));
  };
  useEffect(() => {
    console.log(answers);
    if (Object.keys(answers).length > 0) {
      localStorage.setItem("answers", JSON.stringify(answers));
    }
  }, [answers]);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedAnswers = localStorage.getItem("answers");

    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }
  }, [typeof window]);
  const totalSubQuestions = questions.reduce(
    (sum, question) => sum + question.subQuestions.length,
    0
  );
  const answeredSubQuestions = Object.values(answers).reduce(
    (sum, questionAnswers) =>
      sum +
      Object.values(questionAnswers || {}).filter(
        (answer) => answer.trim() !== ""
      ).length,
    0
  );
  const progressPercentage = parseFloat(
    ((answeredSubQuestions / totalSubQuestions) * 100).toFixed(2)
  );
  const requiredProgressPercentage = parseFloat(
    (((currentQuestionIndex + 1) / questions.length) * 100).toFixed(2)
  );
  const handleNext = () => {
    if (
      progressPercentage >= requiredProgressPercentage &&
      currentQuestionIndex < questions.length - 1
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    const formattedAnswers = questions.flatMap((question) => {
      const questionAnswers = answers[question.id] || {};
      return question.subQuestions.map((subQuestion, subQuestionIndex) => ({
        question: subQuestion,
        answer: questionAnswers[subQuestionIndex] || "",
      }));
    });

    const result = {
      questionAnswer: formattedAnswers,
    };
    const response = await genarateWhy(result).unwrap();
    const responseId = response?.data?._id;
    if (response?.success) {
      toast.success("Your why has been generated.");
      router.push(`/find-why/answer-Questions/resultOfWhy?id=${responseId}`);
    } else {
      toast.error(response?.message || "Failed to generate Why.");
    }

    return result;
  };

  // const handleSubmit = () => {
  //   const formattedAnswers = questions.flatMap((question) => {
  //     const questionAnswers = answers[question.id] || {};
  //     return question.subQuestions.map((subQuestion, subQuestionIndex) => ({
  //       question: subQuestion,
  //       answer: questionAnswers[subQuestionIndex] || "",
  //     }));
  //   });

  //   const result = {
  //     questionAnswer: formattedAnswers,
  //   };

  //   genarateWhy({ result })
  //     .unwrap()
  //     .then((data) => {
  //       if (data?.success) {
  //         router.push("/result");
  //       }
  //     });

  //   console.log(result);
  //   return result;
  // };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4 py-8">
      <div className="-mt-28 md:-mt-48 container mx-auto">
        <div className="flex items-center md:flex-row flex-col rounded-md gap-6 justify-between">
          {cardData.map((card, idx) => (
            <div
              className={`flex flex-col p-12 rounded-md bg-gradient-to-bl  ${card.styling} text-center z-[888]  items-center justify-center`}
              key={idx}
            >
              <img className="w-24" src={card.icon} alt={`icon${idx + 1}`} />
              <h1>{card?.title}</h1>
              <p>{card?.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
      <Progress
        percent={progressPercentage}
        status="active"
        strokeColor="#00b0f2"
        className="my-6 w-full mt-16 max-w-3xl"
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
              value={answers[currentQuestion.id]?.[index] || ""}
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
          <div className="flex flex-col">
            <Button
              type="primary"
              onClick={handleSubmit}
              disabled={progressPercentage !== 100}
            >
              {isGenerateWhyLoading ? "Generating..." : "Submit"}
            </Button>
          </div>
        ) : (
          <Button
            type="primary"
            onClick={handleNext}
            disabled={progressPercentage < requiredProgressPercentage}
            className="bg-[#00b0f2] hover:bg-[#00b0f2]/70"
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
