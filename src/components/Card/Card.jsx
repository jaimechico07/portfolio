import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { IconBrandGithubFilled, IconWorldWww } from '@tabler/icons-react';

const Card = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(project.additionalImages[0]);

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = e => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
        width: '100%',
        height: '100%',
      }}
    >
      <div className='shadow-lg rounded-lg' data-aos="zoom-in-up">
        <div className="flex flex-col  md:flex-row gap-4 bg-transparent  p-4 rounded-t-xl max-w  text-black font-comfortaa ">
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex gap-5 h-fit items-center cursor-pointer">
              {project.additionalImages.map((img, index) => (
                <figure
                  className="rounded-lg max-w-[80px] mx-auto shadow-lg p-2 "
                  key={index}
                  onClick={() => handleImageClick(img)}
                >
                  <img src={img} className="" alt={`additional-${index}`} />
                </figure>
              ))}
            </div>
            <div className=" h-fit flex items-center justify-center">
              {selectedImage && (
                <figure>
                  <img src={selectedImage} alt="Selected" className=" m-auto object-cover h-auto" />
                </figure>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-around gap-2 md:w-1/2">
            <h3 className="text-black text-center text-2xl">{project.title}</h3>
            <ul className="flex flex-wrap gap-2 w-full justify-center">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex gap-2 text-xs items-center justify-center">
                  <img src={skill.icon} className="w-6 h-auto" alt={skill.name} />
                  
                </li>
              ))}
            </ul>
            <p className="text-center text-xs">{project.description}</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <a
            href={project.links.website}
            className="py-1 text-white justify-center text-xs w-full rounded-bl-xl  bg-[#fc3863] gap-2 flex items-center"
            target='_blank'
          >
            Sitio Web
            <IconWorldWww className="text-white" />
          </a>
          <a
            href={project.links.github}
            className=" py-1 w-full justify-center  text-black marker:text-xs rounded-br-xl gap-2 flex items-center"
            target='_blank'  
          >
            Github
            <IconBrandGithubFilled className="text-black " />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
