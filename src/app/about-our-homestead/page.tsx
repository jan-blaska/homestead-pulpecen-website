import React from 'react';
import ContentTextWithPhoto from '@/components/ContentTextWithPhoto';
import PusaAsAQueen from "/public/about-our-homestead/pusa-as-a-queen.jpg";
import Homestead from "/public/about-our-homestead/homestead.jpg";
import MrBartaDiaryFirstPage from "/public/about-our-homestead/mr_barta_diary_first_page.jpg";
import MrBartaDiaryPageAboutWork from "/public/about-our-homestead/mr_barta_diary_page_about_work.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O našem statku – Stáj Půlpecen",
  description:
    "Příběh rodinného statku Stáj Půlpecen na Svitavsku. Historie, koně, majitelé, deník pana Bárty a původ názvu obce Půlpecen.",
  openGraph: {
    title: "O našem statku – Stáj Půlpecen",
    description:
      "Poznejte historii statku Stáj Půlpecen, naše koně a příběhy z deníku pana Bárty. Tradice sahající více než sto let zpět.",
    url: "https://stajpulpecen.cz/about-our-homestead",
    siteName: "Stáj Půlpecen",
    type: "article",
    images: [
      {
        url: "https://stajpulpecen.cz/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://stajpulpecen.cz/about-our-homestead",
  },
};

const AboutOurHomestead = () => {
  return (
    <main className='flex flex-col items-center'>
      
      <h1 className='mt-16 mb-8 w-[95%] md:max-w-7xl text-left'>
        Rodinný statek, kde koně jsou součástí rodiny
      </h1>

      <ContentTextWithPhoto 
        imageSrc={PusaAsAQueen.src}
        imageAspectRatio='3 / 2'
        className='mb-16'
        imageAlt='Klisna Pusa jde po pastvině a vypadá u toho jako sebevědomě kráčící královna'
        textArray={["Na našem statku byly koně odjakživa. Byly to většinou koně tažní, až v posledních letech jsme si pořídili koníky jezdecké. Nejprve Helču a o několik let později hřebečka Denýska. Ačkoli jsme se snažili koníky uhlídat, příroda se nedala a v roce 2004 se nám narodila Dajánka. Denýsek a Dajánka již mají nové majitele, ale Helču máme stále.", "Na chvíli jsme do naší stáje přijali valáška Sama, kterého měla u nás ustájeného jeho majitelka Pavla a přikoupili jsme si tažného poníka Prince, se kterým jsme se ale museli nedlouho poté rozloučit, protože mu zdejší ovzduší nedělalo dobře na průdušky a nyní se pase na loukách kraje Libereckého.", "Dalším přírůstkem naší stáje bylo hříbátko Merlin, které se nám narodilo 21. 6. 2010 a od konce práznin 2011 má novou majitelku a jeho domovem je nyní Janov. Nejnovějším koníkem naší stáje je Pusinka, kterou jsme si pořídili na podzim roku 2011."]}
      />
      <ContentTextWithPhoto 
        imageSrc={Homestead.src}
        imageAspectRatio='3 / 4'
        reverseTextWithPhoto={true}
        className='mb-16'
        imageAlt='Statek vyfocený ze silnice'
        textArray={["Přesnou dobu postavení statku neznáme, ani neznáme všechny původní majitele. Je možné, že se tyto informace dochovaly v místní kronice, ovšem do té jsme zatím nenahlédli, ačkoli to máme v plánu. Předpokládáme, že zde mohlo být majitelů vystřídáno přibližně deset, ovšem tyto  úvahy nejsou prozatím podloženy. Jistě známe dva předchozí majitele, pana Gotliba a pana Bártu, po kterém se nám dochoval deník, do kterého si zapisoval, co se každý den dělo na statku v Půlpecnu, ale také na statku v Chrastavci, který mu také patřil, a to za roky 1912 až 17. srpna 1914.", "Pověst o vzniku názvu vesnice Půlpecen:", "Pověst o vzniku názvu vesnice Půlpecen je sice spojena s možnou existencí menších (polovičních) pecí na jejím okraji, ale také existuje vyprávění, na základě něhož tento název souvisí právě s naším statkem\: Paní, která žila ve tvrzi nad obcí Chrastavec, se jednoho dne dozvěděla, že přišla na tento statek nová hospodyňka. Rozhodla se tedy, že vyzkouší její pohostinnost. Vypravila se tam oblečená za chudou ženu, aby poprosila o něco k jídlu. Ačkoli v té době jistě jídla nebylo nazbyt, dostala od hospodyňky kus chleba. A paní z tvrze ji za to poděkovala: \"Pán Bůh zaplať, za toho půl pecna!\" a tak se této osadě začalo říkat Půlpecen."
        ]}
      />
      <ContentTextWithPhoto 
        imageSrc={MrBartaDiaryFirstPage.src}
        imageAspectRatio='1 / 1'
        className='mb-16'
        imageAlt='První stránka z deníku pana Bárty.'
        textArray={["Toto je první list, již zmíněného deníku pana Bárty. V pravo nahoře jsou jenom nějaké výpočty, no to víte, jedná se o zápisy domácích záležitostí a i to k tomu patří."]}
      />
      <ContentTextWithPhoto 
        imageSrc={MrBartaDiaryPageAboutWork.src}
        imageAspectRatio='3 / 4'
        reverseTextWithPhoto={true}
        imageAlt='Stránka z deníku pana Bárty kde píše o práci na statku.'
        textArray={["Další ukázku z deníku jsme vybrali z období konce března. Je vidět, že počasí bylo dost proměnlivé jak se na končící březen patří. Jeden den je pěkný, druhý den je sychravo, větrno a zima. Ačkoli ale počasí ještě hospodáři moc nepřálo, již je spoustu práce s vláčením, setím ovse a ječmenu, a z 30. března je také záznam o sázení brambor."]}
      />

    </main>
  )
}

  export default AboutOurHomestead