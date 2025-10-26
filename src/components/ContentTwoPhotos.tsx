import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export type ContentTextWithPhotoData = {
    imageSrc1: string;
    imageSrc2: string;
    imageAlt1: string;
    imageAlt2: string;
    className?: string;
}

const ContentTwoPhotos = ({
    imageSrc1,
    imageSrc2,
    imageAlt1,
    imageAlt2,
    className,
}: ContentTextWithPhotoData) => {
  return (
    <div className={clsx('flex flex-col md:flex-row w-[95%] md:max-w-7xl gap-8 md:gap-16 items-center', className)}>
        <div className="relative w-full md:flex-1" style={{ aspectRatio: "4 / 3" }}>
            <Image
                src={imageSrc1}
                alt={imageAlt1}
                fill
                className="rounded-md object-cover"
            />
        </div>
        <div className="relative w-full md:flex-1" style={{ aspectRatio: "4 / 3" }}>
            <Image
                src={imageSrc2}
                alt={imageAlt2}
                fill
                className="rounded-md object-cover"
            />
        </div>
    </div>
  )
}

export default ContentTwoPhotos;