import ContentSection from "./ContentSection";
import ImageGallery from "./ImageGallery";

export default function SignUpNFT() {
  return (
    <section className="my-[82px] mx-[20%]">
      <div className="flex gap-5 max-md:flex-col">
        <ImageGallery />
        <ContentSection />
      </div>
    </section>
  );
}
