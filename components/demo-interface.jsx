'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function TestInterface({ questions, isDemo = false }) {
    const [activeSubject, setActiveSubject] = useState(Object.keys(questions)[0]);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes for demo
    const [isFinished, setIsFinished] = useState(false);
    const router = useRouter();

    const subjects = Object.keys(questions);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsFinished(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleAnswerSelect = (questionId, answerIndex) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answerIndex
        }));
    };

    const handleFinishTest = () => {
        setIsFinished(true);
    };

    const calculateScore = () => {
        let correct = 0;
        let total = 0;
        
        Object.values(questions).flat().forEach(question => {
            total++;
            if (answers[question.id] === question.correct) {
                correct++;
            }
        });
        
        return { correct, total, percentage: Math.round((correct / total) * 100) };
    };

    if (isFinished) {
        const score = calculateScore();
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                        Демо тест завершено!
                    </h1>
                    <div className="text-center space-y-4">
                        <div className="text-6xl font-bold text-blue-600">
                            {score.percentage}%
                        </div>
                        <p className="text-lg text-gray-600">
                            Правильних відповідей: {score.correct} з {score.total}
                        </p>
                        <div className="mt-8">
                            <button
                                onClick={() => router.push('/')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
                            >
                                Повернутися на головну
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestions = questions[activeSubject] || [];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-xl font-bold text-red-600">НМТ Демо</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-lg font-mono text-red-600 bg-red-50 px-3 py-1 rounded">
                                {formatTime(timeLeft)}
                            </div>
                            <button
                                onClick={handleFinishTest}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors"
                            >
                                Завершити тест
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subject Tabs */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex space-x-0">
                        {subjects.map((subject) => (
                            <button
                                key={subject}
                                onClick={() => setActiveSubject(subject)}
                                className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
                                    activeSubject === subject
                                        ? 'border-blue-500 text-blue-600 bg-blue-50'
                                        : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                                }`}
                            >
                                {subject}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Questions */}
            <div className="container mx-auto px-4 py-6">
                <div className="space-y-6">
                    {currentQuestions.map((question, index) => (
                        <div key={question.id} className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center mb-4">
                                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                                    Питання {index + 1}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold mb-4 text-gray-800">
                                {question.question}
                            </h3>

                            <div className="space-y-3">
                                {question.options.map((option, optionIndex) => (
                                    <label
                                        key={optionIndex}
                                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                                            answers[question.id] === optionIndex
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${question.id}`}
                                            value={optionIndex}
                                            checked={answers[question.id] === optionIndex}
                                            onChange={() => handleAnswerSelect(question.id, optionIndex)}
                                            className="mr-3 text-blue-600"
                                        />
                                        <span className="text-gray-800">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}