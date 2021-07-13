import { Layout } from 'antd'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const { Content } = Layout

const CommonLayout = ({ children }: any) => {
  return (
    <Layout>
      <NavBar></NavBar>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        {children}
      </Content>
      <Footer></Footer>
    </Layout>
  )
}

export default CommonLayout
