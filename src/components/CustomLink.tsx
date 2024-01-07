interface CustomLinkProps {
  href: string;
  text: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text }) => {
  return ( 
    <a href={href}>{text}</a>
   );
}
 
export default CustomLink;