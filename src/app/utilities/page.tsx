import Link from 'next/link';
import { title } from 'process';
import React from 'react'

const cardData = [
  {
    title: 'Base64 Encoder and Decoder',
    description: 'Easily encode and decode Base64 data with our online utility.',
    route: '/utilities/base64EncoderDecoder'
  },
  {
    title: 'JSON Formatter',
    description: 'Easily format and minify JSON data with our online utility.',
    route: '/utilities/jsonFormatter'
  },
  {
    title: 'URL Encoder and Decoder',
    description: 'Easily encode and decode URL data with our online utility.',
    route: '/utilities/urlEncoderDecoder'
  },
  {
    title: 'String Case Converter',
    description: 'Easily convert your strings to uppercase, lowercase, constant case,etc with our online utility.',
    route: '/utilities/stringCaseConverter'
  },
  {
    title: 'Base Number Converter',
    description: 'Easily convert your numbers between binary, octal, decimal, and hexadecimal with our online utility.',
    route: '/utilities/baseNumberConverter'
  },
  {
    title: 'Epoch Time Converter',
    description: 'Easily convert your epoch time to human-readable time and vice versa with our online utility.',
    route: '/utilities/epochTimeConverter'
  }
]


function Card(props: any) {
  return (

    <div className="card bg-base-100 sm:w-full md:w-96 lg:w-96 lg:h-56 border hover:shadow-2xl sm:shadow-lg"> 
    {/* TODO: height of the card should be set and md and lg width should check
        TODO: use the localstorge to store the  input data for tools
    */}
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
      <div className="grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2  md:gap-5 laptop:grid-cols-2  laptop:gap-5 grid-cols-3 gap-10">
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
      {/* TODO: add a new screen size : 1200px range to 1500 for the 2 col grid*/}
        <h1 className='text-5xl font-bold text-center p-4'>devUtils</h1>
        <p className='text-center text-2xl sm:p-1 sm:text-xl'>A collection of utilities for developers</p>
      <div className='sm:py-6 md:pt-16 lg:w-auto lg:p-24'>
        <DisplayCards/>
      </div>
    </main>
  );
};

export default Utilizes;