import Navigation from "./components/Navigation";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return ( 
    <div id="pageTop">
      <Navigation/>
      {children}
    </div>
   );
}
 
export default Layout;