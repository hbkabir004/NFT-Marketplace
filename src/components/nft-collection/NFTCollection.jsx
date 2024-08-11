import CollectionCard from "./CollectionCard";
import NFTCard from "./NFTCard";
import TopCollections from "./TopCollections";


export default function NFTCollection() {
  const nftCards = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dcfa740ae7dc9fad0d1d79498b9422b2806356dbcc9b836b06139f7b76aee8d1?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      title: "The Futr Abstr",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c238cdb05180a3396c8d3ad8df65fa8cbd73d67ea237b885f00a443e07493299?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      price: "0.25 ETH",
      edition: "1 of 8",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e55ca56a17ee7370545586f453b3c0f57f144e5cdb3ead0c27e2ee78bb199400?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      title: "The Futr Abstr",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c238cdb05180a3396c8d3ad8df65fa8cbd73d67ea237b885f00a443e07493299?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      price: "0.25 ETH",
      edition: "1 of 8",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8988a128fea465b3445314c37cf4ae14fca1c0fae55acf237dd9747a26358744?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      title: "The Futr Abstr",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c238cdb05180a3396c8d3ad8df65fa8cbd73d67ea237b885f00a443e07493299?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      price: "0.25 ETH",
      edition: "1 of 8",
    },
  ];

  return (
    <section className="my-[134px] px-[17%]">
      <div className="flex gap-5 max-md:flex-col">
        <CollectionCard
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/566e57b49f98685919541c5e537d07471ca37882daaa3125a0307fca3c7ca0f4?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6"
          title="The Futr Abstr"
          stock="10 in the stock"
          avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/eaaff346931d5412713029d7c3fb06fcda97844c5bfe9b008d913009623cfd98?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6"
          highestBid="0.25 ETH"
        />
        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 max-md:mt-10">
            <div className="flex flex-col">
              {nftCards.map((card, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={card.imageSrc}
                  alt={`NFT ${index + 1}`}
                  className="object-contain mt-10 rounded-xl aspect-square w-[147px] max-md:mt-10"
                  style={{ marginTop: index === 0 ? "0" : "" }}
                />
              ))}
            </div>
            <div className="flex flex-col items-start mt-2.5">
              {nftCards.map((card, index) => (
                <NFTCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
        <TopCollections />
      </div>
    </section>
  );
}
