import Head from "next/head"

export default function LoginPage() {
    return (
        <>
            <div className="py-5">Login page.</div>
        </>
    )
}

export async function getServerSideProps(props: any) {
    // console.log(props)

    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    return { props: {} }
}
