interface AuthLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }: AuthLayoutProps) => {
    const overrideClassName: string = className ?? "flex flex-col h-screen w-screen";

    return (
        <div className={overrideClassName}>
            <section>
                <main className="flex-1">{children}</main>
            </section>
        </div>
    )
}

export default AuthLayout;