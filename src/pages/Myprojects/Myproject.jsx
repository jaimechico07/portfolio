import React, { useState } from 'react';
import data from '../../components/Card/Data.json';
import Card from '../../components/Card/Card';


const Myproject = () => {

  return (
    <section id='projects' className='w-full lg:flex lg:flex-col lg:h-screen  h-auto justify-center container '>
      <h2 className='text-dynamic-h1 font-audiowide text-center lg:text-right text-black pb-10 break-words leading-none' data-aos="fade-left">&lt;Proyectos&gt;</h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] max-w-[1280px] p-2 mx-auto  lg:gap-6 gap-3 place-items-center">
        {data.projects.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
};

export default Myproject;
