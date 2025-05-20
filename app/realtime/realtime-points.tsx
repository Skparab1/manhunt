"use client"

import { useState, useEffect } from "react";

import supabase from "../utils/supabase";

import type { Session } from '@supabase/supabase-js'

import generateChallenge from "../utils/manhunt";


export default function PointsStream({ pointsArr }: { pointsArr: [string, number][] }) { 

    const [points, setPoints] = useState<[string, number][]>(pointsArr);

    useEffect(() => {
        setPoints(pointsArr);
    }, [pointsArr]);


    useEffect(() => {
        const channel = supabase.channel("realtimestream:points-stream").on(
            "postgres_changes",
            {
                event: "UPDATE",
                schema: "public",
                table: "points"
            },
            (payload: { new: any }) => {
                console.log({ payload });
                console.log(payload.new);
                console.log(points);

                let i = 0;
                while (i < points.length) {
                    if (points[i][0] === payload.new.user) {
                        const updatedPoints: [string, number][] = points.map((p, idx) =>
                            idx === i ? [p[0], payload.new.points as number] : p
                        );
                        // alert('set a points');
                        setPoints(updatedPoints);
                        break;
                    }
                    i += 1;
                }
            }
        ).subscribe();

        return () => {
            channel.unsubscribe();
        };
    }, []);

    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        let isMounted = true;

        supabase.auth.getSession().then(({ data: { session } }) => {
            if (isMounted) setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (isMounted) setSession(session);
        });

        return () => {
            isMounted = false;
            subscription.unsubscribe();
        };
    }, []);

    const seconds_interval = 0.1 * 1000;

    return (
        <div className="m-4">
            <h1 className="text-2xl font-bold text-center">Points</h1>
            <div className="flex flex-col gap-4">
                {points.map((point: [string, number], index: number) => (
                    (point[0] != session?.user.email ?
                        (<div key={index} className="flex items-center justify-between p-4 border-b">
                            <span className="mr-4">{point[0]}</span>
                            <span>{point[1]}</span>
                        </div>) : (
                        <div key={index} className="flex items-center justify-between p-4 border-b">
                            <span className="mr-4">You</span>
                            <span>{point[1]}</span>
                        </div>
                        ))
                ))}
            </div>
        </div>
    );
}