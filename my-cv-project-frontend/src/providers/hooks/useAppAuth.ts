import { useContext } from "react";
import AppAuthContext from "../contexts/AppAuthContext";
import type { AppAuthContextType } from "../contexts/AppAuthContext";

export const useAppAuthHook = (): AppAuthContextType => {
    const context: AppAuthContextType | undefined = useContext(AppAuthContext);
    if (context === undefined) {
        throw new Error('useAppAuthHook must be used within an AppAuthProvider');
    }
    return context;
};