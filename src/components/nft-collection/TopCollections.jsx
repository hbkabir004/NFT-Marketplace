import React from "react";

function TopCollections() {
  const collections = [
    {
      rank: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4c95227b-09cb-4411-8342-22ce54243741?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      name: "CryptoFunks",
      value: "19,769.39",
      change: "+26.52%",
    },
    {
      rank: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e754bd3d3908bdbd7bf2cc082b27559c77bf9ef93bd5d2da9568294a998c3665?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      name: "Cryptix",
      value: "2,769.39",
      change: "+10.52%",
    },
    {
      rank: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/04259ec973cf75c1ffed249b99492ce9bce89eb268a95d251fca0652040cd4cc?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      name: "Frensware",
      value: "9,232.39",
      change: "+2.52%",
    },
    {
      rank: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f3d4e503-ae76-4421-8fda-7635a8fb740e?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      name: "PunkArt",
      value: "3,769.39",
      change: "+1.52%",
    },
    {
      rank: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f410275ac8644abd8b38a5c2b12eb7f53a62e51887f50a2abe2800d67b4347ac?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      name: "Art Crypto",
      value: "10,769.39",
      change: "+2.52%",
    },
  ];

  return (
    <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-9 max-md:mt-10">
        <div className="shrink-0 w-px border border-gray-200 border-solid h-[540px]" />
        <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
          <div className="flex flex-col items-start px-0.5 w-full">
            <h2 className="text-xl font-bold text-black">
              Top Collections over
            </h2>
            <p className="mt-2.5 text-lg font-bold text-violet-800">
              Last 7 days
            </p>
            {collections.map((collection, index) => (
              <React.Fragment key={index}>
                <div className="flex gap-5 items-center self-stretch mt-8 leading-none whitespace-nowrap dm-sans-fonts">
                  <div className="grow self-stretch my-auto text-2xl font-bold tracking-tight text-center text-black">
                    {collection.rank}
                  </div>
                  <img
                    loading="lazy"
                    src={collection.image}
                    alt={collection.name}
                    className="object-contain shrink-0 self-stretch rounded-full aspect-square w-[66px]"
                  />
                  <div className="flex flex-col self-stretch my-auto">
                    <div className="self-start text-base tracking-tight text-black">
                      {collection.name}
                    </div>
                    <div className="flex gap-9 items-start font-semibold">
                      <div className="flex flex-1 gap-1.5 mt-2.5 text-sm tracking-tight text-zinc-600">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2a23c44e3e1ddf92396a2a13db154fbd954533f2a744a61809e87e5e4228f5?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6"
                          alt="ETH icon"
                          className="object-contain shrink-0 aspect-[0.63] w-[15px]"
                        />
                        <div className="my-auto">{collection.value}</div>
                      </div>
                      <div
                        className={`text-xl tracking-tight text-right ${collection.change.startsWith("+")
                          ? "text-teal-500"
                          : "text-rose-600"
                          }`}
                      >
                        {collection.change}
                      </div>
                    </div>
                  </div>
                </div>
                {index < collections.length - 1 && (
                  <div className="shrink-0 mt-4 h-px border border-solid border-zinc-100" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCollections;
