"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { create } from "node:domain";

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email || !password) {
        return redirect("/login?message=Wrong name or password");
    }
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return redirect("/login?message=" + error.message);
    }

    return redirect("/");
}

export async function signUp(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email || !password) {
        return redirect("/signUp?message=Wrong name or password");
    }

    const supabase = await createClient();
    const { error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return redirect("/signUp?message=" + error.message);
    }

    return redirect("/");
}

export async function signInWithGoogle() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/auth/callback`,
    },
  });

  if (error) {
    return redirect("/login?message=Could not authenticate with Google");
  }

  if (data.url) {
    redirect(data.url);
  }
}
