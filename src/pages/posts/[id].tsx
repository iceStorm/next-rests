import { useRouter } from "next/router";

export default function PostDetailPage() {
    const query = useRouter();

    return (
        <>
            <article>{ query.isReady }</article>
        </>
    );
}
