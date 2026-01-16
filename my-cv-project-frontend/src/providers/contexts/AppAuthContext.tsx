import { createContext } from 'react'
import type { AppAuthContextType } from '../providers/AppAuthProvier';

const AppAuthContext: React.Context<AppAuthContextType> = createContext<AppAuthContextType>({
    currentUserInfo: null,
    setCurrentUserInfo: () => { },
});

export default AppAuthContext;