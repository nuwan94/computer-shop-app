import { useUser } from '@auth0/nextjs-auth0'
import { Avatar, Badge, Image, Menu } from 'antd'
import Link from 'next/link'
import router from 'next/router'
import React from 'react'
const { SubMenu, Item } = Menu

const AvatarWithCount = ({ user }: any) => {
  return (
    <Avatar
      src={
        <Image
          src={user?.picture || ''}
          alt={user?.name || ''}
          preview={false}
        />
      }
    />
  )
}

const NavUser = () => {
  const { user } = useUser()

  return !user ? (
    <Item key="login" style={{ position: 'absolute', top: 0, right: 0 }}>
      <Link href="/api/auth/login">Login</Link>
    </Item>
  ) : (
    <SubMenu
      key="user-menu"
      icon={<AvatarWithCount user={user} />}
      title={' ' + user.name}
      style={{ position: 'absolute', top: 0, right: 0 }}
    >
      <Item key="profile">
        <Link href="/profile">Profile</Link>
      </Item>
      <Item key="logout">
        <Link href="/api/auth/logout">Logout</Link>
      </Item>
    </SubMenu>
  )
}

export default NavUser
