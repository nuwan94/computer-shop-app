import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Popconfirm, Space } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import router from 'next/router'

function ProfilePage() {
  const { user } = useUser()

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Space direction="vertical">
            {user && (
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            )}
        </Space>
      </div>
    </>
  )
}

export default ProfilePage

export const getServerSideProps = withPageAuthRequired()
