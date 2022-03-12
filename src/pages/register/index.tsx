import { BeakerIcon } from "@heroicons/react/solid"
import Head from "next/head"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function SignupPage() {
    const { t } = useTranslation()

    return (
        <>
            <div className="mt-10 mb-5">
                <p className="mb-2 font-bold text-3xl">Register page.</p>
                <p>
                    Don&lsquo;t have an account?{" "}
                    <Link href="/signup" passHref>
                        <span className="link">Create new account</span>
                    </Link>
                    .
                </p>
            </div>

            <form className="flex flex-col max-w-md">
                <div className="mt-5">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        className="mt-2 border border-gray-200 w-full shadow-md pl-3"
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        className="mt-2 border border-gray-200 w-full shadow-md pl-3"
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="mt-2 border border-gray-200 w-full shadow-md pl-3"
                    />
                </div>

                <button className="btn rounded mt-10 bg-primary py-3 text-white font-semibold">
                    {t("common:auth.signup")}
                </button>
            </form>
        </>
    )
}

export async function getServerSideProps(props: any) {
    // console.log(props)

    // await new Promise((resolve) => {
    //     setTimeout(resolve, 1000)
    // })

    return { props: {} }
}
