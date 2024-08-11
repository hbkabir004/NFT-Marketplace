function CollectionCard({ imageSrc, title, stock, avatarSrc, highestBid }) {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-contain w-full rounded-3xl aspect-[0.94]"
        />
        <div className="flex gap-5 justify-between mt-8 w-full max-md:mr-0.5">
          <div className="flex gap-2.5">
            <img
              loading="lazy"
              src={avatarSrc}
              alt="Avatar"
              className="object-contain shrink-0 w-12 rounded-full aspect-square"
            />
            <div className="flex flex-col dm-sans-font">
              <h2 className="text-xl font-bold text-black">{title}</h2>
              <p className="self-start mt-1 text-sm text-neutral-700">
                {stock}
              </p>
            </div>
          </div>
          <div className="flex flex-col self-start text-neutral-700 dm-sans-font">
            <p className="self-start text-xs">Highest Bid</p>
            <div className="flex gap-2.5 mt-3.5 text-base font-bold">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f4e425cc13079647bc3e333135c79d971909f681548edc906d709819cdd1cc8?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6"
                alt="ETH icon"
                className="object-contain shrink-0 aspect-[0.62] w-[13px]"
              />
              <span>{highestBid}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
