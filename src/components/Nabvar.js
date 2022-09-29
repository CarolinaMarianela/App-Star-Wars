const Nabvar = ({ text, handleChange }) => {
  return (
    <div className="w-full p-6 bg-gray-900 flex justify-center ">
      <input
        value={text}
        onChange={(event) => handleChange(event.target.value)}
        type="text"
        placeholder="Search movie"
        className="shadow appearance-none border rounded w-1/4 py-2 px-6 text-gray-700"
      />
    </div>
  );
};
export default Nabvar;
