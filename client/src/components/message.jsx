export default function Message({
    children,
    bg = 'bg-success',
    textAlign = 'text-center',
}) {
    const textColor = bg === 'bg-black' ? 'text-white' : 'text-black'
    return (
        <div className="my-5 h-auto w-full px-2 transition-all duration-500">
            <div
                className={`${bg} ${textColor} ${textAlign} rounded-md px-2 py-8`}
            >
                {children}
            </div>
        </div>
    )
}
