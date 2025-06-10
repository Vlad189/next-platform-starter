import { TestInterface } from 'components/test-interface';

export const metadata = {
    title: 'НМТ Тест'
};

const questions = {
    'Українська мова': [
        // Regular questions (27)
        {
            id: 'ukr_1',
            type: 'multiple',
            question: 'Оберіть правильний варіант написання слова:',
            options: ['не залежно', 'незалежно', 'не-залежно', 'незалежьно'],
            correct: 1
        },
        {
            id: 'ukr_2',
            type: 'multiple',
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
            id: 'ukr_3',
            type: 'multiple',
            question: 'Визначте стиль мовлення тексту: "Шановні колеги! Запрошуємо Вас на конференцію..."',
            options: ['Розмовний', 'Художній', 'Офіційно-діловий', 'Публіцистичний'],
            correct: 2
        },
        {
            id: 'ukr_4',
            type: 'multiple',
            question: 'У якому рядку всі слова написані правильно?',
            options: [
                'не-хай, ні-де, ні-коли',
                'нехай, ніде, ніколи',
                'не хай, ні де, ні коли',
                'нехай, ні-де, ні-коли'
            ],
            correct: 1
        },
        {
            id: 'ukr_5',
            type: 'multiple',
            question: 'Оберіть речення з правильним порядком слів:',
            options: [
                'Книгу цікаву читав студент.',
                'Студент читав цікаву книгу.',
                'Цікаву студент книгу читав.',
                'Читав цікаву студент книгу.'
            ],
            correct: 1
        },
        {
            id: 'ukr_6',
            type: 'multiple',
            question: 'Яке слово є іменником?',
            options: ['красивий', 'швидко', 'доброта', 'бігти'],
            correct: 2
        },
        {
            id: 'ukr_7',
            type: 'multiple',
            question: 'Оберіть правильний варіант відмінювання:',
            options: ['в лісі', 'в лісу', 'в ліс', 'в лісом'],
            correct: 1
        },
        {
            id: 'ukr_8',
            type: 'multiple',
            question: 'Яке речення містить пряму мову?',
            options: [
                'Мама сказала, що обід готовий.',
                'Мама сказала: "Обід готовий".',
                'Мама повідомила про готовність обіду.',
                'Мама закликала до обіду.'
            ],
            correct: 1
        },
        {
            id: 'ukr_9',
            type: 'multiple',
            question: 'Оберіть правильний варіант написання:',
            options: ['не-можливо', 'неможливо', 'не можливо', 'не-можливо'],
            correct: 1
        },
        {
            id: 'ukr_10',
            type: 'multiple',
            question: 'Яке слово є прислівником?',
            options: ['швидкий', 'швидкість', 'швидко', 'швидкісний'],
            correct: 2
        },
        {
            id: 'ukr_11',
            type: 'multiple',
            question: 'Оберіть речення з правильною пунктуацією:',
            options: [
                'Коли прийшла весна птахи повернулися.',
                'Коли прийшла весна, птахи повернулися.',
                'Коли, прийшла весна птахи повернулися.',
                'Коли прийшла, весна птахи повернулися.'
            ],
            correct: 1
        },
        {
            id: 'ukr_12',
            type: 'multiple',
            question: 'Яке слово є дієсловом?',
            options: ['читання', 'читач', 'читати', 'читабельний'],
            correct: 2
        },
        {
            id: 'ukr_13',
            type: 'multiple',
            question: 'Оберіть правильний варіант написання числівника:',
            options: ['двадцять один', 'двадцятьодин', 'двадцять-один', 'двадцять1'],
            correct: 0
        },
        {
            id: 'ukr_14',
            type: 'multiple',
            question: 'Яке речення є безособовим?',
            options: [
                'Діти грають у дворі.',
                'Вечоріє.',
                'Мама готує обід.',
                'Собака гавкає.'
            ],
            correct: 1
        },
        {
            id: 'ukr_15',
            type: 'multiple',
            question: 'Оберіть правильний варіант написання:',
            options: ['по-українськи', 'по українськи', 'поукраїнськи', 'по-українські'],
            correct: 0
        },
        {
            id: 'ukr_16',
            type: 'multiple',
            question: 'Яке слово є прикметником?',
            options: ['краса', 'красиво', 'красивий', 'прикрашати'],
            correct: 2
        },
        {
            id: 'ukr_17',
            type: 'multiple',
            question: 'Оберіть речення з правильним узгодженням:',
            options: [
                'Нова книга лежала на столі.',
                'Новий книга лежала на столі.',
                'Нове книга лежала на столі.',
                'Нові книга лежала на столі.'
            ],
            correct: 0
        },
        {
            id: 'ukr_18',
            type: 'multiple',
            question: 'Яке слово є займенником?',
            options: ['хтось', 'хто', 'хтозна', 'всі варіанти правильні'],
            correct: 3
        },
        {
            id: 'ukr_19',
            type: 'multiple',
            question: 'Оберіть правильний варіант написання:',
            options: ['в продовж', 'впродовж', 'в-продовж', 'в продовж'],
            correct: 1
        },
        {
            id: 'ukr_20',
            type: 'multiple',
            question: 'Яке речення містить звертання?',
            options: [
                'Мамо, допоможи мені.',
                'Мама допомагає мені.',
                'Я прошу маму допомогти.',
                'Мамина допомога потрібна.'
            ],
            correct: 0
        },
        {
            id: 'ukr_21',
            type: 'multiple',
            question: 'Оберіть правильний варіант написання:',
            options: ['ніколи', 'ні коли', 'ні-коли', 'нікколи'],
            correct: 0
        },
        {
            id: 'ukr_22',
            type: 'multiple',
            question: 'Яке слово є сполучником?',
            options: ['але', 'дуже', 'завжди', 'тому'],
            correct: 0
        },
        {
            id: 'ukr_23',
            type: 'multiple',
            question: 'Оберіть речення з правильною пунктуацією:',
            options: [
                'Він сказав що прийде завтра.',
                'Він сказав, що прийде завтра.',
                'Він, сказав що прийде завтра.',
                'Він сказав що, прийде завтра.'
            ],
            correct: 1
        },
        {
            id: 'ukr_24',
            type: 'multiple',
            question: 'Яке слово є прийменником?',
            options: ['через', 'дуже', 'завжди', 'швидко'],
            correct: 0
        },
        {
            id: 'ukr_25',
            type: 'multiple',
            question: 'Оберіть правильний варіант написання:',
            options: ['по-перше', 'по перше', 'поперше', 'по-1'],
            correct: 0
        },
        {
            id: 'ukr_26',
            type: 'multiple',
            question: 'Яке речення є складносурядним?',
            options: [
                'Коли прийшла весна, розквітли квіти.',
                'Прийшла весна, і розквітли квіти.',
                'Весна прийшла з квітами.',
                'Весняні квіти розквітли.'
            ],
            correct: 1
        },
        {
            id: 'ukr_27',
            type: 'multiple',
            question: 'Оберіть правильний варіант написання:',
            options: ['будь-який', 'будьякий', 'будь який', 'будь-які'],
            correct: 0
        },
        // Correspondence questions (3)
        {
            id: 'ukr_corr_1',
            type: 'correspondence',
            question: 'Встановіть відповідність між літературними творами та їх авторами:',
            leftItems: ['Кобзар', 'Лісова пісня', 'Тіні забутих предків'],
            rightItems: ['Леся Українка', 'Михайло Коцюбинський', 'Тарас Шевченко'],
            correctPairs: [2, 0, 1] // Кобзар-Шевченко, Лісова пісня-Леся Українка, Тіні-Коцюбинський
        },
        {
            id: 'ukr_corr_2',
            type: 'correspondence',
            question: 'Встановіть відповідність між частинами мови та прикладами:',
            leftItems: ['Іменник', 'Прикметник', 'Дієслово'],
            rightItems: ['красивий', 'читати', 'книга'],
            correctPairs: [2, 0, 1] // Іменник-книга, Прикметник-красивий, Дієслово-читати
        },
        {
            id: 'ukr_corr_3',
            type: 'correspondence',
            question: 'Встановіть відповідність між стилями мовлення та їх характеристиками:',
            leftItems: ['Офіційно-діловий', 'Художній', 'Розмовний'],
            rightItems: ['емоційність, образність', 'невимушеність, простота', 'точність, стандартність'],
            correctPairs: [2, 0, 1] // Офіційно-діловий-точність, Художній-емоційність, Розмовний-невимушеність
        }
    ],
    'Математика': [
        // Regular questions (19)
        {
            id: 'math_1',
            type: 'multiple',
            question: 'Розв\'яжіть рівняння: 2x + 5 = 13',
            options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
            correct: 1
        },
        {
            id: 'math_2',
            type: 'multiple',
            question: 'Знайдіть значення виразу: √(25 + 144)',
            options: ['13', '15', 'Ї17', '19'],
            correct: 0
        },
        {
            id: 'math_3',
            type: 'multiple',
            question: 'Обчисліть: log₂(8)',
            options: ['2', '3', '4', '8'],
            correct: 1
        },
        {
            id: 'math_4',
            type: 'multiple',
            question: 'Знайдіть похідну функції f(x) = x³ + 2x',
            options: ['3x² + 2', '3x² + 2x', 'x² + 2', '3x + 2'],
            correct: 0
        },
        {
            id: 'math_5',
            type: 'multiple',
            question: 'Розв\'яжіть нерівність: 3x - 7 > 2',
            options: ['x > 3', 'x > 2', 'x < 3', 'x < 2'],
            correct: 0
        },
        {
            id: 'math_6',
            type: 'multiple',
            question: 'Знайдіть площу кола з радіусом 5:',
            options: ['25π', '10π', '5π', '50π'],
            correct: 0
        },
        {
            id: 'math_7',
            type: 'multiple',
            question: 'Обчисліть: sin(30°)',
            options: ['1/2', '√3/2', '√2/2', '1'],
            correct: 0
        },
        {
            id: 'math_8',
            type: 'multiple',
            question: 'Знайдіть суму арифметичної прогресії: 2, 5, 8, 11, 14',
            options: ['40', '35', '45', '30'],
            correct: 0
        },
        {
            id: 'math_9',
            type: 'multiple',
            question: 'Розв\'яжіть систему: x + y = 5, x - y = 1',
            options: ['x=3, y=2', 'x=2, y=3', 'x=4, y=1', 'x=1, y=4'],
            correct: 0
        },
        {
            id: 'math_10',
            type: 'multiple',
            question: 'Знайдіть відсоток: 25% від 80',
            options: ['20', '25', '15', '30'],
            correct: 0
        },
        {
            id: 'math_11',
            type: 'multiple',
            question: 'Обчисліть: 2³ × 2²',
            options: ['32', '16', '64', '8'],
            correct: 0
        },
        {
            id: 'math_12',
            type: 'multiple',
            question: 'Знайдіть периметр прямокутника зі сторонами 6 та 8:',
            options: ['28', '24', '48', '14'],
            correct: 0
        },
        {
            id: 'math_13',
            type: 'multiple',
            question: 'Розв\'яжіть рівняння: x² - 9 = 0',
            options: ['x = ±3', 'x = 3', 'x = 9', 'x = ±9'],
            correct: 0
        },
        {
            id: 'math_14',
            type: 'multiple',
            question: 'Знайдіть значення функції f(x) = 2x + 1 при x = 3:',
            options: ['7', '6', '5', '8'],
            correct: 0
        },
        {
            id: 'math_15',
            type: 'multiple',
            question: 'Обчисліть: cos(60°)',
            options: ['1/2', '√3/2', '√2/2', '0'],
            correct: 0
        },
        {
            id: 'math_16',
            type: 'multiple',
            question: 'Знайдіть об\'єм куба з ребром 4:',
            options: ['64', '16', '48', '32'],
            correct: 0
        },
        {
            id: 'math_17',
            type: 'multiple',
            question: 'Розв\'яжіть рівняння: 5x = 25',
            options: ['x = 5', 'x = 4', 'x = 6', 'x = 3'],
            correct: 0
        },
        {
            id: 'math_18',
            type: 'multiple',
            question: 'Знайдіть гіпотенузу прямокутного трикутника з катетами 3 та 4:',
            options: ['5', '6', '7', '4'],
            correct: 0
        },
        {
            id: 'math_19',
            type: 'multiple',
            question: 'Обчисліть: |−7|',
            options: ['7', '-7', '0', '14'],
            correct: 0
        },
        // Correspondence questions (3)
        {
            id: 'math_corr_1',
            type: 'correspondence',
            question: 'Встановіть відповідність між функціями та їх графіками:',
            leftItems: ['y = x²', 'y = x', 'y = 1/x'],
            rightItems: ['пряма лінія', 'гіпербола', 'парабола'],
            correctPairs: [2, 0, 1] // y=x²-парабола, y=x-пряма, y=1/x-гіпербола
        },
        {
            id: 'math_corr_2',
            type: 'correspondence',
            question: 'Встановіть відповідність між геометричними фігурами та формулами площі:',
            leftItems: ['Коло', 'Квадрат', 'Трикутник'],
            rightItems: ['a²', '½ah', 'πr²'],
            correctPairs: [2, 0, 1] // Коло-πr², Квадрат-a², Трикутник-½ah
        },
        {
            id: 'math_corr_3',
            type: 'correspondence',
            question: 'Встановіть відповідність між тригонометричними функціями та їх значеннями при 0°:',
            leftItems: ['sin(0°)', 'cos(0°)', 'tg(0°)'],
            rightItems: ['1', '0', 'не визначено'],
            correctPairs: [1, 0, 1] // sin(0°)-0, cos(0°)-1, tg(0°)-0
        }
    ],
    'Історія України': [
        // Regular questions (27)
        {
            id: 'hist_1',
            type: 'multiple',
            question: 'У якому році була прийнята Конституція України?',
            options: ['1991', '1996', '2004', '2014'],
            correct: 1
        },
        {
            id: 'hist_2',
            type: 'multiple',
            question: 'Хто був першим президентом незалежної України?',
            options: ['Леонід Кравчук', 'Леонід Кучма', 'Віктор Ющенко', 'Віктор Янукович'],
            correct: 0
        },
        {
            id: 'hist_3',
            type: 'multiple',
            question: 'Коли відбулася Помаранчева революція?',
            options: ['2004', '2013', '2014', '2019'],
            correct: 0
        },
        {
            id: 'hist_4',
            type: 'multiple',
            question: 'Хто з гетьманів підписав Переяславську угоду?',
            options: ['Іван Мазепа', 'Богдан Хмельницький', 'Петро Сагайдачний', 'Іван Виговський'],
            correct: 1
        },
        {
            id: 'hist_5',
            type: 'multiple',
            question: 'У якому році проголошено незалежність України?',
            options: ['1990', '1991', '1992', '1993'],
            correct: 1
        },
        {
            id: 'hist_6',
            type: 'multiple',
            question: 'Яка подія відбулася у 1986 році?',
            options: ['Чорнобильська катастрофа', 'Голодомор', 'Революція на граніті', 'Помаранчева революція'],
            correct: 0
        },
        {
            id: 'hist_7',
            type: 'multiple',
            question: 'Хто очолював УПА?',
            options: ['Степан Бандера', 'Роман Шухевич', 'Євген Коновалець', 'Андрій Мельник'],
            correct: 1
        },
        {
            id: 'hist_8',
            type: 'multiple',
            question: 'У якому році відбувся Голодомор?',
            options: ['1932-1933', '1921-1922', '1946-1947', '1929-1930'],
            correct: 0
        },
        {
            id: 'hist_9',
            type: 'multiple',
            question: 'Яке місто було столицею УНР?',
            options: ['Харків', 'Київ', 'Львів', 'Одеса'],
            correct: 1
        },
        {
            id: 'hist_10',
            type: 'multiple',
            question: 'Хто був головою Центральної Ради?',
            options: ['Михайло Грушевський', 'Симон Петлюра', 'Володимир Винниченко', 'Павло Скоропадський'],
            correct: 0
        },
        {
            id: 'hist_11',
            type: 'multiple',
            question: 'У якому році утворено Запорізьку Січ?',
            options: ['1552', '1556', '1648', '1654'],
            correct: 1
        },
        {
            id: 'hist_12',
            type: 'multiple',
            question: 'Яка битва відбулася під Полтавою?',
            options: ['1709', '1708', '1710', '1711'],
            correct: 0
        },
        {
            id: 'hist_13',
            type: 'multiple',
            question: 'Хто написав "Історію України-Руси"?',
            options: ['Михайло Грушевський', 'Микола Костомаров', 'Володимир Антонович', 'Дмитро Яворницький'],
            correct: 0
        },
        {
            id: 'hist_14',
            type: 'multiple',
            question: 'У якому році відбулася битва під Берестечком?',
            options: ['1651', '1648', '1654', '1657'],
            correct: 0
        },
        {
            id: 'hist_15',
            type: 'multiple',
            question: 'Яка організація була створена у 1900 році?',
            options: ['УВО', 'ОУН', 'РУП', 'УСДРП'],
            correct: 2
        },
        {
            id: 'hist_16',
            type: 'multiple',
            question: 'Хто був останнім гетьманом України?',
            options: ['Іван Мазепа', 'Кирило Розумовський', 'Іван Скоропадський', 'Павло Полуботок'],
            correct: 1
        },
        {
            id: 'hist_17',
            type: 'multiple',
            question: 'У якому році відбулася Революція на граніті?',
            options: ['1989', '1990', '1991', '1992'],
            correct: 1
        },
        {
            id: 'hist_18',
            type: 'multiple',
            question: 'Яке князівство існувало у IX-XIII століттях?',
            options: ['Галицько-Волинське', 'Київське', 'Чернігівське', 'Переяславське'],
            correct: 1
        },
        {
            id: 'hist_19',
            type: 'multiple',
            question: 'Хто заснував місто Київ за легендою?',
            options: ['Кий', 'Щек', 'Хорив', 'Лебідь'],
            correct: 0
        },
        {
            id: 'hist_20',
            type: 'multiple',
            question: 'У якому році відбулося хрещення Русі?',
            options: ['986', '988', '990', '992'],
            correct: 1
        },
        {
            id: 'hist_21',
            type: 'multiple',
            question: 'Хто був князем під час хрещення Русі?',
            options: ['Ігор', 'Святослав', 'Володимир', 'Ярослав'],
            correct: 2
        },
        {
            id: 'hist_22',
            type: 'multiple',
            question: 'Яка битва відбулася у 1362 році?',
            options: ['Синьоводська', 'Грюнвальдська', 'Оршанська', 'Клецька'],
            correct: 0
        },
        {
            id: 'hist_23',
            type: 'multiple',
            question: 'У якому році утворено ЗУНР?',
            options: ['1917', '1918', '1919', '1920'],
            correct: 1
        },
        {
            id: 'hist_24',
            type: 'multiple',
            question: 'Хто очолював Директорію УНР?',
            options: ['Володимир Винниченко', 'Симон Петлюра', 'Михайло Грушевський', 'Павло Скоропадський'],
            correct: 1
        },
        {
            id: 'hist_25',
            type: 'multiple',
            question: 'У якому році створено ОУН?',
            options: ['1928', '1929', '1930', '1931'],
            correct: 1
        },
        {
            id: 'hist_26',
            type: 'multiple',
            question: 'Яка подія відбулася 1 грудня 1991 року?',
            options: ['Проголошення незалежності', 'Всеукраїнський референдум', 'Вибори президента', 'Прийняття Конституції'],
            correct: 1
        },
        {
            id: 'hist_27',
            type: 'multiple',
            question: 'У якому році Україна стала членом ООН?',
            options: ['1945', '1991', '1992', '1993'],
            correct: 0
        },
        // Correspondence questions (3)
        {
            id: 'hist_corr_1',
            type: 'correspondence',
            question: 'Встановіть відповідність між історичними постатями та їх діяльністю:',
            leftItems: ['Богдан Хмельницький', 'Іван Мазепа', 'Михайло Грушевський'],
            rightItems: ['історик', 'гетьман XVII ст.', 'гетьман XVIII ст.'],
            correctPairs: [1, 2, 0] // Хмельницький-XVII ст., Мазепа-XVIII ст., Грушевський-історик
        },
        {
            id: 'hist_corr_2',
            type: 'correspondence',
            question: 'Встановіть відповідність між подіями та роками:',
            leftItems: ['Переяславська рада', 'Хрещення Русі', 'Проголошення незалежності'],
            rightItems: ['1991', '988', '1654'],
            correctPairs: [2, 1, 0] // Переяславська-1654, Хрещення-988, Незалежність-1991
        },
        {
            id: 'hist_corr_3',
            type: 'correspondence',
            question: 'Встановіть відповідність між містами та їх історичним значенням:',
            leftItems: ['Київ', 'Запоріжжя', 'Львів'],
            rightItems: ['столиця Галичини', 'центр козацтва', 'мати міст руських'],
            correctPairs: [2, 1, 0] // Київ-мати міст, Запоріжжя-козацтво, Львів-Галичина
        }
    ],
    'Англійська мова': [
        // Regular questions (29)
        {
            id: 'eng_1',
            type: 'multiple',
            question: 'Choose the correct form: "I ___ to London last year."',
            options: ['go', 'went', 'have gone', 'going'],
            correct: 1
        },
        {
            id: 'eng_2',
            type: 'multiple',
            question: 'What is the plural of "child"?',
            options: ['childs', 'children', 'childes', 'child'],
            correct: 1
        },
        {
            id: 'eng_3',
            type: 'multiple',
            question: 'Choose the correct sentence:',
            options: [
                'She don\'t like coffee.',
                'She doesn\'t likes coffee.',
                'She doesn\'t like coffee.',
                'She not like coffee.'
            ],
            correct: 2
        },
        {
            id: 'eng_4',
            type: 'multiple',
            question: 'Complete: "If I ___ rich, I would travel the world."',
            options: ['am', 'was', 'were', 'be'],
            correct: 2
        },
        {
            id: 'eng_5',
            type: 'multiple',
            question: 'Choose the correct article: "___ apple a day keeps the doctor away."',
            options: ['A', 'An', 'The', 'No article'],
            correct: 1
        },
        {
            id: 'eng_6',
            type: 'multiple',
            question: 'What is the past participle of "write"?',
            options: ['wrote', 'written', 'writing', 'writes'],
            correct: 1
        },
        {
            id: 'eng_7',
            type: 'multiple',
            question: 'Choose the correct preposition: "I\'m interested ___ learning English."',
            options: ['in', 'on', 'at', 'for'],
            correct: 0
        },
        {
            id: 'eng_8',
            type: 'multiple',
            question: 'Complete: "She has been working here ___ 2010."',
            options: ['for', 'since', 'during', 'from'],
            correct: 1
        },
        {
            id: 'eng_9',
            type: 'multiple',
            question: 'Choose the correct form: "This is ___ book I\'ve ever read."',
            options: ['good', 'better', 'the best', 'best'],
            correct: 2
        },
        {
            id: 'eng_10',
            type: 'multiple',
            question: 'What does "break a leg" mean?',
            options: ['Hurt yourself', 'Good luck', 'Run fast', 'Be careful'],
            correct: 1
        },
        {
            id: 'eng_11',
            type: 'multiple',
            question: 'Choose the correct form: "I wish I ___ speak French."',
            options: ['can', 'could', 'will', 'would'],
            correct: 1
        },
        {
            id: 'eng_12',
            type: 'multiple',
            question: 'Complete: "By the time you arrive, I ___ cooking."',
            options: ['finish', 'will finish', 'will have finished', 'finished'],
            correct: 2
        },
        {
            id: 'eng_13',
            type: 'multiple',
            question: 'Choose the correct word: "The weather is ___ today."',
            options: ['beautifuly', 'beautiful', 'beauty', 'beautify'],
            correct: 1
        },
        {
            id: 'eng_14',
            type: 'multiple',
            question: 'What is the opposite of "ancient"?',
            options: ['old', 'modern', 'historic', 'traditional'],
            correct: 1
        },
        {
            id: 'eng_15',
            type: 'multiple',
            question: 'Choose the correct form: "Neither John nor Mary ___ coming."',
            options: ['is', 'are', 'were', 'been'],
            correct: 0
        },
        {
            id: 'eng_16',
            type: 'multiple',
            question: 'Complete: "I\'d rather you ___ smoke here."',
            options: ['don\'t', 'didn\'t', 'not', 'won\'t'],
            correct: 1
        },
        {
            id: 'eng_17',
            type: 'multiple',
            question: 'Choose the correct form: "The book ___ by millions of people."',
            options: ['read', 'reads', 'is read', 'reading'],
            correct: 2
        },
        {
            id: 'eng_18',
            type: 'multiple',
            question: 'What does "piece of cake" mean?',
            options: ['Dessert', 'Very easy', 'Expensive', 'Sweet'],
            correct: 1
        },
        {
            id: 'eng_19',
            type: 'multiple',
            question: 'Choose the correct form: "I\'m looking forward ___ you."',
            options: ['to see', 'to seeing', 'see', 'seeing'],
            correct: 1
        },
        {
            id: 'eng_20',
            type: 'multiple',
            question: 'Complete: "She speaks English ___ than her brother."',
            options: ['good', 'well', 'better', 'best'],
            correct: 2
        },
        {
            id: 'eng_21',
            type: 'multiple',
            question: 'Choose the correct form: "I have ___ finished my homework."',
            options: ['yet', 'already', 'still', 'ever'],
            correct: 1
        },
        {
            id: 'eng_22',
            type: 'multiple',
            question: 'What is the correct question tag: "You\'re coming, ___?"',
            options: ['are you', 'aren\'t you', 'do you', 'don\'t you'],
            correct: 1
        },
        {
            id: 'eng_23',
            type: 'multiple',
            question: 'Choose the correct form: "I suggest ___ early."',
            options: ['to leave', 'leaving', 'leave', 'left'],
            correct: 1
        },
        {
            id: 'eng_24',
            type: 'multiple',
            question: 'Complete: "The meeting has been ___ until next week."',
            options: ['put off', 'put on', 'put up', 'put down'],
            correct: 0
        },
        {
            id: 'eng_25',
            type: 'multiple',
            question: 'Choose the correct form: "I\'m used ___ early."',
            options: ['to get up', 'to getting up', 'get up', 'getting up'],
            correct: 1
        },
        {
            id: 'eng_26',
            type: 'multiple',
            question: 'What does "hit the books" mean?',
            options: ['Throw books', 'Study hard', 'Buy books', 'Read quickly'],
            correct: 1
        },
        {
            id: 'eng_27',
            type: 'multiple',
            question: 'Choose the correct form: "The house ___ built in 1990."',
            options: ['is', 'was', 'has been', 'had been'],
            correct: 1
        },
        {
            id: 'eng_28',
            type: 'multiple',
            question: 'Complete: "I\'ll call you ___ I arrive."',
            options: ['when', 'while', 'during', 'until'],
            correct: 0
        },
        {
            id: 'eng_29',
            type: 'multiple',
            question: 'Choose the correct form: "She made me ___ the dishes."',
            options: ['to wash', 'wash', 'washing', 'washed'],
            correct: 1
        },
        // Correspondence questions (3)
        {
            id: 'eng_corr_1',
            type: 'correspondence',
            question: 'Match the tenses with their uses:',
            leftItems: ['Present Simple', 'Present Continuous', 'Present Perfect'],
            rightItems: ['actions happening now', 'completed actions with present result', 'regular actions/facts'],
            correctPairs: [2, 0, 1] // Present Simple-regular, Present Continuous-now, Present Perfect-completed
        },
        {
            id: 'eng_corr_2',
            type: 'correspondence',
            question: 'Match the words with their definitions:',
            leftItems: ['Enormous', 'Tiny', 'Ancient'],
            rightItems: ['very old', 'very small', 'very big'],
            correctPairs: [2, 1, 0] // Enormous-big, Tiny-small, Ancient-old
        },
        {
            id: 'eng_corr_3',
            type: 'correspondence',
            question: 'Match the phrasal verbs with their meanings:',
            leftItems: ['Give up', 'Look after', 'Turn down'],
            rightItems: ['refuse/reject', 'stop trying', 'take care of'],
            correctPairs: [1, 2, 0] // Give up-stop, Look after-care, Turn down-refuse
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