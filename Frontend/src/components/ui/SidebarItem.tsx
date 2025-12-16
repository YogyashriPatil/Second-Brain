import type { ReactElement } from "react";

export const SidebarItem = ({text,icon}: {
    text:string;
    icon: ReactElement
}) => {
    return <div className="flex text-gray-700 hover:bg-gray-200 rounded-2xl max-w-48">
        
        <div className="p-2">
            {icon} 
        </div>
        <div className="p-2">
             {text}
        </div>
        
    </div>
}