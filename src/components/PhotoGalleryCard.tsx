import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export type PhotoGalleryCardProps = {
    href: string,
    imageSrc: string;
    imageAlt: string;
    dateCreated: string,
    title: string,
    description?: string,
    className?: string;
}

const PhotoGalleryCard = ({
    href,
    imageSrc,
    imageAlt,
    dateCreated,
    title,
    description,
    className,
}: PhotoGalleryCardProps) => {
  return (
    <Link
        href={href}
        className={clsx("cursor-pointer shadow-md group", className)} 
      >
        <div>
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={300}
                className='group-hover:opacity-75'
            />
            <div className='pb-4 px-4 pt-2'>
                <p className='text-right text-gray-400'>{dateCreated}</p>
                <h3 className='font-bold mb-2'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
      </Link>
  )
}

export default PhotoGalleryCard