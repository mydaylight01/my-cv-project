import { useCallback, useMemo, useState } from "react";

import AppAuthContext from "../contexts/AppAuthContext";
import type { AppAuthContextType } from "../contexts/AppAuthContext";
import { useLoading } from "../hooks/useLoading";

import type { UserInfo } from "../../types/types";

interface AppAuthProvierProps {
    children: React.ReactNode;
}

const AppAuthProvier: React.FC<AppAuthProvierProps> = ({ children }: AppAuthProvierProps) => {
    const { showLoading, hideLoading } = useLoading();

    const [currentUserInfo, setCurrentUserInfo] = useState<UserInfo | null>(null);

    const appLogin = useCallback(async (username: string, password: string): Promise<UserInfo | null> => {
        showLoading();
        try {
            console.log("[Login][Start] Login request sent.");
            const response: Response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data: UserInfo = await response.json();
                setCurrentUserInfo(data);
                return data;
            }

            return null;
        } catch (error) {
            console.error("[Login][Error] Login failed:", error);
            return null;
        } finally {
            hideLoading();
        }
    }, [showLoading, hideLoading]);

    const appLogout = useCallback((): void => setCurrentUserInfo(null), []);

    const value: AppAuthContextType = useMemo(() => ({
        currentUserInfo,
        appLogin,
        appLogout
    }), [currentUserInfo, appLogin, appLogout]);

    return (
        <AppAuthContext.Provider value={value}>
            {children}
        </AppAuthContext.Provider>
    )
}

export default AppAuthProvier;
