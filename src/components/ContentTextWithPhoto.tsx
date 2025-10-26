import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export type ContentTextWithPhotoData = {
    imageSrc: string;
    imageAlt: string;
    textArray: string[];
    reverseTextWithPhoto?: boolean;
    imageAspectRatio?: string;
    className?: string;
}

const ContentTextWithPhoto = ({
    imageSrc,
    imageAlt,
    textArray,
    reverseTextWithPhoto = false,
    imageAspectRatio = "4 / 3",
    className,
}: ContentTextWithPhotoData) => {
  return (
    <div className={clsx('flex flex-col w-[95%] md:max-w-7xl gap-8 lg:gap-16 items-center', reverseTextWithPhoto ? 'md:flex-row-reverse' : 'md:flex-row', className)}>
        <div className='flex flex-col gap-4 md:flex-1'>
            {textArray.map((text, index) => <p key={index}>{text}</p>)}
        </div>
        <div className="relative w-full h-auto md:flex-1" style={{ aspectRatio: imageAspectRatio }}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="rounded-md object-contain"
            />
        </div>
    </div>
  )
}

export default ContentTextWithPhoto;