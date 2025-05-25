"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
// import './index.css'

import { Button } from "@/components/ui/button"

import supabase from "../utils/supabase";

import Image from 'next/image';

import type { Session } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import evilSpongebobGif from '../evil-spongebob-ezgif.com-video-to-gif-converter.gif';

export default function AuthPage() {
  
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])


  if (!session) {
    return (
      <div className='text-center ml-1/2 bg-stone-300'>

        <div className="w-full bg-slate-800 text-white" style={{ height: "40px" }}>
          <h1 className="absolute l-0 m-2">Manhunt</h1>
        </div>
        <div className="w-1/2 ml-[25%] mt-32">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#1e293b',
                    brandAccent: '#1e293b',
                    brandButtonText: 'white',
                    inputBorder: '#1e293b',
                    inputBackground: 'aliceblue',
                  },
                },
              }, 
            }}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Email address',
                  email_input_placeholder: 'Enter your email NOW',
                  password_label: 'Password',
                  password_input_placeholder: 'Password AHHHH',
                  loading_button_label: 'Jabari is working...',
                  confirmation_text: 'Jabari has sent a magic link to your email. Click it to verify your email.',
                },
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    )
  } else {
    // console.log(session);
    // location.href = "/";

    return (
      <div className='text-center ml-1/2 bg-stone-300'>

        <div className="w-full bg-slate-800 text-white" style={{ height: "40px" }}>
          <h1 className="absolute l-0 m-2">Manhunt • {session?.user.email}</h1>
        </div>
        
        <Button className="bg-slate-400 text-center m-4">Hello, {session.user.email}</Button>
        
        <Image
          src={evilSpongebobGif}
          alt="Evil Spongebob"
          width={300}
          height={200}
          style={{ display: "inline-block" }}
        />

        <Button className="m-2 bg-blue-400 mt-8" onClick={() => { window.location.href = "/"; }}>Go to Manhunt</Button>
        <Button className="m-2" onClick={() => { window.location.href = "/admin"; }}>Admin</Button>
        <Button className='bg-green-400 m-2' onClick={async () => {
          const { error } = await supabase.auth.signOut()
          if (error) console.log('Error logging out:', error.message)
          else console.log('Logged out successfully')
        }}>Logout</Button>
      </div>
    )
  }
}