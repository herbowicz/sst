import { Auth } from "aws-amplify";
import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        try {
            await Auth.signIn(email, password);
            alert("Logged in");
        } catch (error) {
            // Prints the full error
            console.error(error);
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert(String(error));
            }
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <p id="email">
                    <label>Email</label>
                    <input
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p id="password">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </p>
                <button type="submit" disabled={!validateForm()}>
                    Login
                </button>
            </form>
        </div>
    );
}