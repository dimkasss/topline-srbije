import Image, { StaticImageData } from "next/image";

interface ImageProps {
  img: string | StaticImageData;
  width: number;
  alt: string;
}

const CustomImage: React.FC<ImageProps> = ({ img, width, alt }) => {
  return (
    <div className="flex justify-center py-4">
      <Image src={img} width={width} alt={alt} />
    </div>
  );
};

export default CustomImage;
