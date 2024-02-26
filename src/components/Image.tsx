interface ImageProps {
  img: string;
  width: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ img, width, alt }) => {
  return (
    <div className="flex justify-center py-4">
      <img src={img} width={width} alt={alt} />
    </div>
  );
};

export default Image;
