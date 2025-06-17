(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/utils/supabase.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://psduayspkuspczikkyli.supabase.co") || '', ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzZHVheXNwa3VzcGN6aWtreWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjQ2MzMsImV4cCI6MjA2Mjg0MDYzM30.lxhT13ooFkUcgFPwOoKbu-buFFgW1rkN74BJ7JiHFOg") || '');
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/realtime/realtime-currentchallenge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CurrentChallengeStream)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CurrentChallengeStream({ theChallenge }) {
    _s();
    const [currentChallenge, setCurrentChallenge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(theChallenge);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurrentChallengeStream.useEffect": ()=>{
            setCurrentChallenge(theChallenge);
        }
    }["CurrentChallengeStream.useEffect"], [
        theChallenge
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurrentChallengeStream.useEffect": ()=>{
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].channel("realtimestream:drawntasks-stream").on("postgres_changes", {
                event: "INSERT",
                schema: "public",
                table: "drawntasks"
            }, {
                "CurrentChallengeStream.useEffect.channel": (payload)=>{
                    console.log({
                        payload
                    });
                    console.log(payload.new);
                    setCurrentChallenge([
                        payload.new.task,
                        payload.new.points
                    ]);
                // toast("Runners drew a task!")
                // alert(currentChallenge[0] + " has been drawn!");
                }
            }["CurrentChallengeStream.useEffect.channel"]).subscribe();
            return ({
                "CurrentChallengeStream.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].removeChannel(channel);
                }
            })["CurrentChallengeStream.useEffect"];
        }
    }["CurrentChallengeStream.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CurrentChallengeStream.useEffect": ()=>{
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].channel("realtimestream:drawntasks-stream-delete").on("postgres_changes", {
                event: "DELETE",
                schema: "public",
                table: "drawntasks"
            }, {
                "CurrentChallengeStream.useEffect.channel": (payload)=>{
                    // The deleted row data is in payload.old, not payload.new
                    setCurrentChallenge([
                        "",
                        0
                    ]);
                }
            }["CurrentChallengeStream.useEffect.channel"]).subscribe();
            return ({
                "CurrentChallengeStream.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].removeChannel(channel);
                }
            })["CurrentChallengeStream.useEffect"];
        }
    }["CurrentChallengeStream.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "m-4 mt-10",
        children: currentChallenge[0] != "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-center mt-8",
                    children: "Runners' current challenge"
                }, void 0, false, {
                    fileName: "[project]/app/realtime/realtime-currentchallenge.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-400 p-4 rounded-md text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: currentChallenge[0]
                        }, void 0, false, {
                            fileName: "[project]/app/realtime/realtime-currentchallenge.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold",
                            children: [
                                currentChallenge[1],
                                " points"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/realtime/realtime-currentchallenge.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/realtime/realtime-currentchallenge.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/app/realtime/realtime-currentchallenge.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
_s(CurrentChallengeStream, "6u5XhuQQb8Ga7nj5+nie+QN9c3A=");
_c = CurrentChallengeStream;
var _c;
__turbopack_context__.k.register(_c, "CurrentChallengeStream");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/realtime-self/realtime-alltasks.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AllTasksStreamSelf)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AllTasksStreamSelf({ theChallenge, user }) {
    _s();
    const [allChallenges, setAllChallenges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(theChallenge);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllTasksStreamSelf.useEffect": ()=>{
            setAllChallenges({
                "AllTasksStreamSelf.useEffect": (prev)=>prev.length === 0 ? theChallenge : prev
            }["AllTasksStreamSelf.useEffect"]);
        }
    }["AllTasksStreamSelf.useEffect"], [
        theChallenge
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllTasksStreamSelf.useEffect": ()=>{
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].channel("realtimestream:alltasks-stream45").on("postgres_changes", {
                event: "INSERT",
                schema: "public",
                table: "tasks"
            }, {
                "AllTasksStreamSelf.useEffect.channel": (payload)=>{
                    console.log({
                        payload
                    });
                    console.log(payload.new);
                    console.log("I got something new");
                    if (user == payload.new.user) {
                        console.log("Should have added!");
                        setAllChallenges({
                            "AllTasksStreamSelf.useEffect.channel": (prevChallenges)=>[
                                    ...prevChallenges,
                                    [
                                        String(payload.new.task),
                                        Number(payload.new.points),
                                        Number(payload.new.status)
                                    ]
                                ]
                        }["AllTasksStreamSelf.useEffect.channel"]);
                    }
                }
            }["AllTasksStreamSelf.useEffect.channel"]).subscribe();
            return ({
                "AllTasksStreamSelf.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].removeChannel(channel);
                }
            })["AllTasksStreamSelf.useEffect"];
        }
    }["AllTasksStreamSelf.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            ...allChallenges
        ].reverse().map((challenge, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (challenge[2] == 1 ? "bg-green-400" : challenge[2] == 2 ? "bg-yellow-500" : "bg-red-400") + " p-4 rounded-md text-center m-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: challenge[0]
                    }, void 0, false, {
                        fileName: "[project]/app/realtime-self/realtime-alltasks.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold",
                        children: [
                            challenge[1],
                            " points"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/realtime-self/realtime-alltasks.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/app/realtime-self/realtime-alltasks.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/realtime-self/realtime-alltasks.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
_s(AllTasksStreamSelf, "pXU9HHFCfpYWv1ctT3OhsVKQ2Y8=");
_c = AllTasksStreamSelf;
var _c;
__turbopack_context__.k.register(_c, "AllTasksStreamSelf");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/manhunt.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>generateChallenge)
});
function generateChallenge() {
    const challenges = [
        [
            "Get to a place 10 ft or more above the ground, get taggers to agree it is 10ft+, take a picture from the top of it, and send it in the group chat",
            1
        ],
        [
            "Review a nearby structure on video call based on aesthetic, build, appeal, and importance",
            1
        ],
        [
            "Stand still in the exact spot you are in right now without moving for the next 2 minutes",
            2
        ],
        [
            "From the moment you draw this card, you have 1 minute to find as many street signs as you can, video call the whole process, if you find less than 6, then you must autoveto this card and wait 5 minutes to draw another card, each individual sign on a pole counts as a street sign",
            2
        ],
        [
            "Yell HEEEEEELLLLLPPP decided by the taggers in a public place, You must get on video call with one of the taggers to prove you are yelling, the public place does not have to be populated, just a public place, from there you must yell",
            1
        ],
        [
            "FREEEEEEE POIIIIIINT, after informing the taggers you got this card, immediately draw your next card",
            1
        ],
        [
            "Make a shot in a basketball hoop with any item",
            2
        ],
        [
            "Hold a conversation with a stranger for 30 seconds (must be on call for proof)",
            2
        ],
        [
            "Enter any store",
            1
        ],
        [
            "Find an item in a store worth more than 50 dollars and take a picture with it",
            2
        ],
        [
            "Make a stranger laugh, you must prove you made them laugh either with a picture or by getting on call and having the stranger laugh on call",
            3
        ],
        [
            "Go to lynbrook",
            2
        ],
        [
            "You must walk for the next 2 minutes (no running), Facetime as proof",
            2
        ],
        [
            "Bury any treasure, the “treasure” can either be created by you or found on the ground but must be rare and unique, you must bury the treasure more than 4 inches under the ground",
            3
        ],
        [
            "UNLUCKY!!! You must veto this challenge. You may not complete challenges for 5 minutes, after 5 minutes you may draw your next card",
            0
        ],
        [
            "Freestyle a 3 minute long song on a voice call with the taggers",
            1
        ],
        [
            "Get a stranger to say idli to you without saying the word idli at all",
            4
        ],
        [
            "Get into a conversation with a girl you have never met and take a picture with her, the conversation must be at least 30 seconds long and the girl must be aware you are taking the picture",
            5
        ],
        [
            "Take a selfie with the other team, if they do not tag you before you take the selfie then they are frozen for 3 minutes",
            3
        ],
        [
            "Get tagged, you steal the points you gain from whoever tags you, 3 points, if the person tagging you has less than 3 points, you steal only the points they have until they have 0 points",
            3
        ],
        [
            "Find a cool rock and hold it for 3 minutes",
            2
        ],
        [
            "Pick up 5 pieces of litter and throw it away in 5 minutes",
            3
        ],
        [
            "Pee (send a picture right before and right after for proof)",
            2
        ],
        [
            "Win a round of any mobile game, you must take a screenshot and send it in the chat",
            1
        ],
        [
            "Pet a stranger's dog (ask first)",
            1
        ],
        [
            "Fortnite dance around children, there must be children within 30 feet of you and you must do a dance featured in the game fortnite",
            2
        ],
        [
            "Find a pokemon go player currently playing the game, and take a picture of them playing, it can be yourself if you load up pokemon go and play it",
            1
        ],
        [
            "Go drink water (picture required), 0 points, this challenge cannot be vetoed and a new challenge cannot be completed until you complete this challenge",
            0
        ],
        [
            "Do whatever challenge you just did, if you didnt do any challenge yet then skip this card with no consequence",
            1
        ],
        [
            "LUCKKYYYYY taggers must all say all of their school courses for next year, 1 at a time, runner times them, for every 30 seconds they take runner gets 0.5 point",
            1
        ],
        [
            "Must touch a bag of chips, stays in effect until you touch the bag of chips",
            2
        ],
        [
            "Convince someone in dms to say “new fogga” and send screenshot in idli",
            2
        ],
        [
            "Get on facetime with taggers and name songs of a chosen artist, if you name more get 2 points if they name more stand still for 2 min and can't choose another challenge until that time ends",
            2
        ],
        [
            "Roll around in grass (prove on call)",
            1
        ],
        [
            "Sing a full Bruno mars song on call can search up lyrics, if at any point you stop before the end of the song you must restart",
            2
        ],
        [
            "Take a picture with a VTA bus, send proof",
            2
        ],
        [
            "Visit a school",
            1
        ],
        [
            "Find a Porsche and take a picture with it",
            3
        ],
        [
            "LUCKYYY, 2 free points",
            2
        ],
        [
            "Run a mile, send Strava or Health app screenshot as proof",
            2
        ],
        [
            "Go to the entrance ramp of a freeway, and take a picture of the sign",
            2
        ],
        [
            "Find a crosswalk with the yellow blinking lights, take a picture",
            2
        ],
        [
            "Visit a fast food restaurant and take a picture of the menu",
            1
        ],
        [
            "Find cans of soup and curl them",
            2
        ],
        [
            "Facetime the taggers and do 20 pushups, you must be on call for the entire duration of the pushups",
            2
        ],
        [
            "Facetime the taggers and name the 50 states alphabetically, if you fail, automatically veto",
            3
        ],
        [
            "Slide down the slide of a play structure",
            2
        ],
        [
            "Find a restaurant with a drive-thru, send picture as proof",
            2
        ],
        [
            "Find a yellow yield sign and take a picture",
            2
        ],
        [
            "Enter a city other than the one you are currently in",
            3
        ],
        [
            "Give a hi five to any person not playing the game, send a picture as proof",
            2
        ],
        // AI generated challenges below
        [
            "Take a picture with a statue or public art installation",
            2
        ],
        [
            "Do 10 jumping jacks in a public place, video required",
            1
        ],
        [
            "Find a playground and go down a slide, send a video",
            2
        ],
        [
            "Draw a chalk drawing on the sidewalk and send a picture",
            2
        ],
        [
            "Find a dog wearing clothes and take a selfie with it",
            3
        ],
        [
            "Find a license plate from another state and send a picture",
            1
        ],
        [
            "Find a flower and give it to a stranger, get a picture",
            2
        ],
        [
            "Find a store employee and ask for their favorite product, video required",
            2
        ],
        [
            "Take a picture with a bicycle (yours or someone else's)",
            1
        ],
        [
            "Find a bridge and walk across it, send proof",
            2
        ],
        [
            "Find a bus stop and wait there for 2 minutes, send proof",
            1
        ],
        [
            "Find a mailbox and take a selfie with it",
            1
        ],
        [
            "Find a sign in a language other than English, send a picture",
            1
        ],
        [
            "Find a person with a pet other than a dog, take a picture",
            2
        ],
        [
            "Find a public staircase and walk up and down, send proof",
            2
        ]
    ];
    const rnum = Math.floor(Math.random() * challenges.length);
    return [
        String(rnum + 1) + ": " + challenges[rnum][0],
        challenges[rnum][1]
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/LeafletTracker.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LeafletMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const defaultCenter = [
    37.3129978,
    -122.0121823
];
const defaultZoom = 13;
function LeafletMap() {
    _s();
    const [seekerLocations, setSeekerLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [runners, setRunners] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [runnerEmail, setRunnerEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // 1. Get latest hunt's runners on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeafletMap.useEffect": ()=>{
            async function fetchRunners() {
                const { data: hunts } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("hunts").select("runners").order("created_at", {
                    ascending: false
                }).limit(1);
                setRunners(hunts?.[0]?.runners || []);
            }
            fetchRunners();
        }
    }["LeafletMap.useEffect"], []);
    // 2. Prompt for runner email if not set
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeafletMap.useEffect": ()=>{
            if (!runnerEmail && runners.length) {
                const email = window.prompt(`Enter your runner email (choose from: ${runners.join(", ")})`);
                if (email && runners.includes(email)) {
                    setRunnerEmail(email);
                }
            }
        }
    }["LeafletMap.useEffect"], [
        runners,
        runnerEmail
    ]);
    // 3. Update this runner's location in Supabase every 10 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeafletMap.useEffect": ()=>{
            if (!runnerEmail) return;
            const updateLocation = {
                "LeafletMap.useEffect.updateLocation": ()=>{
                    navigator.geolocation.getCurrentPosition({
                        "LeafletMap.useEffect.updateLocation": async (pos)=>{
                            const { latitude, longitude } = pos.coords;
                            await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("userLocations").upsert({
                                runner: runnerEmail,
                                lat: latitude,
                                long: longitude,
                                updated_at: new Date().toISOString()
                            });
                        }
                    }["LeafletMap.useEffect.updateLocation"]);
                }
            }["LeafletMap.useEffect.updateLocation"];
            updateLocation();
            const interval = setInterval(updateLocation, 10000);
            return ({
                "LeafletMap.useEffect": ()=>clearInterval(interval)
            })["LeafletMap.useEffect"];
        }
    }["LeafletMap.useEffect"], [
        runnerEmail
    ]);
    // 4. Fetch all runners' locations every 10 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeafletMap.useEffect": ()=>{
            if (!runners.length) return;
            async function fetchLocations() {
                const { data: locations } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("userLocations").select("id, runner, lat, long, updated_at").in("runner", runners);
                setSeekerLocations(locations || []);
            }
            fetchLocations();
            const interval = setInterval(fetchLocations, 10000);
            return ({
                "LeafletMap.useEffect": ()=>clearInterval(interval)
            })["LeafletMap.useEffect"];
        }
    }["LeafletMap.useEffect"], [
        runners
    ]);
    const markerIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        iconSize: [
            25,
            41
        ],
        iconAnchor: [
            12,
            41
        ],
        popupAnchor: [
            1,
            -34
        ],
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        shadowSize: [
            41,
            41
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
        center: defaultCenter,
        zoom: defaultZoom,
        style: {
            height: "450px",
            width: "600px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: "© OpenStreetMap contributors"
            }, void 0, false, {
                fileName: "[project]/components/ui/LeafletTracker.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            seekerLocations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                    position: [
                        loc.lat,
                        loc.long
                    ],
                    icon: markerIcon,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                        children: [
                            "Runner: ",
                            loc.runner,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/ui/LeafletTracker.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            "Updated: ",
                            new Date(loc.updated_at).toLocaleTimeString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/LeafletTracker.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                }, loc.runner, false, {
                    fileName: "[project]/components/ui/LeafletTracker.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/LeafletTracker.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(LeafletMap, "gLIxn6Nadk0NQ41nhIp1osdL5cY=");
_c = LeafletMap;
var _c;
__turbopack_context__.k.register(_c, "LeafletMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2f$realtime$2d$currentchallenge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/realtime/realtime-currentchallenge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2d$self$2f$realtime$2d$alltasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/realtime-self/realtime-alltasks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$manhunt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/manhunt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeafletTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LeafletTracker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hunts, setHunts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentChallenge, setCurrentChallenge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "",
        0
    ]);
    const [pastChallenges, setPastChallenges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPoints, setCurrentPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [timeOutStatus, setTimeOutStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastVetoTime, setLastVetoTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [timeOutElapsedTime, setTimeOutElapsedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [huntTime, setHuntTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const timeOutStatusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        current: timeOutStatus
    });
    // Location tracking
    const [isTrackingLocation, setIsTrackingLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [locationPermission, setLocationPermission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // hunter and spectator stuff under here
    const [everyonePoints, setEveryonePoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [otherCurrentChallenge, setOtherCurrentChallenge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "",
        0
    ]);
    const [otherChallenges, setOtherChallenges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    function initializeStuff(session) {
        setSession(session);
        let recentRunId = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("hunts").select().then(async ({ data })=>{
            const datasorted = data?.sort((a, b)=>{
                if (!a.id || !b.id) {
                    return 0;
                }
                return a.id - b.id;
            });
            setHunts(datasorted ?? []);
            setLoading(false);
            console.log("Data34: ", datasorted);
            if (datasorted && datasorted.length > 0) {
                recentRunId = datasorted[datasorted.length - 1].id;
                const { data: huntData } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("hunts").select().eq('id', recentRunId);
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
                    let { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("tasks").select().eq('user', useEmail || "NULL");
                    data = data?.sort((a, b)=>{
                        if (!a.id || !b.id) {
                            return 0;
                        }
                        return a.id - b.id;
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("drawntasks").select().eq('user', huntData[0].runners[0]).then(({ data })=>{
                        console.log("Data93: ", data);
                        if (data && data.length > 0) {
                            setOtherCurrentChallenge([
                                data[data.length - 1].task,
                                data[data.length - 1].points
                            ]);
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("tasks").select().eq('user', huntData[0].runners[0]).then(({ data })=>{
                        console.log("Data59: ", data);
                        const datasorted = data?.sort((a, b)=>{
                            if (!a.id || !b.id) {
                                return 0;
                            }
                            return a.id - b.id;
                        });
                        if (datasorted && datasorted.length > 0) {
                            for(let i = 0; i < datasorted.length; i++){
                                setOtherChallenges((prev)=>[
                                        ...prev,
                                        [
                                            datasorted[i].task,
                                            datasorted[i].points,
                                            datasorted[i].status
                                        ]
                                    ]);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("points").select().eq('user', session?.user.email || "NULL").then(({ data })=>{
            console.log("Data11: ", data);
            if (data && data.length > 0) {
                setCurrentPoints(data[0].points);
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("points").select().then(({ data })=>{
            console.log("Data37: ", data);
            if (data && data.length > 0) {
                setEveryonePoints(data.map((item)=>[
                        item.user,
                        item.points
                    ]));
            } else {
                setEveryonePoints([]);
            }
            console.log("Everyone points: ", everyonePoints);
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("tasks").select().eq('user', session?.user.email || "NULL").then(({ data })=>{
            console.log("Data22: ", data);
            const datasorted = data?.sort((a, b)=>{
                if (!a.id || !b.id) {
                    return 0;
                }
                return a.id - b.id;
            });
            if (datasorted && datasorted.length > 0) {
                for(let i = 0; i < datasorted.length; i++){
                    setPastChallenges((prev)=>[
                            ...prev,
                            [
                                datasorted[i].task,
                                datasorted[i].points,
                                datasorted[i].status
                            ]
                        ]);
                }
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from("drawntasks").select().eq('user', session?.user.email || "NULL").then(({ data })=>{
            console.log("Data44: ", data);
            if (data && data.length > 0) {
                setCurrentChallenge([
                    data[data.length - 1].task,
                    data[data.length - 1].points
                ]);
            }
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            timeOutStatusRef.current.current = timeOutStatus;
        }
    }["HomePage.useEffect"], [
        timeOutStatus
    ]);
    // Auto-start location tracking for runners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (session?.user.email && hunts.length > 0) {
                const currentHunt = hunts[hunts.length - 1];
                const isRunner = currentHunt?.runners?.includes(session.user.email);
                if (isRunner && !isTrackingLocation) {
                    console.log('Starting location tracking for runner:', session.user.email);
                    startLocationTracking();
                } else if (!isRunner && isTrackingLocation) {
                    console.log('Stopping location tracking - user is not a runner');
                    stopLocationTracking();
                }
            }
        }
    }["HomePage.useEffect"], [
        session,
        hunts,
        isTrackingLocation
    ]);
    const seconds_interval = 0.1 * 1000;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const interval = setInterval({
                "HomePage.useEffect.interval": ()=>{
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
                }
            }["HomePage.useEffect.interval"], seconds_interval);
            return ({
                "HomePage.useEffect": ()=>clearInterval(interval)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], [
        lastVetoTime,
        seconds_interval
    ]);
    const seconds_interval2 = 0.1 * 1000;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const interval = setInterval({
                "HomePage.useEffect.interval": ()=>{
                    // console.log("Interval running outside", hunts);
                    // Use functional update to always get the latest hunts value
                    setHunts({
                        "HomePage.useEffect.interval": (prevHunts)=>{
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
                        }
                    }["HomePage.useEffect.interval"]);
                // console.log("Interval running");
                }
            }["HomePage.useEffect.interval"], seconds_interval2);
            return ({
                "HomePage.useEffect": ()=>clearInterval(interval)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            let isMounted = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.getSession().then({
                "HomePage.useEffect": ({ data: { session } })=>{
                    if (isMounted) initializeStuff(session);
                }
            }["HomePage.useEffect"]);
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].auth.onAuthStateChange({
                "HomePage.useEffect": (_event, session)=>{
                    if (isMounted) initializeStuff(session);
                }
            }["HomePage.useEffect"]);
            return ({
                "HomePage.useEffect": ()=>{
                    isMounted = false;
                    subscription.unsubscribe();
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    async function saveDrawnTasks(user, task, points) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('drawntasks').insert({
            user: user,
            task: task,
            points: points
        });
    }
    async function deleteDrawnTasks(user) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('drawntasks').delete().eq('user', user);
    }
    async function revokeVeto() {
        let recentRunId = hunts[hunts.length - 1].id;
        // if (!hunts[hunts.length - 1].runners?.includes(session?.user.email || "NULL")) {
        //   return;
        // }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('hunts').update({
            status: 0
        }).eq('id', recentRunId);
        location.reload();
    }
    function makeChallenge() {
        const challenge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$manhunt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        // Ensure challenge is [string, number]
        setCurrentChallenge([
            challenge[0],
            challenge[1]
        ]);
        let i = 0;
        while(i < hunts[hunts.length - 1].runners.length){
            saveDrawnTasks(hunts[hunts.length - 1].runners[i], challenge[0], challenge[1]);
            i += 1;
        }
    }
    async function upsertPoints(user, newPoints) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('points').select().eq('user', user);
        console.log("Data: ", data);
        let oldPoints = 0;
        if (!data || data.length === 0) {
            const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('points').insert({
                user: user,
                points: 0
            });
        } else {
            oldPoints = data[0].points;
        }
        // because we want to trigger the update subscription regardless
        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('points').update({
            points: newPoints + oldPoints
        }).eq('user', user);
    }
    async function saveTask(user, task, points, status) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('tasks').insert({
            user: user,
            task: task,
            points: points,
            status: status
        });
    }
    function completeChallenge() {
        if (currentChallenge[0] === "") {
            alert("No challenge to complete");
            return;
        }
        // Use functional update to ensure latest value
        setCurrentPoints((prevPoints)=>prevPoints + currentChallenge[1]);
        // setPastChallenges([...pastChallenges, [currentChallenge[0], currentChallenge[1], 1]]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("Challenge completed!");
        // saveTask("skparab1@gmail.com", "do something cool", 5, 1);
        let i = 0;
        while(i < hunts[hunts.length - 1].runners.length){
            upsertPoints(hunts[hunts.length - 1].runners[i], currentChallenge[1]);
            saveTask(hunts[hunts.length - 1].runners[i], currentChallenge[0], currentChallenge[1], 1);
            deleteDrawnTasks(hunts[hunts.length - 1].runners[i]);
            i += 1;
        }
        setCurrentChallenge([
            "",
            0
        ]);
    // makeChallenge();
    }
    function skipChallenge() {
        if (currentChallenge[0] === "") {
            alert("No challenge to complete");
            return;
        }
        setCurrentPoints(currentPoints - 1);
        // setPastChallenges([...pastChallenges, [currentChallenge[0], currentChallenge[1], 1]]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("Challenge skipped!");
        // saveTask("skparab1@gmail.com", "do something cool", 5, 1);
        let i = 0;
        while(i < hunts[hunts.length - 1].runners.length){
            upsertPoints(hunts[hunts.length - 1].runners[i], -1);
            saveTask(hunts[hunts.length - 1].runners[i], currentChallenge[0], currentChallenge[1], 2);
            deleteDrawnTasks(hunts[hunts.length - 1].runners[i]);
            i += 1;
        }
        setCurrentChallenge([
            "",
            0
        ]);
    // makeChallenge();
    }
    async function vetoChallenge() {
        if (currentChallenge[0] === "") {
            alert("No challenge to complete");
            return;
        }
        setPastChallenges([
            ...pastChallenges,
            [
                currentChallenge[0],
                currentChallenge[1],
                0
            ]
        ]);
        setCurrentChallenge([
            "",
            0
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])("Challenge vetoed. You must wait 5 minutes to generate a new one.");
        let i = 0;
        while(i < hunts[hunts.length - 1].runners.length){
            saveTask(hunts[hunts.length - 1].runners[i], currentChallenge[0], currentChallenge[1], 0);
            deleteDrawnTasks(hunts[hunts.length - 1].runners[i]);
            i += 1;
        }
        let recentRunId = hunts[hunts.length - 1].id;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('hunts').update({
            status: 1
        }).eq('id', recentRunId);
        setTimeOutStatus(1);
        location.reload();
    }
    // if (!session) {
    //   location.href = "/auth";
    //   return null;
    // }
    // Location tracking functions
    async function updateUserLocation(lat, lng) {
        if (!session?.user.email) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('userLocations').upsert({
            id: session.user.email,
            lat: lat,
            long: lng,
            updated_at: new Date().toISOString()
        });
        if (error) {
            console.error('Error updating location:', error);
        }
    }
    async function startLocationTracking() {
        if (!session?.user.email) return;
        // Check if user is a runner in the current hunt
        const currentHunt = hunts[hunts.length - 1];
        if (!currentHunt?.runners?.includes(session.user.email)) {
            console.log('User is not a runner in current hunt');
            return;
        }
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by this browser');
            return;
        }
        // Request location permission
        try {
            const permission = await navigator.permissions.query({
                name: 'geolocation'
            });
            setLocationPermission(permission.state);
            if (permission.state === 'denied') {
                console.error('Location permission denied');
                return;
            }
            setIsTrackingLocation(true);
            // Start watching position
            const watchId = navigator.geolocation.watchPosition((position)=>{
                const { latitude, longitude } = position.coords;
                updateUserLocation(latitude, longitude);
            }, (error)=>{
                console.error('Error getting location:', error);
                setIsTrackingLocation(false);
            }, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 30000 // Update every 30 seconds
            });
            // Store watch ID for cleanup
            return ()=>{
                navigator.geolocation.clearWatch(watchId);
                setIsTrackingLocation(false);
            };
        } catch (error) {
            console.error('Error requesting location permission:', error);
        }
    }
    async function stopLocationTracking() {
        setIsTrackingLocation(false);
    }
    // Test function to add a sample location
    async function addTestLocation() {
        if (!session?.user.email) return;
        // Add a test location near the default center
        const testLat = 37.3129978 + (Math.random() - 0.5) * 0.01; // Small random offset
        const testLng = -122.0121823 + (Math.random() - 0.5) * 0.01;
        await updateUserLocation(testLat, testLng);
        console.log('Test location added:', {
            lat: testLat,
            lng: testLng
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-slate-800 dark:bg-[rgb(20,77,128)] text-white",
                style: {
                    height: "40px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "absolute l-0 m-2",
                        children: [
                            "Manhunt • ",
                            session?.user.email
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 586,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "absolute right-0 top-0 h-6 bg-blue-400 dark:bg-slate-800 dark:text-slate-200",
                        style: {
                            height: "30px",
                            margin: "5px"
                        },
                        onClick: ()=>{
                            window.location.href = "/auth";
                        },
                        children: "Menu"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 585,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-stone-300 dark:bg-neutral-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex flex-col gap-[32px] row-start-2 items-center sm:items-start",
                        children: [
                            !session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>{
                                    window.location.href = "/auth";
                                },
                                children: "Authenticate"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    hunts[hunts.length - 1] == undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl font-bold",
                                        children: "Loading Hunts ..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 605,
                                        columnNumber: 17
                                    }, this) : !hunts[hunts.length - 1].runners ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-5xl font-bold",
                                                children: "Complete!"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-bold",
                                                children: "Runners"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 609,
                                                columnNumber: 19
                                            }, this),
                                            hunts[hunts.length - 2].runners.map((runner, index)=>runner === session?.user.email ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "m-0",
                                                    children: "You"
                                                }, index, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "m-0",
                                                    children: runner
                                                }, index, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 27
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-bold",
                                                children: "have completed their run."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: hunts[hunts.length - 1] == undefined || !hunts[hunts.length - 1].runners ? 'hidden' : undefined,
                                        children: hunts.length == 0 || !hunts[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: " No hunts"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 625,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    hunts.length > 0 && hunts[hunts.length - 1].runners && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4",
                                                                children: "Current Challenge"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2f$realtime$2d$currentchallenge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: currentChallenge
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-4 justify-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        onClick: ()=>completeChallenge(),
                                                                        children: "Complete Challenge"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 641,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        onClick: ()=>skipChallenge(),
                                                                        children: "Skip Challenge (-1 point)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 644,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 640,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4 mt-8",
                                                                children: "Past Challenges"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2d$self$2f$realtime$2d$alltasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: pastChallenges,
                                                                user: session?.user.email || "NULL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 653,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    hunts.length > 0 && hunts[hunts.length - 1].hunters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4",
                                                                children: "Current Challenge"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 659,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2f$realtime$2d$currentchallenge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: otherCurrentChallenge
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4 mt-8",
                                                                children: "Past Challenges"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 665,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2d$self$2f$realtime$2d$alltasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: otherChallenges,
                                                                user: session?.user.email || "NULL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 669,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    hunts.length > 0 && !hunts[hunts.length - 1].runners && !hunts[hunts.length - 1].hunters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4",
                                                                children: "Current Challenge"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 675,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2f$realtime$2d$currentchallenge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: otherCurrentChallenge
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4 mt-8",
                                                                children: "Past Challenges"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2d$self$2f$realtime$2d$alltasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: otherChallenges,
                                                                user: session?.user.email || "NULL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    hunts.length > 0 && hunts[hunts.length - 1].runners && hunts[hunts.length - 1].runners.includes(session?.user.email || "NULL") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4",
                                                                children: "Current Challenge"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 691,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2f$realtime$2d$currentchallenge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: currentChallenge
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-4 justify-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        onClick: ()=>completeChallenge(),
                                                                        children: "Complete Challenge"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 698,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        onClick: ()=>skipChallenge(),
                                                                        children: "Skip Challenge (-1 point)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 701,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 697,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4 mt-8",
                                                                children: "Past Challenges"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 706,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2d$self$2f$realtime$2d$alltasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: pastChallenges,
                                                                user: session?.user.email || "NULL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    hunts.length > 0 && hunts[hunts.length - 1].hunters && hunts[hunts.length - 1].hunters.includes(session?.user.email || "NULL") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4",
                                                                children: "Current Challenge"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 716,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2f$realtime$2d$currentchallenge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: otherCurrentChallenge
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 720,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4 mt-8",
                                                                children: "Past Challenges"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 722,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2d$self$2f$realtime$2d$alltasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: otherChallenges,
                                                                user: session?.user.email || "NULL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 726,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    hunts.length > 0 && !hunts[hunts.length - 1].runners?.includes(session?.user.email || "NULL") && !hunts[hunts.length - 1].hunters?.includes(session?.user.email || "NULL") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4",
                                                                children: "Current Challenge"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 732,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2f$realtime$2d$currentchallenge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: otherCurrentChallenge
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl font-bold text-center m-4 mt-8",
                                                                children: "Past Challenges"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$realtime$2d$self$2f$realtime$2d$alltasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                theChallenge: otherChallenges,
                                                                user: session?.user.email || "NULL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 742,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LeafletTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 753,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 597,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "row-start-3 flex gap-[24px] flex-wrap items-center justify-center"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 755,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 596,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(HomePage, "Esl7LqSATcRZv70SKvYzGWOEXlo=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_0062ac5d._.js.map