import Content from '@/components/transparency/Content'
import LandingPage from '@/components/transparency/LandingPage'
import Overview from '@/components/transparency/Overview'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-full">
        <LandingPage/>
        <Overview/>
        <Content/>
    </div>
  )
}

export default page