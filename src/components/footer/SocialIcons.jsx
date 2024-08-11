export default function SocialIcons() {
  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/596075527463e7d92409fba0cd06bc46dd018f559236c91aa7c0ee0e572196d3?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      alt: "Social media icon 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f56bf87c0714bf943b127db18e11b77be8f6e384e8c9cd755d249ee66d723868?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      alt: "Social media icon 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e8bef523728987bc98334a0f79ebd136c8a36d0bc1daf97dc55248bb6a18fb4?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      alt: "Social media icon 3",
    },
  ];

  return (
    <div className="flex gap-4 mt-8">
      {icons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain shrink-0 w-9 aspect-square"
        />
      ))}
    </div>
  );
}
