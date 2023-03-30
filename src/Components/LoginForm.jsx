import { useState } from "react";
import {auth} from "../Utils/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const input = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        signInWithEmailAndPassword(auth, input.email, input.password)
            .then(() => {
                window.location = "/"
            })
            .catch(() => {
                setEmail("")
                setPass("")
            })
    }
    return (
        <form className="p-6 space-y-4 text-center text-white rounded-lg bg-secondary" onSubmit={handleSubmit}>
            <label className="block">
                Email
                <input value={email} onChange={(emailVal) => {
                    setEmail(emailVal.target.value);
                }} className="ml-4 text-black rounded-md shadow-md" type="email" name="email" id="email" />
            </label>
            <label className="block">
                Password
                <input value={pass} onChange={(passVal) => {
                    setPass(passVal.target.value)
                }} className="ml-4 text-black rounded-md shadow-md" type="password" name="password" id="password" />
            </label>
            <button className="px-2 py-1 rounded-md bg-primary" type="submit">Login</button>
        </form>
    )
}