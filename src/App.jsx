import AmazeNFT from "./components/amaze-nft/NFTArtSection";
import FeaturedCollection from "./components/featured-collection/FeaturedCollection";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero-section/HeroSection";
import NFTCollection from "./components/nft-collection/NFTCollection";
import NFTDiscovery from "./components/nft-discovery/NFTDiscovery";
import SignUpNFT from "./components/sign-up-nft/SignUpNFT";
import TopeMenu from "./components/top-menu/TopMenu";

export default function App() {
  return (
    <>
      <TopeMenu />
      <HeroSection />
      <AmazeNFT />
      <NFTCollection />
      <FeaturedCollection />
      <SignUpNFT />
      <NFTDiscovery />
      <Footer />
    </>
  )
}