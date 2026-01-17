import { useMemo, useState } from "react";

import AppAuthContext from "../contexts/AppAuthContext";
import type { AppAuthContextType } from "../contexts/AppAuthContext";

import type { UserInfo } from "../../../../shared/types";

interface AppAuthProvierProps {
    children: React.ReactNode;
}

const AppAuthProvier: React.FC<AppAuthProvierProps> = ({ children }: AppAuthProvierProps) => {

    const [currentUserInfo, setCurrentUserInfo] = useState<UserInfo | null>(null);

    const value: AppAuthContextType = useMemo(() => ({
        currentUserInfo,
        setCurrentUserInfo: (userInfo: UserInfo | null) => setCurrentUserInfo(userInfo)
    }), [currentUserInfo]);

    return (
        <AppAuthContext.Provider value={value}>
            {children}
        </AppAuthContext.Provider>
    )
}

export default AppAuthProvier;
