export const OAUTH_PROVIDERS = {
    Github: {
        authUrl: `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID}`,
        iconUrl: "/oauth/github.svg",
    },
    Google: {
        authUrl: "#",
        iconUrl: "/oauth/google.svg",
    },
    Twitter: {
        authUrl: "#",
        iconUrl: "/oauth/twitter.svg",
    },
    Facebook: {
        authUrl: "#",
        iconUrl: "/oauth/facebook.svg",
    },
    Instagram: {
        authUrl: "#",
        iconUrl: "/oauth/instagram.svg",
    },
    Microsoft: {
        authUrl: "#",
        iconUrl: "/oauth/microsoft.svg",
    },
    Linkedin: {
        authUrl: "#",
        iconUrl: "/oauth/linkedin.svg",
    },
    Tiktok: {
        authUrl: "#",
        iconUrl: "/oauth/tiktok.svg",
    },
}
