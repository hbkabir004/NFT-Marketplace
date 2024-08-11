export default function CollectionCard({
  mainImage,
  smallImages,
  title,
  creator,
  creatorImage,
  totalItems,
}) {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-2.5 max-md:mt-8">
        <div className="flex flex-col grow shrink-0 items-start text-black basis-0 w-fit">
          <img
            loading="lazy"
            src={mainImage}
            alt={`Main image of ${title}`}
            className="object-contain self-stretch w-full rounded-xl aspect-[0.98]"
          />
          <h3 className="mt-8 text-xl font-bold dm-sans-font">{title}</h3>
          <div className="flex gap-2.5 mt-2.5 text-sm">
            <img
              loading="lazy"
              src={creatorImage}
              alt={`${creator}'s profile`}
              className="object-contain shrink-0 w-7 rounded-full aspect-square"
            />
            <span className="my-auto">by {creator}</span>
          </div>
        </div>
        <div className="flex flex-col text-xs font-bold text-blue-700">
          {smallImages.map((img, index) => (
            <img
              key={index}
              loading="lazy"
              src={img}
              alt={`Small image ${index + 1} of ${title}`}
              className="object-contain mt-2.5 rounded-xl aspect-[1.22] w-[104px]"
            />
          ))}
          <div className="gap-1.5 self-stretch px-3 py-2 mt-16 border border-blue-700 border-solid min-h-[29px] rounded-[60px] w-[75px] max-md:mt-10 dm-sans-font hover:bg-blue-500 hover:text-white">
            Total {totalItems} Items
          </div>
        </div>
      </div>
    </article>
  );
}
