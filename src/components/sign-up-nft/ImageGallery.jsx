import GalleryImage from "./GalleryImage";

export default function ImageGallery() {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0634fda-49c4-47b6-a3c9-6a76f5e84da7?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      className:
        "object-contain self-start w-full rounded-xl aspect-square ",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aef6a6f6d45fc07e328a1dad94be13e5b90d103725dbe2c6b2a59569b0c6885e?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      className: "object-contain max-w-full rounded-xl aspect-[0.91] w-[195px]",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/249b34a3425fa3b565cb77c3316aea6c868092a0ac3bf28ef98e5e13ec9aa46e?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      className: "object-contain self-end w-20 aspect-square",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/11634111-6624-4d3d-af28-e7674f237180?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
      className:
        "object-contain shrink-0 self-stretch m-auto rounded-xl aspect-square  w-[277px] max-md:mt-10",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-6">
          <GalleryImage {...images[0]} />
          <div className="flex flex-col self-end mt-5 max-w-full w-[235px]">
            <GalleryImage {...images[1]} />
            <GalleryImage {...images[2]} />
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
        <GalleryImage {...images[3]} />
      </div>
    </>
  );
}
