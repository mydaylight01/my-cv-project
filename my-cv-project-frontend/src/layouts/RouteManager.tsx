// External Libraries (React first)
import { Routes, Route } from "react-router-dom";

// Internal Project Files (Hooks / Utils / Providers)
import { useAppAuthHook } from '../providers/hooks/AppAuthHook';

// Components & Layouts (Outside to Inside)
import ScrollTop from '../components/utils/ScrollTop';
import AppLayout from "./AppLayout";
import Blank from "../components/Blank";
import ErrorElement from "../components/ErrorElement";
import NotFound from "../components/NotFound";

// Local Constants / Config / Types
import Paths from "./paths";

const RouteManager: React.FC = () => {
    const { currentUserInfo } = useAppAuthHook();

    const isAuthenticated = currentUserInfo !== null;

    return (
        <div className="flex flex-col min-h-screen">
            <ScrollTop />
            <Routes>
                {
                    isAuthenticated ? (
                        <>
                            <Route path={Paths.Dashboard} element={<Blank />} errorElement={<ErrorElement />} />
                            <Route path={Paths.MyCv} element={
                                <AppLayout>
                                    <Blank />
                                </AppLayout>
                            } errorElement={<ErrorElement />} />
                            <Route path={Paths.CvEditor} element={<Blank />} errorElement={<ErrorElement />} />
                            <Route path={Paths.Settings} element={<Blank />} errorElement={<ErrorElement />} />
                        </>
                    ) : !isAuthenticated && (
                        <>
                            <Route path={Paths.Login} element={<Blank />} />
                            <Route path={Paths.Register} element={<Blank />} />
                        </>
                    )
                }
                <Route path={Paths.Home} element={<Blank />} errorElement={<ErrorElement />} />
                <Route path={Paths.Contact} element={<Blank />} errorElement={<ErrorElement />} />
                <Route path={Paths.Share} element={<Blank />} errorElement={<ErrorElement />} />
                <Route path={Paths.NotFound} element={<NotFound />} errorElement={<ErrorElement />} />
            </Routes>
        </div >
    )
}

export default RouteManager;