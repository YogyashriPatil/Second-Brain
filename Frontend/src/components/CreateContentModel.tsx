import { useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { InputBox } from "./ui/InputBox";
import { Button } from "./ui/Button";

export function CreateContentModel({open, onClose}){
    const [modalOpen, setModalOpen] = useState(false);

    return <div>
        {open && <div className="w-screen h-screen bg-slate-300 fixed top-0 left-0 opacity-65 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100">
                    <div className="flex justify-end">
                        <CrossIcon />
                    </div>
                    <div>
                        <InputBox placeholder="Title" />
                        <InputBox placeholder="Link" />
                        <InputBox placeholder="Type" />
                    </div>
                    <div className="flex justify-center">
                        <Button variant="primary" text="Submit" size="lg" />
                    </div>
                </span>
            </div>
            
        </div> }
    </div>
}