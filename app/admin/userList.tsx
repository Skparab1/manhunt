"use client"


import { useState, useEffect, useRef } from "react";

import supabase from "../utils/supabase";
// import adminAuthClient from "../utils/supabase-auth";
import type { Session } from '@supabase/supabase-js';
import createSupbaseServerClient from "../utils/supabase-auth";

import { getUsers } from "../utils/supabase-auth";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";

type UserListProps = {
    users: string[];
};

export default function UserList({ users }: UserListProps) {

    const [session, setSession] = useState<Session | null>(null)

    const [hunts, setHunts] = useState<any[]>([]);


    useEffect(() => {
        supabase
            .from("hunts")
            .select()
            .then(async ({ data }) => {
                const datasorted = data?.sort((a, b) => {
                    if (!a.id || !b.id) {
                        return 0;
                    }
                    return a.id - b.id;
                });

                setHunts(datasorted ?? []);
            });
    }, []);

    useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
    })

    const {
        data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
    })

    return () => subscription.unsubscribe()
    }, [])

    // useEffect(() => {
    //     async function fetchUsers() {
    //         const users = await getUsers();
    //         setUserList(users);
    //     }
    //     fetchUsers();
    // }, []);

    async function clientFetchUsers() {
        let userListFinal = await getUsers();
        console.log("jabari");
        console.log(userListFinal);

    }

    useEffect(() => {
        clientFetchUsers();
    }, []);

    // console.log(getUsers());
    // clientFetchUsers();


    async function startRun(runners : string[], hunters: string[]) {
        if (runners.length == 0 || hunters.length == 0) {
            toast("Please select at least one runner and one hunter");
            return;
        }

        const { error } = await supabase.from('hunts').insert({ runners, hunters});
        if (error) {
            console.error(error);
        } else {
            toast("Hunt started");
        }

        supabase
            .from("hunts")
            .select()
            .then(async ({ data }) => {
                const datasorted = data?.sort((a, b) => {
                    if (!a.id || !b.id) {
                        return 0;
                    }
                    return a.id - b.id;
                });

                setHunts(datasorted ?? []);
            });
    }

    async function handleSubmit() {

        let runnersArray = [];
        let huntersArray = [];

        let i = 0;
        while (i < users.length) {
            const checkElement = document.getElementById("checkbox"+users[i]);
            if (!(checkElement as HTMLInputElement)?.checked){
                runnersArray.push(users[i]);
            } else {
                huntersArray.push(users[i]);
            }

            (checkElement as HTMLInputElement).checked = false;
            i++;
        }

        startRun(runnersArray, huntersArray);
    }

    async function terminate() {
        const { error } = await supabase.from('hunts').insert({});
        toast("Hunt terminated");
        setHunts((prev : any) => [...prev, { id: null, runners: null, hunters: null, created_at: null }]);
    }

    function handleHighlight(id: string) {
        console.log("highlighting",id);
        const checkElement = document.getElementById("checkbox"+id);
        const divElement = document.getElementById("div"+id);
        if ((checkElement as HTMLInputElement)?.checked){
            divElement?.classList.add("bg-green-200");
            divElement?.classList.remove("bg-gray-200");
            (checkElement as HTMLInputElement).checked = false;
        } else {
            divElement?.classList.add("bg-gray-200");
            divElement?.classList.remove("bg-green-200");
            (checkElement as HTMLInputElement).checked = true;
        }
    }



    return (
        <>
            {(session && session.user.email == "skparab1@gmail.com") ? (
            <>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">Select Runners</h1>
                    {users.map((user: string) => (
                        <div key={user} id={"div"+user} className="bg-gray-200 p-2 rounded-md w-full transition-all duration-200 text-center" onClick={() => handleHighlight(user)}>
                            <input
                                id={"checkbox"+user}
                                type="checkbox"
                                className="m-2 hidden"
                                onChange={() => handleHighlight(user)}
                                defaultChecked
                            />
                            <label>{user}</label>
                        </div>
                    ))}
                </div>

                <Button onClick={() => handleSubmit()}>
                    Start Hunt
                </Button>

                <Button onClick={() => terminate()}>
                    Terminate current hunt
                </Button>


                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl text-center">Previous Hunts</h1>
                    {[...hunts].reverse().map((hunt: any) => (
                        (hunt.runners && (
                            <div
                                key={hunt.id}
                                className={`p-2 rounded-md w-full text-center ${
                                    hunt.id === hunts[hunts.length - 1]?.id ? "bg-green-200" : "bg-gray-200"
                                }`}
                            >
                                <h2 className="font-bold">Runners:</h2>
                                <ul>
                                    {hunt.runners?.map((runner: string) => (
                                        <li key={runner}>{runner}</li>
                                    ))}
                                </ul>
                                <h2 className="font-bold mt-2">Hunters:</h2>
                                <ul>
                                    {hunt.hunters?.map((hunter: string) => (
                                        <li key={hunter}>{hunter}</li>
                                    ))}
                                </ul>
                                <h2 className="font-bold mt-2 mb-2">{new Date(hunt.created_at).toLocaleString()}</h2>
                                <Button onClick={() => startRun(hunt.runners || [], hunt.hunters || [])}>
                                    Run again
                                </Button>
                            </div>
                        ))
                    ))}
                </div>
            </>
            ) : !session ? (
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">Authenticating...</h1>
                </div>
            ) : (
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl text-center">You don't have access to this mang</h1>
                    <h1 className="text-2xl text-center">Please contact Jabari</h1>
                    <Button>
                        <a href="/">Forgive me, get me out of this</a>
                    </Button>
                </div>
            )}
        </>
    );
}

