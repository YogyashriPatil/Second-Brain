import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { InputBox } from "../components/ui/InputBox";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signup () {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        axios.post(`${BACKEND_URL} /api/v1/singup`,{
            data:{
                username,
                password
            }
        })
    }
    return <div className="h-screen w-screen bg-gray-400 flex justify-center items-center ">
        <div className="bg-white rounded border min-w-48 p-8">
            <InputBox ref={usernameRef} placeholder="Username"/>
            <InputBox ref={passwordRef} placeholder="Passowrd"/>
            <div className="flex justify-center">
                <Button onClick={signup} variant="primary" size="md" text="SignUp" loading={false} fullwidth={true} />
            </div>
        </div>

    </div>
}