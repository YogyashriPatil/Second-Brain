interface InputProps {
    placeholder: string;
    ref?:any
}
export const InputBox = ({placeholder,ref}: InputProps) => {
    return <div>
        <input ref={ref} type="text" className="px-4 py-2 border rounded-2xl m-2" placeholder={placeholder}></input>
    </div>
}