import { getUsers } from "../utils/supabase-auth";

import UserList from "./userList";

export default async function HomePage() {
    async function clientFetchUsers() {
        let userListFinal = await getUsers();
        console.log("jabari");
        console.log(userListFinal);
        return userListFinal;
    }

    let users = await clientFetchUsers();

    return (
        <>

            <div className="w-full bg-slate-800 text-white h-10 absolute t-0">
                <h1 className="absolute l-0 m-2">Manhunt • ADMIN</h1>
                
            </div>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-stone-300">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

                <UserList users={users || []} />

                </main>
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                
                </footer>
            </div>
        </>
    );
}

