const SiderItem = ({ label, onClick }: { label: string, onClick: () => void }) => {
    return (
        <button className="py-2 rounded-sm bg-white/20 cursor-pointer hover:bg-white/40 transition-all duration-300 ease-in-out" onClick={onClick}>{label}</button>
    )
}

const Sider = () => {
    const onSiderOpen: boolean = false;
    return (
        <>
            {onSiderOpen && (
                <aside id="sider" className="flex flex-col text-start w-[200px] px-2 py-2 bg-gray-950/40 gap-2">
                    <SiderItem label="My CV" onClick={() => { }} />
                    <SiderItem label="CV Editor" onClick={() => { }} />
                </aside>
            )}
        </>
    )
}

export default Sider;