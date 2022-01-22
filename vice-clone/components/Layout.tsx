import Header from './Header';
import { MenuProps } from '../utils/interfaces'
import Menu from './Menu';

interface LayoutProps extends MenuProps {
  children: React.ReactNode[] | React.ReactNode,
}

const Layout = ({ children, menu, displayMenu }: LayoutProps) => {
  return (
    <>
      <Header menu={menu} displayMenu={displayMenu} />
      {
        menu ? <Menu /> : children
      }
    </>
  )
}

export default Layout;