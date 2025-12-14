interface CardProps {
    title: string,
    logo: any,
    description: string,
    imageLink?: any
    time?: string
}
export const Card = (props: CardProps) => {
    return <div className="border-2 border-zinc-900 w-60 h-40 rounded-2xl">
        <div>
            <div>
                {props.logo}
            </div>
            <div>
                {props.title}
                {props.time}
            </div>
        </div>

        <div>
            {props.description}
            {props.imageLink}
        </div>

    </div>
}