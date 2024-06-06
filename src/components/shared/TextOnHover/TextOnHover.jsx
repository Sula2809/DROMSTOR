export const TextOnHover = () => {
    return (
        <p className={`absolute inset-0 flex items-end p-8 text-white bg-transparent bg-opacity-10 opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-70 transition-opacity duration-300`}>
            text here
        </p>
    )
}