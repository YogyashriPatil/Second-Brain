import { Button } from "../components/ui/Button";
import { InputBox } from "../components/ui/InputBox";

export function Signup () {
    return <div className="h-screen w-screen bg-gray-400 flex justify-center items-center ">
        <div className="bg-white rounded border min-w-48 p-8">
            <InputBox placeholder="Username"/>
            <InputBox placeholder="Passowrd"/>
            <div className="flex justify-center">
                <Button variant="primary" size="md" text="SignUp" loading={false} fullwidth={true} />
            </div>
        </div>

    </div>
}