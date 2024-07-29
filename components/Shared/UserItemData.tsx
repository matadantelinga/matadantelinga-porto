interface iUserMe {
    label: string,
    value: string | React.ReactNode,
    bgcolor?: boolean
}

export function ItemData({ label, value, bgcolor }: iUserMe) {
    return (
        <div className={`flex items-start gap-3 py-2 px-4 ${bgcolor ? "bg-slate-50" : "bg-white"}`}>
            <div className="w-[200px] font-bold">{label}</div>
            <div className="flex gap-1 flex-1 [&_p]:mt-0"><span></span>: {value}</div>
        </div>
    )
}