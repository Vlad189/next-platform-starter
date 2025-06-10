import { TestInterface } from 'components/test-interface';

export const metadata = {
    title: 'НМТ Тест'
};

const questions = {
    'Українська мова': [
        {
            id: 'ukr_1',
            question: 'Оберіть правильний варіант написання слова:',
            options: ['не залежно', 'незалежно', 'не-залежно', 'незалежьно'],
            correct: 1,
            block: 1
        },
        {
            id: 'ukr_2',
            question: 'Яке з поданих речень є складнопідрядним?',
            options: [
                'Сонце світить, і птахи співають.',
                'Коли прийде весна, розквітнуть квіти.',
                'Дощ припинився, але хмари залишились.',
                'Вітер дме сильно.'
            ],
            correct: 1,
            block: 1
        },
        {
            id: 'ukr_3',
            question: 'Визначте стиль мовлення тексту: "Шановні колеги! Запрошуємо Вас на конференцію..."',
            options: ['Розмовний', 'Художній', 'Офіційно-діловий', 'Публіцистичний'],
            correct: 2,
            block: 2
        },
        {
            id: 'ukr_4',
            question: 'У якому рядку всі слова написані правильно?',
            options: [
                'не-хай, ні-де, ні-коли',
                'нехай, ніде, ніколи',
                'не хай, ні де, ні коли',
                'нехай, ні-де, ні-коли'
            ],
            correct: 1,
            block: 2
        }
    ],
    'Математика': [
        {
            id: 'math_1',
            question: 'Розв\'яжіть рівняння: 2x + 5 = 13',
            options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
            correct: 1,
            block: 1
        },
        {
            id: 'math_2',
            question: 'Знайдіть значення виразу: √(25 + 144)',
            options: ['13', '15', '17', '19'],
            correct: 0,
            block: 1
        },
        {
            id: 'math_3',
            question: 'Обчисліть: log₂(8)',
            options: ['2', '3', '4', '8'],
            correct: 1,
            block: 2
        },
        {
            id: 'math_4',
            question: 'Знайдіть похідну функції f(x) = x³ + 2x',
            options: ['3x² + 2', '3x² + 2x', 'x² + 2', '3x + 2'],
            correct: 0,
            block: 2
        }
    ],
    'Історія України': [
        {
            id: 'hist_1',
            question: 'У якому році була прийнята Конституція України?',
            options: ['1991', '1996', '2004', '2014'],
            correct: 1,
            block: 1
        },
        {
            id: 'hist_2',
            question: 'Хто був першим президентом незалежної України?',
            options: ['Леонід Кравчук', 'Леонід Кучма', 'Віктор Ющенко', 'Віктор Янукович'],
            correct: 0,
            block: 1
        },
        {
            id: 'hist_3',
            question: 'Коли відбулася Помаранчева революція?',
            options: ['2004', '2013', '2014', '2019'],
            correct: 0,
            block: 2
        },
        {
            id: 'hist_4',
            question: 'Хто з гетьманів підписав Переяславську угоду?',
            options: ['Іван Мазепа', 'Богдан Хмельницький', 'Петро Сагайдачний', 'Іван Виговський'],
            correct: 1,
            block: 2
        }
    ],
    'Англійська мова': [
        {
            id: 'eng_1',
            question: 'Choose the correct form: "I ___ to London last year."',
            options: ['go', 'went', 'have gone', 'going'],
            correct: 1,
            block: 1
        },
        {
            id: 'eng_2',
            question: 'What is the plural of "child"?',
            options: ['childs', 'children', 'childes', 'child'],
            correct: 1,
            block: 1
        },
        {
            id: 'eng_3',
            question: 'Choose the correct sentence:',
            options: [
                'She don\'t like coffee.',
                'She doesn\'t likes coffee.',
                'She doesn\'t like coffee.',
                'She not like coffee.'
            ],
            correct: 2,
            block: 2
        },
        {
            id: 'eng_4',
            question: 'Complete: "If I ___ rich, I would travel the world."',
            options: ['am', 'was', 'were', 'be'],
            correct: 2,
            block: 2
        }
    ]
};

export default function TestPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <TestInterface questions={questions} />
        </div>
    );
}