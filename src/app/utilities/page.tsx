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

    <div className="card bg-base-100 w-96 border hover:shadow-2xl ">
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
    <div className="grid grid-cols-3 gap-10">
      {cardData.map((card) => (
        // eslint-disable-next-line react/jsx-key
        <Link href={card.route}>
          <Card obj={card}/>
        </Link>
      ))}
    </div>
  )
}

const Utilizes = () => {
  return (
    <main className='flex  flex-col items-center px-24 pt-24'>
      <div className='items-center'>
        <h1 className='text-5xl font-bold text-center p-4'>devUtils</h1>
        <p className='text-2xl '>A collection of utilities for developers</p>
      </div>
      <div className='pt-36 '>
        <DisplayCards/>
      </div>
    </main>
  );
};

export default Utilizes;