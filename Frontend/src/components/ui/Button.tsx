type Variants = "primary" | "secondary"
interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" |"lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void ;
}
const variantStyle = {
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-400 text-purple-600"
}
const sizeStyles = {
    "sm": "px-4 py-2",
    "md": "px-6 py-3",
    "lg": "px-8 py-4",
}
const defaultStyles = "rounded-md flex font-notmal"
export const Button = (props : ButtonProps) => {
    return <button onClick={props.onClick} className={`${variantStyle[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} cursor-pointer`}>
        <div className="flex items-center">
            <div className="pr-3">{props.startIcon}</div> 
            <div className="pl-2 pr-3">{props.text}</div>
            {props.endIcon}
        </div>
    </button>
}
// <Button variant="primary" size="md" onClick={() => {}} text="asdf" endIcon={"+"}/>