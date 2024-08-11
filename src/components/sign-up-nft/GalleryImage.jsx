export default function GalleryImage({ src, className, alt = "signup-image" }) {
  return (<>
    <img loading="lazy" src={src} className={className} alt={alt} />
  </>);
}
