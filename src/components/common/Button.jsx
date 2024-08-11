export default function Button({ children, variant }) {
  const baseClasses =
    "gap-2.5 self-stretch px-6 py-5 leading-none whitespace-nowrap rounded-[60px] max-md:px-5";
  const variantClasses = {
    primary: "text-white bg-violet-800",
    secondary: "text-violet-800 border-2 border-violet-800 border-solid",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
}
