export default function useAuth() {
    let accessToken: string|null = ""

    if (typeof window !== "undefined") {
        accessToken = localStorage.getItem("access_token")
    }

    return accessToken
}
