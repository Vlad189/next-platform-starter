'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function TestInterface({ questions }) {
    const [activeSubject, setActiveSubject] = useState('Українська мова');
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(14400); // 4 hours in seconds
    const [isFinished, setIsFinished] = useState(false);
    const [user, setUser] = useState(null);
    const [blockAccess, setBlockAccess] = useState({ block1: false, block2: false });
    const [showCodeModal, setShowCodeModal] = useState(false);
    const [codeInput, setCodeInput] = useState('');
    const [requestedBlock, setRequestedBlock] = useState(null);
    const router = useRouter();

    const subjects = Object.keys(questions);

    useEffect(() => {
        const userData = localStorage.getItem('nmt_user');
        if (!userData) {
            router.push('/');
            return;
        }
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);

        // Load saved answers
        const savedAnswers = localStorage.getItem('nmt_answers');
        if (savedAnswers) {
            setAnswers(JSON.parse(savedAnswers));
        }

        // Load saved time
        const savedTime = localStorage.getItem('nmt_time_left');
        if (savedTime) {
            setTimeLeft(parseInt(savedTime));
        }

        // Timer
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = prev - 1;
                localStorage.setItem('nmt_time_left', newTime.toString());
                if (newTime <= 0) {
                    setIsFinished(true);
                    return 0;
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    // Save answers to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('nmt_answers', JSON.stringify(answers));
    }, [answers]);

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
        localStorage.removeItem('nmt_answers');
        localStorage.removeItem('nmt_time_left');
    };

    const requestBlockAccess = (blockNumber) => {
        setRequestedBlock(blockNumber);
        setShowCodeModal(true);
        setCodeInput('');
    };

    const verifyCode = () => {
        if (!user || !requestedBlock) return;

        const correctCode = user.accessCodes[`block${requestedBlock}`];
        if (codeInput.toUpperCase() === correctCode) {
            setBlockAccess(prev => ({
                ...prev,
                [`block${requestedBlock}`]: true
            }));
            setShowCodeModal(false);
            setCodeInput('');
            setRequestedBlock(null);
        } else {
            alert('Невірний код доступу!');
        }
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

    const getSubjectProgress = (subject) => {
        const subjectQuestions = questions[subject];
        const answered = subjectQuestions.filter(q => answers[q.id] !== undefined).length;
        return `${answered}/${subjectQuestions.length}`;
    };

    const canAccessQuestion = (question) => {
        if (question.block === 1) return blockAccess.block1;
        if (question.block === 2) return blockAccess.block2;
        return true;
    };

    if (isFinished) {
        const score = calculateScore();
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                        Тест НМТ завершено!
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
                            <h1 className="text-xl font-bold text-red-600">НМТ</h1>
                            <span className="text-sm text-gray-600">
                                Національний мультипредметний тест
                            </span>
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
                                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                                    {getSubjectProgress(subject)}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Block Access Buttons */}
            <div className="bg-yellow-50 border-b border-yellow-200">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-center space-x-4">
                        <span className="text-sm font-medium text-yellow-800">Доступ до блоків:</span>
                        <button
                            onClick={() => requestBlockAccess(1)}
                            disabled={blockAccess.block1}
                            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                                blockAccess.block1
                                    ? 'bg-green-100 text-green-800 cursor-default'
                                    : 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300'
                            }`}
                        >
                            {blockAccess.block1 ? '✓ Блок 1 відкрито' : 'Відкрити Блок 1'}
                        </button>
                        <button
                            onClick={() => requestBlockAccess(2)}
                            disabled={blockAccess.block2}
                            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                                blockAccess.block2
                                    ? 'bg-green-100 text-green-800 cursor-default'
                                    : 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300'
                            }`}
                        >
                            {blockAccess.block2 ? '✓ Блок 2 відкрито' : 'Відкрити Блок 2'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Questions */}
            <div className="container mx-auto px-4 py-6">
                <div className="space-y-6">
                    {currentQuestions.map((question, index) => (
                        <div key={question.id} className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                                        Питання {index + 1}
                                    </span>
                                    <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
                                        Блок {question.block}
                                    </span>
                                </div>
                                {!canAccessQuestion(question) && (
                                    <span className="text-red-600 text-sm font-medium">
                                        🔒 Потрібен код доступу
                                    </span>
                                )}
                            </div>

                            <h3 className="text-lg font-semibold mb-4 text-gray-800">
                                {question.question}
                            </h3>

                            {canAccessQuestion(question) ? (
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
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>Для доступу до цього питання потрібно ввести код блоку {question.block}</p>
                                    <button
                                        onClick={() => requestBlockAccess(question.block)}
                                        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                                    >
                                        Ввести код
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Code Modal */}
            {showCodeModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h3 className="text-lg font-semibold mb-4">
                            Введіть код доступу до блоку {requestedBlock}
                        </h3>
                        <input
                            type="text"
                            value={codeInput}
                            onChange={(e) => setCodeInput(e.target.value)}
                            placeholder="Введіть код"
                            className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                        />
                        <div className="flex space-x-3">
                            <button
                                onClick={verifyCode}
                                className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Підтвердити
                            </button>
                            <button
                                onClick={() => setShowCodeModal(false)}
                                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition-colors"
                            >
                                Скасувати
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}