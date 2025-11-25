import React from 'react';
import { Mail, Phone } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Stáj Půlpecen",
  description:
    "Kontaktujte nás ohledně našich koní, stáje nebo nezávazné návštěvy. Rádi odpovíme na vaše dotazy.",
  openGraph: {
    title: "Kontakt – Stáj Půlpecen",
    description:
      "Chcete se na něco zeptat ohledně koní nebo stáje? Ozvěte se nám. Zde najdete všechny kontaktní údaje na Stáj Půlpecen.",
    url: "https://stajpulpecen.cz/contact",
    siteName: "Stáj Půlpecen",
    type: "website",
    images: [
      {
        url: "https://stajpulpecen.cz/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://stajpulpecen.cz/contact",
  },
};

const Contact = () => {
  return (
    <main className='mx-auto flex flex-col items-center w-[95%] md:max-w-xl'>
      
      <h1 className='mb-12 mt-12 md:mt-24'>
        Kontakt
      </h1>

      <p className="mb-12 text-lg text-gray-700 text-center">
        Budeme rádi, když nás navštívíte osobně nebo se nám ozvete, pokud máte otázky 
        ohledně našich koní či čehokoliv dalšího. Jsme otevření dotazům i nezávazným návštěvám.
      </p>

      <h2 id="kontakty-zastupci" className="sr-only">
        Kontakty na zástupce stáje
      </h2>

      <section aria-labelledby="kontakty-zastupci" className="grid grid-cols-1 gap-12 md:gap-16 w-full">
        {/* Verča */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="font-semibold">Verča Blašková</h3>
          <div className='flex items-center space-x-3'>
            <Mail className="w-5 h-5 text-gray-700" />
            <a href="mailto:veronikablaskova@seznam.cz" className="hover:underline">
              veronikablaskova@seznam.cz
            </a>
          </div>
        </div>
        {/* Jana */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="font-semibold">Jana Blašková</h3>
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

      </section>
    </main>
  )
}

export default Contact;
