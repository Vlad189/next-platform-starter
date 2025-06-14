'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function LoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate authentication
        setTimeout(() => {
            if (login && password) {
                localStorage.setItem('nmt_user', JSON.stringify({ 
                    login, 
                    timestamp: Date.now(),
                    accessCodes: {
                        block1: Math.random().toString(36).substring(2, 8).toUpperCase(),
                        block2: Math.random().toString(36).substring(2, 8).toUpperCase()
                    }
                }));
                router.push('/entrance');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-300">
            <h2 className="text-xl font-semibold text-purple-700 mb-6">Увійти</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="login" className="block text-sm font-medium text-gray-700 mb-1">
                        Логін
                    </label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="D1792"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Уведіть логін, отриманий для входу до системи
                    </p>
                </div>
                
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Пароль
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="ed092"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                        required
                    />
                </div>
                
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Увійти...' : 'Увійти'}
                </button>
            </form>
        </div>
    );
}