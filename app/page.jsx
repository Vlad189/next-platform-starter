import Link from 'next/link';
import { LoginForm } from 'components/login-form';

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-md mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-purple-800 mb-2">НМТ</h1>
                        <p className="text-gray-600">Національний мультипредметний тест</p>
                    </div>
                    
                    <LoginForm />
                    
                    <div className="mt-8 text-center">
                        <Link 
                            href="/demo" 
                            className="text-purple-600 hover:text-purple-800 underline text-sm"
                        >
                            Демо версія тесту
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}