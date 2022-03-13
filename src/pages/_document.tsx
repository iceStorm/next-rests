import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                            document.documentElement.classList.add('dark');
                        } else {
                            document.documentElement.classList.remove('dark');
                        }`,
                    }}
                />
            </Head>
            <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
