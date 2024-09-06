import Link from "next/link";

interface ExcelFileDownloaderProps {
  path: string;
  text: string;
}

const ExcelFileDownloader: React.FC<ExcelFileDownloaderProps> = ({
  path,
  text,
}) => {
  return (
    <>
      <a href="/" target="_blank" download>
        {text}
      </a>
    </>
  );
};

export default ExcelFileDownloader;
