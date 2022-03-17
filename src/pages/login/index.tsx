import { Switch } from "@headlessui/react"
import { BeakerIcon } from "@heroicons/react/solid"
import Head from "next/head"
import Link from "next/link"
import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import TheSwitch from "src/components/TheSwitch"
import useShowPassword from "src/hooks/useShowPassword"
import OAuthLoginView from "./oauth-login"

export default function LoginPage() {
    const { t } = useTranslation()
    const { showingPassword, handleShowingPassword } = useShowPassword()

    console.log("render login...")
    return (
        <div className="container my-10 flex justify-between gap-10 lg:gap-5 flex-wrap">
            <section className="manual-auth-section">
                <div className="mb-5 dark:text-white">
                    <p className="mb-2 font-bold text-3xl">
                        {t("pages:labels./login.headline")}
                    </p>
                    <p>
                        {t("pages:labels./login.dont_have_account_guide")}{" "}
                        <Link href="/register" passHref>
                            <span className="link">
                                {t(
                                    "pages:labels./login.create_new_account_guide"
                                )}
                                .
                            </span>
                        </Link>
                    </p>
                </div>

                <form className="flex flex-col max-w-md dark:text-white">
                    {/* email */}
                    <div className="mt-5">
                        <label htmlFor="email" className="font-semibold">
                            {t("pages:labels./login.email_or_username")}
                        </label>
                        <input
                            id="email"
                            className="mt-2 w-full"
                            required={true}
                            autoComplete="email"
                        />
                    </div>

                    {/* password */}
                    <div className="mt-5">
                        <label htmlFor="password" className="font-semibold">
                            {t("common:auth.password")}
                        </label>
                        <input
                            id="password"
                            type={showingPassword ? "text" : "password"}
                            className="mt-2 w-full"
                            required={true}
                            autoComplete="current-password"
                        />
                    </div>

                    {/* buttons */}
                    <div className="mt-5 flex justify-between items-center">
                        <TheSwitch
                            title={t("common:auth.show_password")}
                            checked={showingPassword}
                            onChange={handleShowingPassword}
                        />

                        <Link href="/forgot-password" passHref>
                            <span className="link">
                                {t("common:auth.forgot_password")}?
                            </span>
                        </Link>
                    </div>

                    {/* submit button */}
                    <button className="btn rounded-md mt-10 bg-primary bg-opacity-80 py-3 text-white font-semibold shadow-lg shadow-primary/50 dark:shadow-none">
                        {t("common:auth.login")}
                    </button>
                </form>
            </section>

            {/* OAuth */}
            <section className="oauth-section max-w-md w-full lg:w-auto">
                <p className="mb-5 font-semibold dark:text-white">{t("common:auth.using_oauth")}</p>
                <OAuthLoginView />
            </section>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    // console.log(context, typeof context, context.req)

    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    return { props: {} }
}
