import Link from 'next/link';
import React from 'react'

const cardData = [

  {
    title: 'String Case Converter',
    description: 'Easily convert your strings to uppercase, lowercase, constant case,etc with our online utility.',
    route: '/utilities/stringCaseConverter'
  },
  {
    title: 'Base Number Converter',
    description: 'Easily convert your numbers between binary, octal, decimal, and hexadecimal with our online utility.',
    route: '/utilities/baseNumberConverter'
  }
  ,
  {
    title: 'Epoch Time Converter',
    description: 'Easily convert your epoch time to human-readable time and vice versa with our online utility.',
    route: '/utilities/epochTimeConverter'
  },
  {
    title: 'Base64 Encoder and Decoder',
    description: 'Easily encode and decode Base64 data with our online utility.',
    route: '/utilities/base64EncoderDecoder'
  },
  {
    title: 'URL Encoder and Decoder',
    description: 'Easily encode and decode URL data with our online utility.',
    route: '/utilities/urlEncoderDecoder'
  }
]


function Card(props: any) {
  return (

    <div className="card bg-base-100 w-96 border hover:shadow-2xl sm:shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{props.obj.title}</h2>
        <p>{props.obj.description}</p>
        <Link href={props.obj.route}>
          <div className="card-actions justify-end">
            <button className="btn btn-outline">Try it</button>
          </div>
        </Link>
      </div>
    </div>
  )
}
function DisplayCards() {
  return (
    <div >
      <div className="grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2  md:gap-5 lg:grid-cols-3 lg:gap-10">
      {cardData.map((card) => (
        // eslint-disable-next-line react/jsx-key
        <Link className='w-fit' href={card.route}>
          <Card obj={card}/>
        </Link>
      ))}
    </div>
    </div>

  )
}

const Utilizes = () => {
  return (
    <main className='flex flex-col sm:px-4 sm:pt-4 md:px-24 md:pt-24 lg:px-24 lg:pt-24 items-center'>
        <h1 className='text-5xl font-bold text-center p-4'>devUtils</h1>
        <p className='text-center text-2xl sm:p-1 sm:text-xl'>A collection of utilities for developers</p>
      <div className='sm:py-6 md:pt-16 lg:w-auto lg:p-24'>
        <DisplayCards/>
      </div>
    </main>
  );
};

export default Utilizes;