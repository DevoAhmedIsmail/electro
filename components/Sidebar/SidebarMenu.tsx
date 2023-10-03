import React from 'react'
import SideBarMenuItem from './SideBarMenuItem'

const SidebarMenu = () => {
  return (
    <div className='flex flex-col divide-y-2'>
        <SideBarMenuItem link='/' title='Mabel' subLinks={[{id: 1, title: "asd", link: "/"},{id: 2, title: "test", link: "/"}]} />
        <SideBarMenuItem link='/' title='Jeremy' />
        <SideBarMenuItem link='/' title='Isabel' />
    </div>
  )
}

export default SidebarMenu