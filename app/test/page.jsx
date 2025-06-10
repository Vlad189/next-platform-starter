import { TestInterface } from 'components/test-interface';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'НМТ Тест'
};

const fullQuestions = [
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
    },
    {
        id: 4,
        subject: 'Українська мова',
        question: 'Яке з поданих речень є складнопідрядним?',
        options: [
            'Сонце світить, і птахи співають.',
            'Коли прийде весна, розквітнуть квіти.',
            'Дощ припинився, але хмари залишились.',
            'Вітер дме сильно.'
        ],
        correct: 1
    },
    {
        id: 5,
        subject: 'Математика',
        question: 'Знайдіть значення виразу: √(25 + 144)',
        options: [
            '13',
            '15',
            '17',
            '19'
        ],
        correct: 0
    },
    {
        id: 6,
        subject: 'Історія України',
        question: 'Хто був першим президентом незалежної України?',
        options: [
            'Леонід Кравчук',
            'Леонід Кучма',
            'Віктор Ющенко',
            'Віктор Янукович'
        ],
        correct: 0
    },
    {
        id: 7,
        subject: 'Біологія',
        question: 'Який орган відповідає за очищення крові в організмі людини?',
        options: [
            'Печінка',
            'Нирки',
            'Легені',
            'Серце'
        ],
        correct: 1
    },
    {
        id: 8,
        subject: 'Фізика',
        question: 'Швидкість світла у вакуумі становить приблизно:',
        options: [
            '300 000 км/с',
            '150 000 км/с',
            '450 000 км/с',
            '600 000 км/с'
        ],
        correct: 0
    }
];

export default function TestPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <TestInterface questions={fullQuestions} isDemo={false} />
        </div>
    );
}