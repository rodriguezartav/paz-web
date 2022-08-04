import { IKImage } from 'imagekitio-react'
import React, { useState, useEffect, useRef } from 'react'

const urlEndpoint = 'https://ik.imagekit.io/paz/'

export function SimpleImage(props) {
  let { src, width, transformations, className, enableRaw, text } = props

  let finalTransform = transformations || [
    {
      width: width,
    },
  ]

  if (text) finalTransform.push(text)

  return (
    <IKImage
      className={className}
      urlEndpoint={urlEndpoint}
      lqip={{ active: true, quality: 1 }}
      path={enableRaw ? src : 'images/' + src}
      width={width + 'px'}
      transformation={finalTransform}
    />
  )
}

export default SimpleImage
