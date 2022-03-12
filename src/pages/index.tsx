import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

const Home: NextPage = () => {
    const { t } = useTranslation()

    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <div className="py-5 flex flex-col gap-10">
                <section className="flex flex-col items-center">
                    <Link href="/login" passHref>
                        <span className="py-3 px-10 rounded-full shadow-lg bg-primary text-white font-semibold btn">
                            {t("pages:title_keys./login")}
                        </span>
                    </Link>
                </section>

                <section>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Commodi illo at excepturi sunt. Voluptate magnam suscipit
                    ipsa cum, eligendi rem laudantium commodi eum doloremque
                    illum facilis, non beatae est vel. Doloribus praesentium
                    recusandae ipsa pariatur repellendus facilis, laborum, omnis
                    aspernatur ut fuga tempora dignissimos numquam animi alias
                    ratione blanditiis aut illo consequuntur eius. Modi eum,
                    aspernatur a atque error sequi. Qui, eligendi eaque. Nobis
                    molestiae neque eligendi qui laboriosam voluptatum cum velit
                    id rem in ut natus, quisquam perspiciatis expedita
                    laudantium sunt blanditiis quae consectetur dicta alias?
                    Rem, possimus itaque. Similique placeat voluptatibus
                    distinctio suscipit dolores quam porro quae natus recusandae
                    sed commodi deserunt nam qui, tempore eius quas debitis
                    delectus perferendis hic corporis. Error libero iusto ad
                    excepturi voluptates? Voluptatibus quos adipisci, suscipit
                    cum praesentium eligendi corrupti ad autem in voluptate
                    minima qui, quae aliquid libero accusamus! Aliquid assumenda
                    nemo quod, quibusdam numquam unde earum amet esse nesciunt
                    delectus! Excepturi deleniti animi reiciendis rem! Corrupti
                    sed natus nobis ullam explicabo ipsam exercitationem facere
                    quaerat fugit nostrum quidem, consequatur harum nulla odit
                    neque recusandae beatae possimus. Illo soluta labore
                    incidunt? Amet non doloremque tempora vel, dolor assumenda
                    voluptate minus dignissimos omnis, exercitationem ullam
                    ratione obcaecati adipisci eos expedita autem quidem dolore
                    veniam. Eos beatae architecto repellendus delectus amet
                    quibusdam dolorum. Nemo eveniet saepe qui corporis? Illum id
                    cupiditate ullam modi asperiores molestias voluptates
                    consectetur eos dicta exercitationem, labore ipsa, quaerat
                    numquam dignissimos! Aspernatur nobis asperiores quis ipsa
                    sapiente ab enim. Quaerat nesciunt corporis vitae modi, ad
                    qui, veritatis dolor provident dicta nulla animi voluptas
                    dolores. Ex vero iusto, possimus labore, similique aperiam
                    tenetur aliquid voluptatibus porro, ducimus adipisci
                    molestiae sit. Placeat alias qui in dignissimos soluta,
                    aspernatur fugiat esse illum optio enim dolor repellat
                    molestias, unde sunt tenetur perspiciatis! Dolorum obcaecati
                    iste architecto! Tempore deleniti dolor voluptatibus
                    mollitia neque perferendis.
                </section>
            </div>
        </>
    )
}

export default Home
