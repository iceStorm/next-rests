import Head from "next/head"

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <div>Login page.</div>
        </>
    )
}

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 500)
    })
    return { props: {} }
}
