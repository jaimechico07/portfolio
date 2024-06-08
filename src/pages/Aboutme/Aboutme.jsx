import React from 'react';
import { SiGithub, SiLinkedin, SiSpotify, SiInstagram } from 'react-icons/si';
import { TbFileCv  } from 'react-icons/tb';
import { useAnimate } from 'framer-motion';

const Aboutme = () => {
  return (
    <section id="aboutme" className="flex flex-col gap-10 p-2 lg:p-0 justify-center pb-20 lg:pb-0 h-auto lg:h-screen">
      <div className='container mx-auto' >
      <h2 className="text-black font-audiowide text-dynamic-h1 leading-none text-center lg:text-start " data-aos="fade-right">
        &lt;Sobre mi&gt;
      </h2>
      <p className="max-w-[900px] text-black font-comfortaa" data-aos="fade-left">
        Comencé en el mundo digital con Diseño Gráfico, pero durante mis estudios descubrí mi pasión por la creación de
        sitios web. Tras 2 años de estudio intensivo, conseguí un trabajo de verano como desarrollador frontend, lo que
        aceleró mi carrera y mejoró mis habilidades.
      </p>
      </div>
      <div className="w-full">
        <div className="mx-auto ">
          <ClipPathLinks />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

const ClipPathLinks = () => {
  return (
    <div className="divide-y " data-aos="zoom-in-up">
      <div className="grid grid-cols-3 divide-x ">
        <LinkBox Icon={SiLinkedin} href="https://www.linkedin.com/in/jaime-chico-93b7a2170/" />
        <LinkBox Icon={SiGithub} href="https://github.com/jaimechico07" />
        <LinkBox Icon={TbFileCv } href="/src/assets/Cv_JaimeChicoLoayza.pdf" />
      </div>
      <div className="grid grid-cols-2 divide-x ">
        <LinkBox Icon={SiInstagram} href="https://www.instagram.com/jaime_cl_07/" />
        <LinkBox
          Icon={SiSpotify}
          href="https://open.spotify.com/user/31y25lwo7ynzn3dv7kwpkoxfrpqq?si=4aa46fdc67014db4"
        />
      </div>
    </div>
  );
};

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0% 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = e => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: 'left',
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: 'right',
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: 'top',
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: 'bottom',
    };

    const sortedProximity = [proximityToLeft, proximityToRight, proximityToTop, proximityToBottom].sort(
      (a, b) => a.proximity - b.proximity
    );

    return sortedProximity[0].side;
  };

  const handleMouseEnter = e => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = e => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={e => {
        handleMouseEnter(e);
      }}
      onMouseLeave={e => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl text-black" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-[#fc3863] text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};
