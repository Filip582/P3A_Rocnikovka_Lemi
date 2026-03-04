import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  const { data: profile } = await supabase.from('profiles').select('username').eq('id', user?.id).single();
  
  if (!profile?.username) {
    redirect("/onboarding");
  }

  return <>{children}</>;
}
