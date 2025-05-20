"use client"


import { useState, useEffect, useRef } from "react";

import supabase from "../utils/supabase";
import type { Session } from '@supabase/supabase-js';

import { Button } from "@/components/ui/button";

import { toast } from "sonner"

export default function HomePage() {

    const [input1, setInput1] = useState<string>("");
    const [input2, setInput2] = useState<string>("");

    const [session, setSession] = useState<Session | null>(null)
    
      useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            if (session && session.user.email != "skparab1@gmail.com"){
                location.href = "/auth";
            }
        })
    
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            if (session && session.user.email != "skparab1@gmail.com"){
                location.href = "/auth";
            }
        })
    
        return () => subscription.unsubscribe()
      }, [])


    async function handleSubmit(input1: string, input2: string) {
        const splitRunners = input1.split(",");

        const splitHunters = input2.split(",");


        const { error } = await supabase.from('hunts').insert({ runners: splitRunners, hunters: splitHunters});
        
        setInput1("");
        setInput2("");

        alert("Hunt started");
    }

    async function terminate() {
        const { error } = await supabase.from('hunts').insert({});
        alert("Hunt terminated");
    }

    return (
        <>
        <div className="w-full bg-slate-800 text-white h-10 absolute t-0">
            <h1 className="absolute l-0 m-2">Manhunt • ADMIN</h1>
        </div>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-stone-300">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <input
                    type="text"
                    className="border-2 border-black border-solid bg-gray-200 rounded-md p-2"
                    placeholder="Enter Running Team Members"
                    value={input1}
                    onChange={e => setInput1(e.target.value)}
                />

                <input
                    type="text"
                    className="border-2 border-black border-solid bg-gray-200 rounded-md p-2"
                    placeholder="Enter Running Team Members"
                    value={input2}
                    onChange={e => setInput2(e.target.value)}
                />

                <Button onClick={() => handleSubmit(input1, input2)}>
                    Submit
                </Button>

                <Button onClick={() => terminate()}>
                    Terminate current hunt
                </Button>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            
            </footer>
        </div>
        </>
    );
}

