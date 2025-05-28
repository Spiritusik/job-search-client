import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import React from 'react'

export type AvatarProps = Omit<ImageProps, "src"> & {
  src?: string | null;
}

export default function Avatar( props: AvatarProps ) {
  const { className, alt, src, ...restProps } = props;
  return (
    <>
      {
        src
          ?
            <Image
              width={48}
              height={48}
              className={clsx("w-12 h-12 object-contain", className)}
              alt={alt}
              src={src}
              loading="lazy"
              {...restProps}
            />
          : 
          <div className={clsx("w-12 h-12 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-300 text-sm", className)}>
            N/A
          </div>
      }
    </>
  )
}
