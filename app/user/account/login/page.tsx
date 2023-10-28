"use client"

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { signIn } from "next-auth/react"
import { redirect, useRouter } from 'next/navigation'
import LoginForm from '@/app/components/LoginForm'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'



// eslint-disable-next-line @next/next/no-async-client-component
export default function Login() {


  return <LoginForm />

  
}