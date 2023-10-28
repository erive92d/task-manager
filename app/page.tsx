import Image from 'next/image'
import Landing from './components/Landing'
import Navigation from './components/Navigation'
import handler from './api/users'

export default function Home() {
  return (
    <div>
      <Landing/>
    </div>
  )
}

