import { createClient } from "@/utils/supabase/server";
import { logout } from "./login/actions";
import { LogOut } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const showAdminBar = Boolean(user);

  return (
    <>
      {showAdminBar && (
        <div className="mx-auto w-[95%] md:max-w-7xl py-3 flex items-center justify-end gap-3 text-sm text-gray-700">
          <span className="truncate max-w-[200px]">
            {user?.user_metadata?.full_name ?? user?.email}
          </span>

          <form action={logout}>
            <button
              type="submit"
              className="p-1 hover:text-black transition hover:cursor-pointer"
              aria-label="Logout"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </form>
        </div>
      )}

      {children}
    </>
  );
}
