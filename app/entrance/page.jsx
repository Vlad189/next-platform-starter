'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EntrancePage() {
    const [user, setUser] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const router = useRouter();

    useEffect(() => {
        const userData = localStorage.getItem('nmt_user');
        if (!userData) {
            router.push('/');
            return;
        }
        setUser(JSON.parse(userData));

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    const startTest = () => {
        router.push('/test');
    };

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="bg-red-500 text-white p-6 flex items-center">
                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-6">
                                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm2 2h4v2H8V4zm0 4h4v2H8V8zm0 4h4v2H8v-2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h1 className="text-2xl font-bold">НМТ, {currentTime.toLocaleDateString('uk-UA')}, ЧАС ПОЧАТКУ: {currentTime.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' })}</h1>
                                <p className="text-red-100 mt-1">Вступні випробування</p>
                            </div>
                            <button
                                onClick={startTest}
                                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded font-semibold transition-colors"
                            >
                                ПЕРЕЙТИ ДО ТЕСТУ
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Інформація про тест</h2>
                                    <div className="space-y-3 text-gray-600">
                                        <p><strong>Учасник:</strong> {user.login}</p>
                                        <p><strong>Тривалість тесту:</strong> 4 години</p>
                                        <p><strong>Кількість предметів:</strong> 4</p>
                                        <p><strong>Статус:</strong> Готовий до початку</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Коди доступу до блоків</h2>
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="font-medium">Блок 1:</span>
                                                <span className="font-mono text-lg text-blue-600">{user.accessCodes?.block1}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="font-medium">Блок 2:</span>
                                                <span className="font-mono text-lg text-blue-600">{user.accessCodes?.block2}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-yellow-700 mt-3">
                                            Збережіть ці коди! Вони знадобляться для доступу до відповідних блоків питань.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                                <h3 className="font-semibold text-blue-800 mb-2">Важливі інструкції:</h3>
                                <ul className="text-blue-700 space-y-1 text-sm">
                                    <li>• Тест складається з 4 предметів: Українська мова, Математика, Історія України, Англійська мова</li>
                                    <li>• Загальний час виконання - 4 години</li>
                                    <li>• Ви можете переходити між предметами в будь-який час</li>
                                    <li>• Відповіді зберігаються автоматично</li>
                                    <li>• Після завершення часу тест буде автоматично завершено</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}