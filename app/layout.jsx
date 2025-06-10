import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | НМТ',
        default: 'НМТ - Національний мультипредметний тест'
    },
    description: 'Система тестування НМТ'
};

export default function RootLayout({ children }) {
    return (
        <html lang="uk">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}