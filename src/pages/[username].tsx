import { useRouter } from "next/router";

export default function UserProfilePage() {
    const router = useRouter();
    const { username } = router.query

    return (
        <>
            <div>Profile {username}.</div>
        </>
    );
}
