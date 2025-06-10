import { TestInterface } from 'components/demo-interface';

export const metadata = {
    title: 'Демо тест - НМТ'
};

const demoQuestions = {
    'Українська мова': [
        {
            id: 'demo_ukr_1',
            question: 'Оберіть правильний варіант написання слова:',
            options: ['не залежно', 'незалежно', 'не-залежно', 'незалежьно'],
            correct: 1
        }
    ],
    'Математика': [
        {
            id: 'demo_math_1',
            question: 'Розв\'яжіть рівняння: 2x + 5 = 13',
            options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
            correct: 1
        }
    ]
};

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <TestInterface questions={demoQuestions} isDemo={true} />
        </div>
    );
}