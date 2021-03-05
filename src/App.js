import React, { useState, useEffect } from 'react';
import HomeCard from './components/HomeCard';
import Questions from './components/Questions';
import Banner from './components/Banner';

const App = () => {
  const [pageNum, setPageNum] = useState("home");
  const questionAnswers = [
    {category: "History",
    questions: [
      {question: "What year was Xero founded?",
      answer: "2006",
      type: "number"},
      {question: "Who co-founded Xero with Rod Drury?",
      answer: "Hamish Edwards",
      type: "text"},
      {question: "What was Xero originally called?",
      answer: "Accounting 2.0",
      type: "text"},
    ]},
    {category: "Geography",
    questions: [
      {question: "How many Xero offices are there currently South of the Equator?",
      answer: "9",
      type: "number"},
      {question: "What is the nickname of the spirited Denver landmark depicted on the 2020 Xero t-shirt?",
      answer: "Blucifer",
      type: "text"},
      {question: "Which Xero office is further North?",
      answer: "Sydney",
      type: "mc",
      choices: ["Auckland", "Capetown", "Sydney"]},
    ]},
    {category: "English",
    questions: [
      {question: "How many passives are there in this sentence: ‘Dates can be entered in any format, but how they’re displayed on the document is determined by the region set’?",
      answer: "4",
      type: "number"},
      {question: "Which of these has been incorrectly capitalised?",
      answer: "Xero Adviser Directory",
      type: "mc",
      choices: ["Xero Projects", "Xero Starter plan", "Xero Adviser Directory"]},
      {question: "In the following sentence, should you hyphenate or not ‘Cloud integrators offer partner solutions that are more [in depth/in-depth] than Cloud sellers’?",
      answer: "No",
      type: "mc",
      choices: ["Yes", "No"]},
    ]},
    {category: "Maths",
    questions: [
      {question: "You purchase a standard UK subscription with Projects and Expenses. Two people will be using Xero in your business. How much do you pay per month (in pounds)?",
      answer: "39",
      type: "number"},
      {question: "At the start of the month, you have 24,069 in the bank account. You spend 2,844 on bills and make cash sales to the value of 7,215. How much money do you have now?",
      answer: "28440",
      type: "number"},
      {question: "On 17 Dec 2020 the Xero share price peaked at 154 AUD, but fell to 118.58 AUD on 3 Mar 2021. Calculate the difference in price as a percentage.",
      answer: "23",
      type: "percentage"},
    ]},
    {category: "Technology",
    questions: [
      {question: "What colourful display in Adobe Audition lets you easily identify mouth noises and clicks?",
      answer: "Spectral frequency",
      type: "text"},
      {question: "What tool do you activate in Photoshop when you press the spacebar?",
      answer: "Hand tool",
      type: "text"},
      {question: "What tool in Snagit lets you remove a horizontal section out of an image, automatically joining top and bottom together?",
      answer: "Cut Out",
      type: "text"},
    ]},
    {category: "Design",
    questions: [
      {question: "What’s the Hex code for Xero blue?",
      answer: "13B5EA",
      type: "hex"},
      {question: "What’s the official Xero font for internal use?",
      answer: "Source Sans Pro",
      type: "text"},
      {question: "Who is sitting in the orange bean bag in the Evolve banner image GBL_EDU_IMG_0096?",
      answer: "Sandeep",
      type: "text"},
    ]},
  ];

  useEffect(() => {
    if (pageNum > 5) {
      console.log('setting home')
      setPageNum("home");
    }
  }, [pageNum])

  var categories = [];
  for (let index in questionAnswers) {
    categories.push(questionAnswers[index].category);
  }
  console.log("PAGE CHANGE")

  return (
    <div className="flex flex-col h-screen">
      {pageNum !== "home" ? <Banner categories={categories} pageNum={pageNum} /> : null}
      <div className="bg-gray-200 h-full w-full flex justify-center">
        {pageNum === "home" ? <HomeCard setPageNum={setPageNum}/> : null}
        {pageNum >= 0 && pageNum < 6 ? <Questions questionAnswers={questionAnswers[pageNum].questions} pageNum={pageNum} setPageNum={setPageNum}/> : null}
      </div>
    </div>
  )
}

export default App
