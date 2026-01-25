// External Libraries (React first)
import { Routes, Route } from "react-router-dom";

// Internal Project Files (Hooks / Utils / Providers)
import { useAppAuthHook } from '../providers/hooks/useAppAuth';

// Components & Layouts (Outside to Inside)
import { AppLayout, AuthLayout, CustomLayout } from "./layouts";
import { Blank, ErrorElement, NotFound } from "../components";
import { LoadingOverlay, ScrollTop } from "../components/utils";

// Local Constants / Config / Types
import { Paths } from "../constants/paths";
import {
    LoginPage,
    RegisterPage,
    ContactPage,
    CvEditorPage,
    DashboardPage,
    HomePage,
    MyCvPage,
    SettingsPage,
    SharePage
} from "../pages/client";

const RouteManager: React.FC = () => {
    const { currentUserInfo } = useAppAuthHook();

    const isAuthenticated: boolean = currentUserInfo !== null;

    const errorElement: React.ReactNode = <ErrorElement />
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const blankPage: React.ReactNode = <Blank />

    return (
        <div className="flex flex-col h-screen w-screen">
            <ScrollTop />
            <LoadingOverlay />
            <Routes>
                {
                    isAuthenticated ? (
                        <>
                            <Route path={Paths.Dashboard} errorElement={errorElement} element={
                                <AppLayout>
                                    <DashboardPage />
                                </AppLayout>
                            } />
                            <Route path={Paths.MyCv} errorElement={errorElement} element={
                                <CustomLayout>
                                    <MyCvPage />
                                </CustomLayout>
                            } />
                            <Route path={Paths.CvEditor} errorElement={errorElement} element={
                                <AppLayout>
                                    <CvEditorPage />
                                </AppLayout>
                            } />
                            <Route path={Paths.Settings} errorElement={errorElement} element={
                                <AppLayout>
                                    <SettingsPage />
                                </AppLayout>
                            } />
                        </>
                    ) : !isAuthenticated && (
                        <>
                            <Route path={Paths.Login} errorElement={errorElement} element={
                                <AuthLayout>
                                    <LoginPage />
                                </AuthLayout>
                            } />
                            <Route path={Paths.Register} errorElement={errorElement} element={
                                <AuthLayout>
                                    <RegisterPage />
                                </AuthLayout>
                            } />
                        </>
                    )
                }
                <Route path={Paths.Home} errorElement={errorElement} element={
                    <AppLayout>
                        <HomePage />
                    </AppLayout>
                } />
                <Route path={Paths.Contact} errorElement={errorElement} element={
                    <CustomLayout>
                        <ContactPage />
                    </CustomLayout>
                } />
                <Route path={`${Paths.Share}/:contentId`} errorElement={errorElement} element={
                    <CustomLayout>
                        <SharePage />
                    </CustomLayout>
                } />
                <Route path={Paths.NotFound} errorElement={errorElement} element={
                    <CustomLayout>
                        <NotFound />
                    </CustomLayout>
                } />
            </Routes>
        </div >
    )
}

export default RouteManager;