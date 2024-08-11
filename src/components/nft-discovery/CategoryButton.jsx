export default function CategoryButton({ name, active }) {
  return (
    <button
      className={`px-5 py-2.5 whitespace-nowrap rounded-[100px] ${active ? "text-white bg-violet-800" : "bg-zinc-300 bg-opacity-20"
        }`}
    >
      {name}
    </button>
  );
}