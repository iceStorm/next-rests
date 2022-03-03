import { useRouter } from "next/router";

export default function PostDetailPage() {
    const query = useRouter();

    return (
        <>
            <div>{ query.isReady }</div>
        </>
    );
}
