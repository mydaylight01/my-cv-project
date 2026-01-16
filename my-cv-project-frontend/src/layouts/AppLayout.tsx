import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Sider from "../components/layouts/Sider";
import { useState } from "react";

interface AppLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, className }: AppLayoutProps) => {

    const [overrideClassName] = useState<string>(className || "flex flex-col h-screen");

    return (
        <div className={overrideClassName}>
            <Header />
            <aside>
                <Sider />
            </aside>
            <section>
                <main className="flex-1">{children}</main>
            </section>
            <Footer />
        </div>
    )
}

export default AppLayout;