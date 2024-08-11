export default function MyAccountLinks() {
  const links = ["Profile", "Favorite", "My Collections", "Settings"];

  return (
    <nav className="flex flex-col mt-1">
      <h3 className="text-lg font-bold text-black">My Account</h3>
      <ul className="mt-6 text-sm leading-7 text-neutral-700 max-md:mr-2">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}
