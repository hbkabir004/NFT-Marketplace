function NFTCard({ title, avatarSrc, price, edition }) {
  const isPlaceBid = title === "The Futr Abstr";

  return (
    <>
      <h3 className="mt-16 text-xl font-bold text-black max-md:mt-10">
        {title}
      </h3>
      <div className="flex gap-2 self-stretch mt-2 w-full">
        <img
          loading="lazy"
          src={avatarSrc}
          alt="Avatar"
          className="object-contain shrink-0 rounded-full aspect-square w-[34px]"
        />
        <div className="flex gap-1.5 justify-center items-center self-start p-2 text-xs font-bold text-green-600 rounded-md border border-green-600 border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/85327fe6d4025f4a5684db7aa42affa5194e3a0c1b5f3fd812e1e1ec10882628?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6"
            alt="ETH icon"
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.64] w-[9px]"
          />
          <div className="self-stretch my-auto">{price}</div>
        </div>
        <div className="my-auto text-sm text-neutral-500">{edition}</div>
      </div>
      <button
        className={`gap-2.5 self-stretch px-5 py-3.5 mt-4 text-sm ${isPlaceBid
            ? "text-white bg-violet-800"
            : "border-2 border-violet-800 border-solid text-violet-950"
          } rounded-[50px]`}
      >
        Place a bid
      </button>
    </>
  );
}

export default NFTCard;
