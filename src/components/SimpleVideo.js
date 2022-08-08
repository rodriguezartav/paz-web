import { IKImage } from 'imagekitio-react'
import React, { useState, useEffect, useRef } from 'react'

import SimpleImage from './SimpleImage'

const urlEndpoint = 'https://ik.imagekit.io/paz/'

export default function SimpleVideo(props) {
  let { src, width, transformations, className } = props

  let newSrc = `video_support/${src}/master_1.jpg`
  return (
    <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
      <button
        type="button"
        className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className="sr-only">Watch our video to learn more</span>

        <SimpleImage className="w-full" src={newSrc} width={250} />

        <span
          className="absolute inset-0 flex h-full w-full items-center justify-center"
          aria-hidden="true"
        >
          <svg
            className="h-20 w-20 text-indigo-500"
            fill="currentColor"
            viewBox="0 0 84 84"
          >
            <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
            <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
          </svg>
        </span>
      </button>
    </div>
  )

  return (
    <video
      className={className}
      controls
      autoPlay
      src={urlEndpoint + src}
      constrols
    />
  )
}
