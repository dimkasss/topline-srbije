interface ExcelFileDownloaderProps {
  fileName: string;
  text: string;
}

const ExcelFileDownloader: React.FC<ExcelFileDownloaderProps> = ({
  fileName,
  text,
}) => {
  return (
    <>
      <a href={`src/assets/downloads/${fileName}`} target="_blank" download>
        {text}
      </a>
    </>
  );
};

export default ExcelFileDownloader;
