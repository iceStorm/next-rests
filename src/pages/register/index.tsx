import { BeakerIcon } from "@heroicons/react/solid"
import Head from "next/head"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function SignupPage() {
    const { t } = useTranslation()

    return (
        <div className="container">
            <div className="mt-10 mb-5 dark:text-white">
                <p className="mb-2 font-bold text-3xl">
                    {t("pages:labels./register.headline")}.
                </p>
                <p>
                    {t("pages:labels./register.already_have_account")}{" "}
                    <Link href="/login" passHref>
                        <span className="link">{t("common:auth.login")}</span>
                    </Link>
                </p>
            </div>

            <form className="flex flex-col max-w-md mb-10 dark:text-white">
                <div className="mt-5">
                    <label htmlFor="username" className="font-semibold">
                        {t("common:auth.username")}
                    </label>
                    <input id="username" className="mt-2 w-full" />
                </div>

                <div className="mt-5">
                    <label htmlFor="email" className="font-semibold">
                        Email
                    </label>
                    <input id="email" className="mt-2 w-full" />
                </div>

                <div className="mt-5">
                    <label htmlFor="password" className="font-semibold">
                        {t("common:auth.password")}
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="mt-2 w-full"
                    />
                </div>

                <button className="btn rounded-md mt-10 bg-primary bg-opacity-80 py-3 text-white font-semibold shadow-lg shadow-primary/50 dark:shadow-none">
                    {t("common:auth.signup")}
                </button>
            </form>
        </div>
    )
}

export async function getServerSideProps(props: any) {
    // console.log(props)

    // await new Promise((resolve) => {
    //     setTimeout(resolve, 1000)
    // })

    return { props: {} }
}
