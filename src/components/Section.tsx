interface SectionProps {
  children: React.ReactNode | React.ReactNode[] | string | string[];
  doubledHeader?: boolean;
  header?: boolean;
  smaller?: boolean;
}

const Section: React.FC<SectionProps> = ({children, header, smaller, doubledHeader}) => {
  return ( 
    <div className={`pb-20 text-justify w-4/5 xl:w-[50%] 
      ${
        header ? 'text-2xl !text-center indent-0 font-bold !pb-4 xl:w-3/5' : ''
      } ${
        smaller ? 'text-xl !text-left indent-10 font-semibold !pb-2' : ''
      } ${
        doubledHeader ? 'text-3xl font-extrabold' : ''
      }
      `}>
      {children}
    </div>
   );
}
 
export default Section;