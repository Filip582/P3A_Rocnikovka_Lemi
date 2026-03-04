import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Vítej v tréninkové sekci!</h1>
      <p>Tohle je tvůj super-tajný dashboard pro ID: {user?.id}</p>
    </div>
  );
}
