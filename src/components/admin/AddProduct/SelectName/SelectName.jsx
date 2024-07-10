export const SelectName = ({label, setName, title}) => {
    const handleChange = (e) => {
        setName(e.target.value);
    };
    return (
        <div
            className={`flex items-center w-full border-b border-b-admin-grey-hover pb-5`}
        >
            <p className={`text-body3 font-bold w-1/4`}>{label}</p>
            <input
                type="text"
                className={`bg-inherit border border-white px-3 py-1 rounded-md w-full`}
                onChange={handleChange}
                value={title || ''}
            />
        </div>
    );
};
