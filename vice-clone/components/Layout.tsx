import Header from './Header';
import { MenuProps } from '../utils/interfaces'

interface LayoutProps extends MenuProps {
  children: React.ReactNode[] | React.ReactNode,
}

const Layout = ({ children, menu, displayMenu }: LayoutProps) => {
  return (
    <>
      <Header menu={menu} displayMenu={displayMenu}/>
      {children}
    </>
  )
}

export default Layout;