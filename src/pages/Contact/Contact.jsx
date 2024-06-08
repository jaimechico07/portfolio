import React from 'react';
import { motion } from 'framer-motion';
import { IconMailFilled,IconBrandWhatsapp } from '@tabler/icons-react';

const Contact = () => {
  return (
    <section className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </section>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: 'translateX(-10%) translateY(-10%)' }}
      animate={{
        transform: 'translateX(10%) translateY(10%)',
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: 'linear',
        repeatType: 'mirror',
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("../../src/assets/noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <section id='contact' className="relative grid h-screen place-content-center bg-neutral-950 p-8" >
      <h2 className="text-center sm:text-dynamic-h2 text-3xl font-audiowide font-black sm:mb-10 mb-2 text-neutral-50">Puedes contáctame por:</h2>
      <div>
      <a href="mailto:jaimechico14@gmail.com" className="text-center text-dynamic-des text-neutral-400 flex justify-center gap-2 items-center">
        <IconMailFilled />
        jaimechico14@gmail.com
      </a>
      <a href="https://wa.me/970730986?text=FrontEnd Jaime Chico loayza" target='_blank' className="text-center text-dynamic-des text-neutral-400 flex justify-center gap-2 items-center">
        <IconBrandWhatsapp />
        +51 970730986
      </a>
      </div>
    </section>
  );
};

export default Contact;
