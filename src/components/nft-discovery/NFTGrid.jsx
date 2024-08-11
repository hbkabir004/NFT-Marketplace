export default function NFTGrid({ images }) {
  const rows = Math.ceil(images.length / 4);

  return (
    <>
      {[...Array(rows)].map((_, rowIndex) => (
        <div
          key={rowIndex}
          className={`mt-${rowIndex === 0 ? "9" : "10"} max-md:max-w-full`}
        >
          <div className="flex gap-5 max-md:flex-col">
            {images
              .slice(rowIndex * 4, (rowIndex + 1) * 4)
              .map((src, index) => (
                <div
                  key={index}
                  className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
                >
                  <img
                    loading="lazy"
                    src={src}
                    alt={`NFT ${rowIndex * 4 + index + 1}`}
                    className="object-contain grow shrink-0 max-w-full aspect-[0.73] w-[272px] max-md:mt-9"
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
