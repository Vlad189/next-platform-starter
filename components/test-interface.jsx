'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function TestInterface({ questions, isDemo = false }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(isDemo ? 300 : 7200); // 5 min for demo, 2 hours for full test
    const [isFinished, setIsFinished] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!isDemo) {
            const user = localStorage.getItem('nmt_user');
            if (!user) {
                router.push('/');
                return;
            }
        }

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
    }, [isDemo, router]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
        questions.forEach(question => {
            if (answers[question.id] === question.correct) {
                correct++;
            }
        });
        return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
    };

    if (isFinished) {
        const score = calculateScore();
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                        Тест завершено!
                    </h1>
                    <div className="text-center space-y-4">
                        <div className="text-6xl font-bold text-purple-600">
                            {score.percentage}%
                        </div>
                        <p className="text-lg text-gray-600">
                            Правильних відповідей: {score.correct} з {score.total}
                        </p>
                        <div className="mt-8">
                            <button
                                onClick={() => router.push('/')}
                                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-colors"
                            >
                                Повернутися на головну
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div className="container mx-auto px-4 py-4">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl font-bold text-purple-800">НМТ {isDemo ? 'Демо' : ''}</h1>
                        <span className="text-sm text-gray-600">
                            Питання {currentQuestion + 1} з {questions.length}
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-lg font-mono text-red-600">
                            {formatTime(timeLeft)}
                        </div>
                        <button
                            onClick={handleFinishTest}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
                        >
                            Завершити тест
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Question Navigation */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-sm p-4">
                        <h3 className="font-semibold mb-3 text-gray-800">Навігація по питаннях</h3>
                        <div className="grid grid-cols-5 lg:grid-cols-4 gap-2">
                            {questions.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentQuestion(index)}
                                    className={`w-10 h-10 rounded text-sm font-medium transition-colors ${
                                        index === currentQuestion
                                            ? 'bg-purple-600 text-white'
                                            : answers[questions[index].id] !== undefined
                                            ? 'bg-green-100 text-green-800 border border-green-300'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Question Content */}
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="mb-4">
                            <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                                {question.subject}
                            </span>
                        </div>
                        
                        <h2 className="text-xl font-semibold mb-6 text-gray-800">
                            {question.question}
                        </h2>

                        <div className="space-y-3">
                            {question.options.map((option, index) => (
                                <label
                                    key={index}
                                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                                        answers[question.id] === index
                                            ? 'border-purple-500 bg-purple-50'
                                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value={index}
                                        checked={answers[question.id] === index}
                                        onChange={() => handleAnswerSelect(question.id, index)}
                                        className="mr-3 text-purple-600"
                                    />
                                    <span className="text-gray-800">{option}</span>
                                </label>
                            ))}
                        </div>

                        <div className="flex justify-between mt-8">
                            <button
                                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                                disabled={currentQuestion === 0}
                                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Попереднє
                            </button>
                            
                            <button
                                onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                                disabled={currentQuestion === questions.length - 1}
                                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Наступне
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}