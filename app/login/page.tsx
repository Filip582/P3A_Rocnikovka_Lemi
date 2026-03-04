"use client";
import { signInWithGoogle, login, signUp } from "./actions";
import { useState } from "react";
import Lemi from "@/components/Lemi-mascot";
export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex flex-col items-center gap-3">
          <Lemi />
          <h1 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground">
            Welcome to Lemi
          </h1>
          <p className="text-center text-sm text-muted-foreground">
            Track your trampoline training like never before.
          </p>
        </div>
        <div>
          <h1>{isSignUp ? "Sign Up" : "Login"}</h1>
          <form action={isSignUp ? signUp : login}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </p>
            <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </form>
          <button type="button" onClick={signInWithGoogle}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
