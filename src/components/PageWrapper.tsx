import Section from "./Section";

interface PageWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return ( 
    <div className="flex flex-col justify-center items-center pt-14 w-full" id="pageTop">
      {children}
      <Section header>
        <a onClick={scrollToTop} className="text-xl cursor-pointer anchor border-b-2 border-black">В начало</a>
      </Section>
    </div>
   );
}
 
export default PageWrapper;