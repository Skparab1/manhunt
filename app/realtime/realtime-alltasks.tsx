"use client"

import { useState, useEffect } from "react";

import supabase from "../utils/supabase";

import type { Session } from '@supabase/supabase-js'

import { toast } from "sonner"


export default function AllTasksStream({ theChallenge }: { theChallenge: [string, number, number][]}) { 

    const [allChallenges, setAllChallenges] = useState<[string, number, number][]>(theChallenge);

    const [ptask, setPtask] = useState<string>("");

    useEffect(() => {
        setAllChallenges(prev => prev.length === 0 ? theChallenge : prev);
    }, [theChallenge]);

    useEffect(() => {
        const channel = supabase.channel("realtimestream:alltasks-stream").on("postgres_changes", {
            event: "INSERT",
            schema: "public",
            table: "tasks"
        }, (payload: { new: any }) => {
            console.log({payload});

            console.log(payload.new);

            console.log("<" + ptask + "> <" + String(payload.new.task) + ">");

            
            setAllChallenges(prevChallenges => {
                if (
                    prevChallenges.length === 0 ||
                    prevChallenges[prevChallenges.length - 1][0] !== payload.new.task
                ) {
                    // toast("Runners completed a task!")
                    return [...prevChallenges, [payload.new.task, payload.new.points, payload.new.status]];
                }
                return prevChallenges;
            });


        }).subscribe();

        return () => {
            supabase.removeChannel(channel);
        }

    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Runners' past challenge</h1>
            

            {[...allChallenges].reverse().map((challenge, index) => (
                <div key={index} className={(challenge[2] == 1 ? "bg-green-200" : "bg-red-200") + " p-4 m-4 rounded-md text-center"}>
                        <h2>{challenge[0]}</h2>
                        <h2 className="font-bold">{challenge[1]} points</h2>
                </div>
            ))}
        </div>
    );
}