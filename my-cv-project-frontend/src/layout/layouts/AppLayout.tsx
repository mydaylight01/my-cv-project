import { Header, Sider, Footer } from "../../components/layouts";

interface AppLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, className }: AppLayoutProps) => {
    const overrideClassName: string = className ?? "flex flex-col h-screen w-screen";

    return (
        <div className={overrideClassName}>
            <Header />
            <section className="flex flex-1">
                <Sider />
                <section className="flex-1">
                    <main className="px-6 py-2">{children}</main>
                </section>
            </section>
            <Footer />
        </div>
    )
}

export default AppLayout;