import { useCallback, useState } from "react"

export default function useShowPassword() {
    const [showingPassword, setShowingPassword] = useState(false)

    const handleShowingPassword = useCallback((value: boolean) => {
        setShowingPassword(value)
    }, [])

    return {showingPassword, handleShowingPassword}
}
