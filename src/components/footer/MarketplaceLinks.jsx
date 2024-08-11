export default function MarketplaceLinks() {
  const links = [
    "All NFTs",
    "New",
    "Art",
    "Sports",
    "Utility",
    "Music",
    "Domain Name",
  ];

  return (
    <nav className="flex flex-col self-stretch mt-1">
      <h3 className="text-lg font-bold text-black">Market Place</h3>
      <ul className="self-start mt-6 text-sm leading-7 text-neutral-700">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}
