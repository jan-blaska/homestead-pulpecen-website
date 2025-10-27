import React from 'react';
import people from '@/app/about-us/about-us.json';
import ContentTextWithPhoto from '@/components/ContentTextWithPhoto';
import type { Person } from '@/types';

const AboutUs = () => {
  return (
    <div className='mx-auto flex flex-col items-stretch w-[95%] md:max-w-7xl mt-24'>
        {people.map((person: Person) => {
          return (
            <div key={person.id}>
              <h2 className='mb-2'>
                {person.name}
              </h2>
              <ContentTextWithPhoto
                imageSrc={person.image}
                imageAspectRatio={person.imageAspectRatio ?? "3 / 2"}
                reverseTextWithPhoto={true}
                className='mb-8'
                imageAlt={person.imageAlt}
                textArray={person.texts}
              />
            </div>
          )
        })}
    </div>
  )
}

export default AboutUs