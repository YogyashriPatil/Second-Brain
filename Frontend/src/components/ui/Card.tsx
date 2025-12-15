import { DeleteIcon } from "../../icons/DeleteIcon"
import { Doc } from "../../icons/Doc"
import { ShareIcon } from "../../icons/ShareIcon"

interface CardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube"
}
export const Card = ({title, link, type} : CardProps) => {
    return <div >
        <div className="p-8 bg-white rounded-md shadow-md border-gray-200 max-w-80 border min-h-60">
            <div className="flex justify-between items-center">
                <div className="flex items-center text-lg">
                    <div className="pr-2 text-gray-500">
                        <Doc size="lg"/>
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon size="md" />
                        </a>
                    </div>

                    <div className="pr-2 text-gray-500">
                        <DeleteIcon size="lg" />
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type === "youtube" && <iframe className="w-full" width="560" height="315" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> }
                {/* for the output video <iframe className="w-full"></iframe> */}
                {/* add the twiiter embedding and the script add into the index.html file */}

                {type ==="twitter" &&
                <blockquote className="twitter-tweet"> 
                    <a href={link.replace("x.com","twitter.com")}></a>
                </blockquote> }
            </div>
        </div>
       
    </div>
}
