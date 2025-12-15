export const InputBox = ({onChange, placeholder}: {onChange: () => void}) => {
    return <div>
        <input type="text" className="px-4 py-2 border rounded-2xl m-2" onChange={onChange} placeholder={placeholder}></input>
    </div>
}