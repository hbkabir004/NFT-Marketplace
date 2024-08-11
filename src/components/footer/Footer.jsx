import MarketplaceLinks from "./MarketplaceLinks";
import MyAccountLinks from "./MyAccountLinks";
import NewsletterSubscription from "./NewsletterSubscription";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col rounded-none mx-[20%]">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-md:max-w-full">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-black">NFters</h2>
          <p className="self-stretch mt-7">
            {`The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.`}
          </p>
          <SocialIcons />
        </div>
        <MarketplaceLinks />
        <MyAccountLinks />
        <NewsletterSubscription />
      </div>
      <hr className="mt-16 w-full border border-solid border-zinc-100 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      <p className="self-center mt-4 text-sm leading-relaxed text-neutral-400">
        Copyright © 2022 Avi Yansah
      </p>
    </footer>
  );
}
