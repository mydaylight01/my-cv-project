import { useState } from "react";

import Header from "../components/layouts/Header";
import Sider from "../components/layouts/Sider";
import Footer from "../components/layouts/Footer";

interface AppLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, className }: AppLayoutProps) => {

    const [overrideClassName] = useState<string>(className || "flex flex-col h-screen");

    return (
        <div className={overrideClassName}>
            <Header />
            <Sider />
            <section>
                <main className="flex-1">{children}</main>
            </section>
            <Footer />
        </div>
    )
}

export default AppLayout;