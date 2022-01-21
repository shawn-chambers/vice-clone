import Header from './Header';

interface Props {
  children: React.ReactNode[] | React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout;