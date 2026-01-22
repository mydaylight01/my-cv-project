import { createContext } from 'react'
import type { UserInfo } from "../../types/types";

export interface AppAuthContextType {
    currentUserInfo: UserInfo | null;
    appLogin: (username: string, password: string) => Promise<UserInfo | null>;
    appLogout: () => void;
}

const AppAuthContext: React.Context<AppAuthContextType> = createContext<AppAuthContextType>({
    currentUserInfo: null,
    appLogin: async () => null,
    appLogout: async () => { },
});

export default AppAuthContext;