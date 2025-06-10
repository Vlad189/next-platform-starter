import { TestInterface } from 'components/test-interface';

export const metadata = {
    title: 'Демо тест - НМТ'
};

const demoQuestions = [
    {
        id: 1,
        subject: 'Українська мова',
        question: 'Оберіть правильний варіант написання слова:',
        options: [
            'не залежно',
            'незалежно',
            'не-залежно',
            'незалежьно'
        ],
        correct: 1
    },
    {
        id: 2,
        subject: 'Математика',
        question: 'Розв\'яжіть рівняння: 2x + 5 = 13',
        options: [
            'x = 3',
            'x = 4',
            'x = 5',
            'x = 6'
        ],
        correct: 1
    },
    {
        id: 3,
        subject: 'Історія України',
        question: 'У якому році була прийнята Конституція України?',
        options: [
            '1991',
            '1996',
            '2004',
            '2014'
        ],
        correct: 1
    }
];

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <TestInterface questions={demoQuestions} isDemo={true} />
        </div>
    );
}