import { Layout, Menu } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavUser from './NavUser'
const { Item } = Menu

const { Header } = Layout

const NavBar = () => {
  const { pathname } = useRouter()
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[pathname.slice(1)]}
      >
        <Item key="">
          <Link href="/">Home</Link>
        </Item>
        <Item key="products">
          <Link href="/products">Products</Link>
        </Item>
        <NavUser />
      </Menu>
    </Header>
  )
}

export default NavBar
