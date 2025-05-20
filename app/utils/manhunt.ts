export default function generateChallenge(){
    const challenges: [string, number][] = [
        ["Get to a place 10 ft or more above the ground, get taggers to agree it is 10ft+, take a picture from the top of it, and send it in the group chat", 1],
        ["Review a nearby structure on video call based on aesthetic, build, appeal, and importance", 1],
        ["Stand still in the exact spot you are in right now without moving for the next 2 minutes", 2],
        ["From the moment you draw this card, you have 1 minute to find as many street signs as you can, video call the whole process, if you find less than 6, then you must autoveto this card and wait 5 minutes to draw another card, each individual sign on a pole counts as a street sign", 2],
        ["Yell HEEEEEELLLLLPPP decided by the taggers in a public place, You must get on video call with one of the taggers to prove you are yelling, the public place does not have to be populated, just a public place, from there you must yell", 1],
        ["FREEEEEEE POIIIIIINT, after informing the taggers you got this card, immediately draw your next card", 1],
        ["Make a shot in a basketball hoop with any item", 2],
        ["Hold a conversation with a stranger for 30 seconds(must be on call for proof)", 2],
        ["Enter any store", 1],
        ["Find an item in a store worth more than 50 dollars and take a picture with it", 2],
        ["Make a stranger laugh, you must prove you made them laugh either with a picture or by getting on call and having the stranger laugh on call", 3],
        ["Go to lynbrook", 2],
        ["Run one mile in any direction inside of the game area", 2],
        ["Bury any treasure, the “treasure” can either be created by you or found on the ground but must be rare and unique, you must bury the treasure more than 4 inches under the ground", 3],
        ["UNLUCKY!!! You may not complete challenges for 5 minutes, after 5 minutes you may draw your next card", 0],
        ["Freestyle a 3 minute long song on a voice call with the taggers", 1],
        ["Get a stranger to say idli to you without saying the word idli at all", 4],
        ["Get into a conversation with a girl you have never met and take a picture with her, the conversation must be at least 30 seconds long and the girl must be aware you are taking the picture", 5],
        ["Take a selfie with the other team, if they do not tag you before you take the selfie then they are frozen for 3 minutes", 3],
        ["Get tagged, you steal the points you gain from whoever tags you, 3 points, if the person tagging you has less than 3 points, you steal only the points they have until they have 0 points", 3],
        ["Find a cool rock and hold it for 3 minutes", 2],
        ["Pick up 5 pieces of litter and throw it away in 5 minutes", 3],
        ["Pee (send a picture right before and right after for proof)", 2],
        ["Win a round of any mobile game, you must take a screenshot and send it in the chat", 1],
        ["Pet a stranger's dog (ask first)", 1],
        ["Fortnite dance around children, there must be children within 30 feet of you and you must do a dance featured in the game fortnite", 2],
        ["Find a pokemon go player currently playing the game, and take a picture of them playing, it can be yourself if you load up pokemon go and play it", 1],
        ["Go drink water (picture required), 0 points, this challenge cannot be vetoed and a new challenge cannot be completed until you complete this challenge", 0],
        ["Do whatever challenge you just did, if you didnt do any challenge yet then skip this card with no consequence", 1],
        ["LUCKKYYYYY taggers must all say all of their school courses for next year, 1 at a time, runner times them, for every 30 seconds they take runner gets 0.5 point", 1],
        ["Must touch a bag of chips, stays in effect until you touch the bag of chips", 2],
        ["Convince someone in dms to say “new fogga” and send screenshot in idli", 2],
        ["Get on facetime with taggers and name songs of a chosen artist, if you name more get 2 points if they name more stand still for 2 min and can't choose another challenge until that time ends", 2],
        ["Roll around in grass (prove on call)", 1],
        ["Sing a full Bruno mars song on call can search up lyrics, if at any point you stop before the end of the song you must restart", 2]
    ];


    const rnum = Math.floor(Math.random() * challenges.length);

    return [String(rnum) + ": " + challenges[rnum][0], challenges[rnum][1]]; 
}
