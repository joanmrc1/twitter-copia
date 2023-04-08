
import { BsHouseFill, BsBellFill } from "react-icons/bs" 
import { FaUser } from "react-icons/fa" 
import { BiLogOut } from "react-icons/bi" 
import SidbarLogo from "./SidbarLogo"
import SidbarItem from "./SidbarItem"
import SidebarTweetButton from "./SidebarTweetButton"

const Sidbar = () => {
  const items = [
    {
      label: "home",
      href: "/",
      icon: BsHouseFill
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill
    },
    {
      label: "Profile",
      href: "/users",
      icon: FaUser
    }
  ]

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidbarLogo  />

          {items.map((item) => (
            <SidbarItem 
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}

          <SidbarItem onClick = {() => {}} icon={BiLogOut} label="Logout"/>
          
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  )
}

export default Sidbar;