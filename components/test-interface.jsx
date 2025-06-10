'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function TestInterface({ questions }) {
    const [activeBlock, setActiveBlock] = useState(null);
    const [activeSubject, setActiveSubject] = useState(null);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(14400); // 4 hours in seconds
    const [isFinished, setIsFinished] = useState(false);
    const [user, setUser] = useState(null);
    const [blockAccess, setBlockAccess] = useState({ block1: false, block2: false });
    const [showCodeModal, setShowCodeModal] = useState(false);
    const [codeInput, setCodeInput] = useState('');
    const [requestedBlock, setRequestedBlock] = useState(null);
    const [savedAnswers, setSavedAnswers] = useState(new Set());
    const router = useRouter();

    // Block structure
    const blocks = {
        1: ['Українська мова', 'Математика'],
        2: ['Історія України', 'Англійська мова']
    };

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

    const handleCorrespondenceAnswer = (questionId, leftIndex, rightIndex) => {
        setAnswers(prev => ({
            ...prev,
            [`${questionId}_${leftIndex}`]: rightIndex
        }));
    };

    const saveAnswer = (questionId) => {
        setSavedAnswers(prev => new Set([...prev, questionId]));
        // Visual feedback
        setTimeout(() => {
            setSavedAnswers(prev => {
                const newSet = new Set(prev);
                newSet.delete(questionId);
                return newSet;
            });
        }, 2000);
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
            setActiveBlock(requestedBlock);
            setActiveSubject(blocks[requestedBlock][0]);
            setShowCodeModal(false);
            setCodeInput('');
            setRequestedBlock(null);
        } else {
            alert('Невірний код доступу!');
        }
    };

    const calculateResults = () => {
        const results = {};
        
        Object.keys(questions).forEach(subject => {
            const subjectQuestions = questions[subject];
            let correct = 0;
            let total = subjectQuestions.length;
            
            subjectQuestions.forEach(question => {
                if (question.type === 'correspondence') {
                    // For correspondence questions, check all pairs
                    let allCorrect = true;
                    question.leftItems.forEach((_, leftIndex) => {
                        const userAnswer = answers[`${question.id}_${leftIndex}`];
                        const correctAnswer = question.correctPairs[leftIndex];
                        if (userAnswer !== correctAnswer) {
                            allCorrect = false;
                        }
                    });
                    if (allCorrect) correct++;
                } else {
                    // Regular multiple choice
                    if (answers[question.id] === question.correct) {
                        correct++;
                    }
                }
            });
            
            results[subject] = {
                correct,
                total,
                percentage: Math.round((correct / total) * 100)
            };
        });
        
        return results;
    };

    if (isFinished) {
        const results = calculateResults();
        const totalCorrect = Object.values(results).reduce((sum, r) => sum + r.correct, 0);
        const totalQuestions = Object.values(results).reduce((sum, r) => sum + r.total, 0);
        const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                        Ви успішно завершили роботу над тестом.
                    </h1>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold text-red-800 mb-2">
                                    Кількість правильних відповідей
                                </h2>
                                <div className="text-sm text-red-700">
                                    Загальний бал: {totalCorrect} з {totalQuestions}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-red-700">Тестовий бал</div>
                                <div className="text-3xl font-bold text-green-600 bg-green-100 px-4 py-2 rounded">
                                    {overallPercentage}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Назва предмета</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Кількість правильних відповідей</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Тестовий бал</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(results).map(([subject, result]) => (
                                    <tr key={subject}>
                                        <td className="border border-gray-300 px-4 py-2">{subject}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            {result.correct} з {result.total}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                                                {result.percentage}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            onClick={() => router.push('/')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
                        >
                            Повернутися на головну
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const getSubjectProgress = (subject) => {
        const subjectQuestions = questions[subject];
        let answered = 0;
        
        subjectQuestions.forEach(question => {
            if (question.type === 'correspondence') {
                // Check if all correspondence pairs are answered
                let allAnswered = true;
                question.leftItems.forEach((_, leftIndex) => {
                    if (answers[`${question.id}_${leftIndex}`] === undefined) {
                        allAnswered = false;
                    }
                });
                if (allAnswered) answered++;
            } else {
                if (answers[question.id] !== undefined) answered++;
            }
        });
        
        return `${answered}/${subjectQuestions.length}`;
    };

    const currentQuestions = activeSubject ? questions[activeSubject] || [] : [];

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

            {/* Block Access */}
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
                            {blockAccess.block1 ? '✓ Блок 1 відкрито (Укр. мова, Математика)' : 'Відкрити Блок 1'}
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
                            {blockAccess.block2 ? '✓ Блок 2 відкрито (Історія, Англ. мова)' : 'Відкрити Блок 2'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Subject Tabs - only show if block is accessible */}
            {activeBlock && (
                <div className="bg-white border-b">
                    <div className="container mx-auto px-4">
                        <div className="flex space-x-0">
                            {blocks[activeBlock].map((subject) => (
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
            )}

            {/* Questions */}
            <div className="container mx-auto px-4 py-6">
                {!activeBlock ? (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                            Оберіть блок для початку тестування
                        </h2>
                        <p className="text-gray-500">
                            Введіть код доступу до одного з блоків щоб розпочати тест
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {currentQuestions.map((question, index) => (
                            <div key={question.id} className="bg-white rounded-lg shadow-sm p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                                        Питання {index + 1}
                                    </span>
                                    {savedAnswers.has(question.id) && (
                                        <span className="text-green-600 text-sm font-medium">
                                            ✓ Збережено
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                                    {question.question}
                                </h3>

                                {question.type === 'correspondence' ? (
                                    <div>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Встановіть відповідність між елементами лівого та правого стовпців:
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-medium mb-3 text-gray-700">Ліва частина:</h4>
                                                <div className="space-y-2">
                                                    {question.leftItems.map((item, leftIndex) => (
                                                        <div key={leftIndex} className="flex items-center space-x-3">
                                                            <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium">
                                                                {leftIndex + 1}
                                                            </span>
                                                            <span className="text-gray-800">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-3 text-gray-700">Права частина:</h4>
                                                <div className="space-y-2">
                                                    {question.rightItems.map((item, rightIndex) => (
                                                        <div key={rightIndex} className="flex items-center space-x-3">
                                                            <span className="w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium">
                                                                {String.fromCharCode(65 + rightIndex)}
                                                            </span>
                                                            <span className="text-gray-800">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <h4 className="font-medium mb-3 text-gray-700">Ваші відповіді:</h4>
                                            <div className="space-y-3">
                                                {question.leftItems.map((_, leftIndex) => (
                                                    <div key={leftIndex} className="flex items-center space-x-3">
                                                        <span className="w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium">
                                                            {leftIndex + 1}
                                                        </span>
                                                        <span className="text-gray-600">→</span>
                                                        <select
                                                            value={answers[`${question.id}_${leftIndex}`] || ''}
                                                            onChange={(e) => handleCorrespondenceAnswer(question.id, leftIndex, parseInt(e.target.value))}
                                                            className="border border-gray-300 rounded px-3 py-1 text-sm"
                                                        >
                                                            <option value="">Оберіть відповідь</option>
                                                            {question.rightItems.map((_, rightIndex) => (
                                                                <option key={rightIndex} value={rightIndex}>
                                                                    {String.fromCharCode(65 + rightIndex)}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
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
                                )}

                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={() => saveAnswer(question.id)}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors"
                                    >
                                        Зберегти відповідь
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Code Modal */}
            {showCodeModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h3 className="text-lg font-semibold mb-4">
                            Введіть код доступу до блоку {requestedBlock}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            {requestedBlock === 1 ? 'Блок 1: Українська мова та Математика' : 'Блок 2: Історія України та Англійська мова'}
                        </p>
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