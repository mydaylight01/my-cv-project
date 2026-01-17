import { createContext } from 'react'
import type { UserInfo } from "../../../../shared/types";

export interface AppAuthContextType {
    currentUserInfo: UserInfo | null;
    setCurrentUserInfo: (user: UserInfo | null) => void;
}

const AppAuthContext: React.Context<AppAuthContextType> = createContext<AppAuthContextType>({
    currentUserInfo: null,
    setCurrentUserInfo: () => { },
});

export default AppAuthContext;