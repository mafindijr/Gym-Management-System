export default function SearchBar({ value, onChange, onSubmit, placeholder = 'Search', disabled = false }) {
  return (
    <form onSubmit={onSubmit} className='w-full flex gap-3'>
      <input
        type='text'
        placeholder={placeholder}
        className='bg-[#223649] flex-1 outline-0 p-4 rounded-2xl text-[18px]'
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={disabled}
        className='bg-btnprimary text-white font-bold px-6 rounded-2xl text-[14px] leading-[21px] cursor-pointer disabled:opacity-60'
      >
        Search
      </button>
    </form>
  );
}
