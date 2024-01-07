import Navigation from "./components/Navigation";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return ( 
    <>
      <Navigation />
      {children}
    </>
   );
}
 
export default Layout;