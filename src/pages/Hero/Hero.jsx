import React from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconFileCv } from '@tabler/icons-react';
import styles from './bubble.module.css';

const Hero = () => {
  return (
    <section id='hero' className="grid grid-cols-1 p-4 xl:p-0 gap-10 xl:gap-0 lg:grid-cols-1 pt-36 sm:pt-0 h-auto md:h-screen lg:mb-0 mb-16  place-items-center justify-between container -z-[10] mx-auto relative ">
      <div className="flex flex-col gap-3 text-center ">
        <p className="text-black text-3xl text-center  font-extrabold font-comfortaa" data-aos="fade-right" >Hola, mi nombre es</p>
        <h1 className="text-[#fc3863] text-dynamic-h1 leading-none text-center font-extrabold font-spaceGrotesk " data-aos="fade-left">&lt;Jaime Chico Loayza&gt;</h1>
        <h2 className="text-black text-dynamic-h2 font-comfortaa font-extrabold " data-aos="fade-right">
          {'Front-End Developer'.split('').map((child, idx) => (
            <span className={styles.hoverText} key={idx}>
              {child}
            </span>
          ))}
        </h2>
        <p className="text-black text-dynamic-des italic" data-aos="fade-left">
          Transformo ideas, combinando diseño y tecnología para crear interfaces intuitivas y visualmente impactantes.
        </p>
      </div>
    </section>
  );
};

export default Hero;
