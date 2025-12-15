import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./ui/SidebarItem"



export const SideBar = () => {
    return <div className="h-screen bg-white border-r w-76 fixed left-0 top-0">
        <SidebarItem icon={<YoutubeIcon />} text={"Video"} />
        <SidebarItem icon={<TwitterIcon />} text={"Twitter"} />
    </div>
}