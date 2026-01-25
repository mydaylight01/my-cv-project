import { Header, Sider, Footer } from "../../components/layouts";

interface CustomLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children, className }: CustomLayoutProps) => {
    const overrideClassName: string = className ?? "flex flex-col h-full w-full";

    return (
        <div className={overrideClassName}>
            <Header />
            <section className="flex flex-1">
                <Sider />
                <main className="h-full w-full">{children}</main>
            </section>
            <Footer />
        </div>
    )
}

export default CustomLayout;