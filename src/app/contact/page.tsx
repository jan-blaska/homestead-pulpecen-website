import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className='mx-auto flex flex-col items-center w-[95%] md:max-w-7xl'>
      <h1 className='mb-6 mt-12 md:mt-24 underline underline-offset-4'>
        Kontakt
      </h1>

      <p className="mb-12 text-lg text-gray-700 text-center">
        Budeme rádi, když nás navštívíte osobně nebo se nám ozvete, pokud máte otázky 
        ohledně našich koní či čehokoliv dalšího. Jsme otevření dotazům i nezávazným návštěvám.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Verča */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-semibold">Verča Blašková</h2>
          <div className='flex items-center space-x-3'>
            <Mail className="w-5 h-5 text-gray-700" />
            <a href="mailto:veronikablaskova@seznam.cz" className="hover:underline">
              veronikablaskova@seznam.cz
            </a>
          </div>
        </div>
        {/* Jana */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-semibold">Jana Blašková</h2>
          <div className='flex items-center space-x-3'>
            <Mail className="w-5 h-5 text-gray-700" />
            <a href="mailto:janapulpecen@seznam.cz" className="hover:underline">
              janapulpecen@seznam.cz
            </a>
          </div>
          <div className='flex items-center space-x-3'>
            <Phone className="w-5 h-5 text-gray-700" />
            <a href="tel:+420736447264" className="hover:underline">
              +420&nbsp;736&nbsp;447&nbsp;264
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact;
