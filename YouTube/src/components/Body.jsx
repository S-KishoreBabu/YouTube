import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import SideBarMini from './SideBarMini'
import { Outlet } from 'react-router-dom'

const Body = ({sideBarActive}) => {
  return (
    <div className='  w-screen flex h-screen'>
        {(sideBarActive)?(<SideBarMini/>):(<Sidebar/>)}
        {/* <MainContainer/> */}
        <Outlet/>
    </div>
  )
}

export default Body