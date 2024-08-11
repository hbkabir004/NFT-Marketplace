import ExploreButton from "./ExploreButton";
import StatisticItem from "./StatisticItem";

function HeroSection() {
  const statistics = [
    { value: "98", label: "K+", category: "Artwork" },
    { value: "12", label: "K+", category: "Auction" },
    { value: "15", label: "K+", category: "Artist" },
  ];

  return (
    <section className="mt-[57px] mb-[122px] mx-[17%]">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch my-auto w-full text-4xl text-black max-md:mt-10 max-md:max-w-full">
            <h1 className="self-stretch tracking-[2px] max-md:max-w-full">
              Discover, and collect Digital Art NFTs
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600 w-[471px] max-md:max-w-full">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>

            <div className="bg-[url('/images/hero/Dot.png')] flex-start bg-no-repeat relative">
              <ExploreButton />
              <div className="flex gap-6 mt-8 tracking-[2px]">
                {statistics.map((stat, index) => (
                  <StatisticItem
                    key={index}
                    value={stat.value}
                    label={stat.label}
                    category={stat.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/images/hero/hero-cards.png"
            alt="NFT Artwork"
            className="object-contain grow w-full rounded-3xl aspect-[1.18] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
