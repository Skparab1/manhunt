"use client"

import React, { useState, useEffect } from 'react';
// import './index.css'

import { Button } from "@/components/ui/button"

import supabase from "../utils/supabase";

import type { Session } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

import Head from 'next/head';


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
      <div className='w-1/2 ml-[25%] mt-32'>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]}
      />
      </div>
    )
  } else {
    // console.log(session);
    // location.href = "/";

    return (
      <div className='text-center ml-1/2 mt-[100px]'>
        <Head>
          <title>Manhunt - Auth</title>
          <meta
            name="description"
            content="Jabari Auth"
          />
        </Head>

        <div>Hello, {session.user.email}</div>
        <Button onClick={() => { window.location.href = "/"; }}>Go to Manhunt</Button>

        <Button className='bg-green-400' onClick={async () => {
          const { error } = await supabase.auth.signOut()
          if (error) console.log('Error logging out:', error.message)
          else console.log('Logged out successfully')
        }}>Logout</Button>
      </div>
    )
  }
}