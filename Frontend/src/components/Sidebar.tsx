import { BrainIcon } from "../icons/BrainIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./ui/SidebarItem"



export const SideBar = () => {
    return <div className="h-screen bg-white border-r w-76 fixed left-0 top-0 pl-6">
        <div className="flex text-gray-700 text-3xl pt-6">
            <div className="pr-4 text-purple-500">
                <BrainIcon />
            </div>
            Second Brain
        </div>
        <div className="pt-4 pl-4" >
            <SidebarItem icon={<YoutubeIcon />} text={"Video"} />
            <SidebarItem icon={<TwitterIcon />} text={"Twitter"} />
        </div>
    </div>
}