export const SidebarItem = ({text,icon}) => {
    return <div className="flex text-gray-700">
        <div className="p-2">
            {icon} 
        </div>
        <div className="p-2">
             {text}
        </div>
        
    </div>
}