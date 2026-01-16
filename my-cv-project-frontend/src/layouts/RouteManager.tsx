// External Libraries (React first)
import { useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Internal Project Files (Hooks / Utils / Providers)
import { useAppAuthHook } from '../providers/hooks/AppAuthHook';
import { ScrollTop } from '../utils/ScrollTop';

// Components & Layouts (Outside to Inside)
import AppLayout from "./AppLayout";
import Blank from "../components/Blank";
import ErrorElement from "../components/ErrorElement";

// Local Constants / Config / Types
import Paths from "./paths";

const RouteManager: React.FC = () => {
    const { currentUserInfo } = useAppAuthHook();
    const isAuthenticated = useCallback(() => {
        return currentUserInfo !== null
    }, [currentUserInfo]);

    return (
        <div className="flex flex-col min-h-screen">
            <ScrollTop />
            <BrowserRouter>
                <Routes>
                    {
                        isAuthenticated() ? (
                            <>
                                <Route path={Paths.Home} element={
                                    <AppLayout>
                                        <Blank />
                                    </AppLayout>
                                } errorElement={<ErrorElement />} />
                            </>
                        ) : !isAuthenticated() && (
                            <>
                                <Route path={Paths.Login} element={<Blank />} />
                                <Route path={Paths.Register} element={<Blank />} />
                            </>
                        )
                    }
                    <Route path={Paths.Share} element={<Blank />} />
                    <Route path={Paths.NotFound} element={<ErrorElement />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteManager;