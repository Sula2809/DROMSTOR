export const SelectDescription = ({ label, setDescription }) => {
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  return (
    <div
      className={`flex items-start w-full border-b border-b-admin-grey-hover pb-5`}
    >
      <p className={`text-body3 font-bold w-1/4`}>{label}</p>
      <textarea
        cols="30"
        rows="5"
        className={`bg-inherit border border-white px-3 py-1 rounded-md max-w-96 w-full`}
        onChange={handleChange}
      />
    </div>
  );
};
