import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col'>
      All Courses -

      <Link href={'/courses/1'}>Course 1</Link>
      <Link href={'/courses/2'}>Course 2</Link>

    </div>
  )
}
