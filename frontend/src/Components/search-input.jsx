export default function SearchBar({ value, onChange, onSubmit, placeholder = 'Search', disabled = false }) {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 px-4 py-2 border-2 border-[#334d66] bg-[#223649] rounded-md text-sm md:text-base text-white placeholder-[#8fadcc] outline-none focus:border-btnprimary transition"
        />
        <button
          type="submit"
          disabled={disabled}
          className="w-full sm:w-auto px-6 py-2 bg-btnprimary text-white rounded-md text-sm md:text-base font-bold hover:bg-blue-700 transition disabled:opacity-60"
        >
          Search
        </button>
      </div>
    </form>
  );
}
