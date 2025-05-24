"use client"


import { useState, useEffect, useRef } from "react";

import supabase from "./utils/supabase";

import RealtimeStream from "./realtime/realtime-stream";

import PointsStream from "./realtime/realtime-points";

import CurrentChallengeStream from "./realtime/realtime-currentchallenge";

import AllTasksStream from "./realtime/realtime-alltasks";

import CurrentTimeoutStream from "./realtime/realtime-timeout";

import PointsStreamSelf from "./realtime-self/realtime-points";

import AllTasksStreamSelf from "./realtime-self/realtime-alltasks";

import type { Session } from '@supabase/supabase-js'

import generateChallenge from "./utils/manhunt";

import { Button } from "@/components/ui/button";

import { toast } from "sonner"

export default function HomePage() {

  const [session, setSession] = useState<Session | null>(null);
  const [hunts, setHunts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentChallenge, setCurrentChallenge] = useState<[string, number]>(["", 0]);

  const [pastChallenges, setPastChallenges] = useState<[string, number, number][]>([]);

  const [currentPoints, setCurrentPoints] = useState<number>(0);

  const [timeOutStatus, setTimeOutStatus] = useState<number>(0);

  const [lastVetoTime, setLastVetoTime] = useState<Date>(new Date());
  const [timeOutElapsedTime, setTimeOutElapsedTime] = useState<number>(0);

  const [huntTime, setHuntTime] = useState<number>();

  const timeOutStatusRef = useRef<{ current: number }>({ current: timeOutStatus });


  // hunter and spectator stuff under here
  const [everyonePoints, setEveryonePoints] = useState<[string, number][]>([]);
  const [otherCurrentChallenge, setOtherCurrentChallenge] = useState<[string, number]>(["", 0]);
  const [otherChallenges, setOtherChallenges] = useState<[string, number, number][]>([]);

  function initializeStuff(session: Session | null) {

    setSession(session);

    let recentRunId = 0;

    supabase
      .from("hunts")
      .select()
      .then(async ({ data }) => {
        const datasorted = data?.sort((a, b) => {
          if (!a.id || !b.id) {
            return 0;
          }
          return a.id-b.id;
        });

        setHunts(datasorted ?? []);
        setLoading(false);
        console.log("Data34: ", datasorted);

        if (datasorted && datasorted.length > 0) {
          recentRunId = datasorted[datasorted.length - 1].id;

          const { data: huntData } = await supabase
          .from("hunts")
          .select()
          .eq('id', recentRunId);

          console.log("Data56: ", huntData);

          if (huntData && huntData[0] && huntData[0].status && huntData[0].status == 1) {
            setTimeOutStatus(1);

            // figure out how much time is remaining in the timeOut


            const currentTime = new Date();

            let useEmail = session?.user.email || "NULL";
            if (!huntData[0].runners.includes(session?.user.email || "NULL")) {
              // you are not a runner
              useEmail = huntData[0].runners[0];
            }

            let { data } = await supabase
              .from("tasks")
              .select()
              .eq('user', useEmail || "NULL")

            data = data?.sort((a, b) => {
              if (!a.id || !b.id) {
                return 0;
              }
              return a.id-b.id;
            }) ?? null;

            console.log("Data72: ", data);

            if (data && data.length > 0) {
              const lastVetoTime1 = new Date(data[data.length - 1].created_at);
              console.log("Data79: ", lastVetoTime);

              const timeDiff = Math.floor((currentTime.valueOf() - lastVetoTime.valueOf()) / 1000);

              setLastVetoTime(lastVetoTime1);
              setTimeOutElapsedTime(timeDiff);
            }

            
          }


          if (huntData && huntData[0] && huntData[0].runners && huntData[0].runners[0]) {
            supabase
              .from("drawntasks")
              .select()
              .eq('user', huntData[0].runners[0])
              .then(({ data }) => {
                console.log("Data93: ", data);

                if (data && data.length > 0) {
                  setOtherCurrentChallenge([data[data.length-1].task, data[data.length-1].points]);
                }
                
              });

            supabase
              .from("tasks")
              .select()
              .eq('user', huntData[0].runners[0])
              .then(({ data }) => {
                console.log("Data59: ", data);

                const datasorted = data?.sort((a, b) => {
                  if (!a.id || !b.id) {
                    return 0;
                  }
                  return a.id-b.id;
                });

                if (datasorted && datasorted.length > 0) {
                  for (let i = 0; i < datasorted.length; i++) {
                    setOtherChallenges((prev) => [...prev, [datasorted[i].task, datasorted[i].points, datasorted[i].status]]);
                  }
                }

              });
            }

            // supabase
            //   .from("tasks")
            //   .select()
            //   .eq('user', session?.user.email || "NULL")
            //   .then(({ data }) => {
            //     console.log("DataSELFTASKS: ", data);

            //     // if (data && data.length > 0) {
            //     //   for (let i = 0; i < data.length; i++) {
            //     //     setOtherChallenges((prev) => [...prev, [data[i].task, data[i].points, data[i].status]]);
            //     //   }
            //     // }

            //   });
            
        }
      });

    supabase
      .from("points")
      .select()
      .eq('user', session?.user.email || "NULL")
      .then(({ data }) => {
        console.log("Data11: ", data);

        if (data && data.length > 0) {
          setCurrentPoints(data[0].points);
        }
      });

    supabase
      .from("points")
      .select()
      .then(({ data }) => {
        console.log("Data37: ", data);

        if (data && data.length > 0) {
          setEveryonePoints(data.map((item: any) => [item.user, item.points]));
        } else {
          setEveryonePoints([]);
        }

        console.log("Everyone points: ", everyonePoints);
      });


    supabase
      .from("tasks")
      .select()
      .eq('user', session?.user.email || "NULL")
      .then(({ data }) => {
        console.log("Data22: ", data);

        const datasorted = data?.sort((a, b) => {
          if (!a.id || !b.id) {
            return 0;
          }
          return a.id-b.id;
        });

        if (datasorted && datasorted.length > 0) {
          for (let i = 0; i < datasorted.length; i++) {
            setPastChallenges((prev) => [...prev, [datasorted[i].task, datasorted[i].points, datasorted[i].status]]);
          }
        }
      });

    supabase
      .from("drawntasks")
      .select()
      .eq('user', session?.user.email || "NULL")
      .then(({ data }) => {
        console.log("Data44: ", data);
        if (data && data.length > 0) {
          setCurrentChallenge([data[data.length-1].task, data[data.length-1].points]);
        }
      });
    
  }

  useEffect(() => {
    timeOutStatusRef.current.current = timeOutStatus;
  }, [timeOutStatus]);

  const seconds_interval = 0.1 * 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeOutStatusRef.current.current === 1) {
        const currentTime = new Date();
        const timeDiff = Math.floor((currentTime.valueOf() - lastVetoTime.valueOf()) / 1000);

        if (timeDiff >= 5 * 60) {
          setTimeOutStatus(0);
          setTimeOutElapsedTime(0);
          revokeVeto();
        }
        setTimeOutElapsedTime(timeDiff);
      }
    }, seconds_interval);
    return () => clearInterval(interval);
  }, [lastVetoTime, seconds_interval]);


  const seconds_interval2 = 0.1 * 1000;

  useEffect(() => {
      const interval = setInterval(() => {

          // console.log("Interval running outside", hunts);

            // Use functional update to always get the latest hunts value
            setHunts((prevHunts) => {
              if (prevHunts.length > 0 && prevHunts[prevHunts.length - 1].created_at) {
                const sT = prevHunts[prevHunts.length - 1].created_at;
                const startTime = new Date(sT);

                if (startTime) {
                const currentTime = new Date();
                const timeDiff = Math.floor((currentTime.valueOf() - startTime.valueOf()) / 1000);
                // console.log("Time diff AHH: ", timeDiff);
                setHuntTime(timeDiff);
                }
              }
              return prevHunts;
            });

          // console.log("Interval running");

      }, seconds_interval2);
      return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    let isMounted = true;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (isMounted) initializeStuff(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) initializeStuff(session);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function saveDrawnTasks(user: string, task:string, points: number){
    const { error } = await supabase.from('drawntasks').insert({ user: user, task: task, points: points});
  }

  async function deleteDrawnTasks(user: string){
    const response = await supabase.from('drawntasks').delete().eq('user', user)
  }

  
  async function revokeVeto() {
    let recentRunId = hunts[hunts.length - 1].id;

    // if (!hunts[hunts.length - 1].runners?.includes(session?.user.email || "NULL")) {
    //   return;
    // }

    const { error } = await supabase.from('hunts').update({ status: 0 }).eq('id', recentRunId);

    location.reload();
  }


  function makeChallenge() {
    const challenge = generateChallenge();

    // Ensure challenge is [string, number]
    setCurrentChallenge([challenge[0] as string, challenge[1] as number]);

    let i = 0;
    while (i < hunts[hunts.length - 1].runners.length) {
      saveDrawnTasks(hunts[hunts.length - 1].runners[i], challenge[0] as string, challenge[1] as number);
      i += 1;
    }

  }

  async function upsertPoints(user: string, newPoints: number){

    const { data, error } = await supabase.from('points').select().eq('user', user);
    // console.log("Data: ", data);

    if (!data || data.length === 0) {
      const { error: insertError } = await supabase.from('points').insert({ user: user, points: 0 });
    }
    
    // because we want to trigger the update subscription regardless
    const { error: updateError } = await supabase.from('points').update({ points: newPoints }).eq('user', user);
  }

  async function saveTask(user: string, task: string, points: number, status: number){
    const { error } = await supabase.from('tasks').insert({ user: user, task: task, points: points, status: status });
  }

  function completeChallenge() {
    if (currentChallenge[0] === "") {
      alert("No challenge to complete");
      return;
    }

    setCurrentPoints(currentPoints + currentChallenge[1]);
    // setPastChallenges([...pastChallenges, [currentChallenge[0], currentChallenge[1], 1]]);


    toast("Challenge completed!");


    // saveTask("skparab1@gmail.com", "do something cool", 5, 1);

    let i = 0;
    while (i < hunts[hunts.length - 1].runners.length) {
      upsertPoints(hunts[hunts.length - 1].runners[i], currentPoints+currentChallenge[1]);

      saveTask(hunts[hunts.length - 1].runners[i], currentChallenge[0], currentChallenge[1], 1);
      deleteDrawnTasks(hunts[hunts.length - 1].runners[i]);

      i += 1;
    }

    setCurrentChallenge(["", 0]);

    // makeChallenge();
  }


  function skipChallenge() {
    if (currentChallenge[0] === "") {
      alert("No challenge to complete");
      return;
    }

    setCurrentPoints(currentPoints - 1);
    // setPastChallenges([...pastChallenges, [currentChallenge[0], currentChallenge[1], 1]]);


    toast("Challenge skipped!");


    // saveTask("skparab1@gmail.com", "do something cool", 5, 1);

    let i = 0;
    while (i < hunts[hunts.length - 1].runners.length) {
      upsertPoints(hunts[hunts.length - 1].runners[i], currentPoints-1);

      saveTask(hunts[hunts.length - 1].runners[i], currentChallenge[0], currentChallenge[1], 2);
      deleteDrawnTasks(hunts[hunts.length - 1].runners[i]);

      i += 1;
    }

    setCurrentChallenge(["", 0]);

    // makeChallenge();
  }


  async function vetoChallenge() {
    if (currentChallenge[0] === "") {
      alert("No challenge to complete");
      return;
    }

    setPastChallenges([...pastChallenges, [currentChallenge[0], currentChallenge[1], 0]]);

    setCurrentChallenge(["", 0]);

    toast("Challenge vetoed. You must wait 5 minutes to generate a new one.");

    let i = 0;
    while (i < hunts[hunts.length - 1].runners.length) {
      saveTask(hunts[hunts.length - 1].runners[i], currentChallenge[0], currentChallenge[1], 0);
      deleteDrawnTasks(hunts[hunts.length - 1].runners[i]);
      
      i += 1;
    }

    let recentRunId = hunts[hunts.length - 1].id;

    const { error } = await supabase.from('hunts').update({ status: 1 }).eq('id', recentRunId);
    
    setTimeOutStatus(1);

    location.reload();
  }


  // if (!session) {
  //   location.href = "/auth";
  //   return null;
  // }

  return (
    <>
      <div className="w-full bg-slate-800 text-white h-10 absolute t-0">
        <h1 className="absolute l-0 m-2">Manhunt • {session?.user.email}</h1>
      </div>
      {/* <h1 className="text-5xl font-bold pt-32">{String(hunts[hunts.length-1].id)}Jabari</h1> */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-stone-300">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          {hunts[hunts.length-1] == undefined ? (
            <h1 className="text-5xl font-bold">Loading Hunts ...</h1>
          ) : !hunts[hunts.length-1].runners ? (
            <>
              <h1 className="text-5xl font-bold">Complete!</h1>
              <h1 className="font-bold">Runners</h1> 

                  {hunts[hunts.length-2].runners.map((runner: string, index: number) => (
                    runner === session?.user.email ? (
                      <h2 key={index} className="m-0">You</h2>
                    ) : (
                      <h2 key={index} className="m-0">{runner}</h2> 
                    )
                  ))} 
              <h1 className="font-bold">have completed their run.</h1>
            </> 
          ) : null}
          
          <div className={(hunts[hunts.length-1] == undefined || !hunts[hunts.length-1].runners) ? 'hidden' : undefined}>  
        
              { (hunts.length == 0 || !hunts[0]) ? (
                <h1> No hunts</h1>
              ) : (
              <>
            
                {session ? (

                <>
                  <CurrentTimeoutStream timeOutStatusRef={timeOutStatusRef} timeOutElapsedTime={timeOutElapsedTime} />

                  {!loading && (
                      <>
                      <RealtimeStream serverData={hunts ?? []} />
                      {hunts.length > 0 && !hunts[hunts.length - 1].runners?.includes(session?.user.email || "NULL") && (huntTime ?? 0) < (60*30) && (
                        <>
                          <PointsStream pointsArr={everyonePoints ?? []} />
                          <CurrentChallengeStream theChallenge={otherCurrentChallenge ?? []} />
                          <AllTasksStream theChallenge={otherChallenges ?? []} />
                        </>
                      )}
                      </>
                  )}

                  {hunts.length > 0 && hunts[hunts.length - 1].runners?.includes(session?.user.email || "NULL") && (huntTime ?? 0) < (60*30) && (
                      <>
                        <PointsStreamSelf selfPoints={currentPoints} user={session?.user.email || "NULL"} challenge={currentChallenge} timeOutStatus={timeOutStatus} onChallengeChange={setCurrentChallenge}/>
                        {timeOutStatus == 0 && (
                          <>
                            { currentChallenge[0] !== "" ? (
                              <>
                                {(huntTime ?? 0) > (60*3) && (
                                  <div className="flex gap-[24px] flex-wrap items-center justify-center">
                                    <Button className="bg-green-400" onClick={completeChallenge}>
                                      Complete
                                    </Button>
                                    <Button className="bg-yellow-400" onClick={skipChallenge}>
                                      Skip
                                    </Button>
                                    <Button className="bg-red-400" onClick={vetoChallenge}>
                                      Veto
                                    </Button>
                                  </div>
                                )}
                              </>
                            ) : (
                              <div className="text-center">
                                <Button className="bg-blue-400" onClick={makeChallenge}>
                                  Generate Challenge
                                </Button>
                              </div>
                            )}
                          </>
                        )}

                        <h1 className="text-2xl font-bold text-center m-4 mt-8">
                          Past Challenges
                        </h1>

                        <AllTasksStreamSelf theChallenge={pastChallenges} user={session?.user.email || "NULL"}/>
                      </>
                  )}

                </>) : (
                  <Button onClick={() => { window.location.href = "/auth"; }}>Authenticate</Button>
                )}
              </>
              )}
          </div>   
        
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          
        </footer>
      </div>
    </>
  );
}

