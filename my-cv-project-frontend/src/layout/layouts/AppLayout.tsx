import { Header, Sider, Footer } from "../../components/layouts";

interface AppLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, className }: AppLayoutProps) => {
    const overrideClassName: string = className ?? "flex flex-col min-h-screen w-full";

    return (
        <div className={overrideClassName}>
            <Header />
            <section className="flex flex-1">
                <Sider />
                <main className="p-4 h-full w-full">{children}</main>
            </section>
            <Footer />
        </div>
    )
}

export default AppLayout;