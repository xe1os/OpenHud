import React, { useState } from 'react';
import LogoPlaceHolder from '../assets/Team_Logo.png'

const Teams = () => {
  const [bestOfType, setBestOfType] = useState(1);

  const handleBestOfClick = (type) => {
    setBestOfType(type);
  };

  const getButtonClasses = (type) => {
    return type === bestOfType
      ? 'flex w-20 h-8 border-2 !border-primary hover:!bg-primary rounded-lg justify-center items-center text-base text-text'
      : 'flex w-20 h-8 border-2 border-accent hover:bg-accent rounded-lg justify-center items-center text-text';
  };

  return (
    <div className='bg-background absolute w-full h-min lg:h-screen flex flex-col text-text justify-center items-center gap-9'>
      <section className='relative flex flex-col w-3/4 h-1/2 justify-evenly items-center mt-5'>
        <div className='flex w-full justify-evenly items-center'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl lg:text-5xl'>Team One</h1>
            <img className='w-[25%]' src={LogoPlaceHolder} alt='Team 2 Logo'/>
          </div>
          <div>
            <h1 className='text-primary text-2xl lg:text-5xl'>VS</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl lg:text-5xl'>Team Two</h1>
            <img className='w-[25%]' src={LogoPlaceHolder} alt='Team 2 Logo'/>
          </div>
        </div>
        <div className='flex flex-col w-full justify-center items-center'>
          <h4 className='font-semibold'>Best of</h4>
          <div className='flex w-full justify-center items-center gap-3'>
            <button
              className={getButtonClasses(1)}
              onClick={() => handleBestOfClick(1)}
            >
              Bo1
            </button>
            <button
              className={getButtonClasses(3)}
              onClick={() => handleBestOfClick(3)}
            >
              Bo3
            </button>
            <button
              className={getButtonClasses(5)}
              onClick={() => handleBestOfClick(5)}
            >
              Bo5
            </button>
          </div>
        </div>
      </section>

      <hr className='bg-white w-3/4 h-[1px]'/>

      <section className='relative flex flex-col w-3/4 h-1/2 justify-center items-center gap-4'>
        <h1 className='font-bold text-2xl lg:text-5xl'>Vetos</h1>
        <div className='flex flex-col lg:flex-row w-full gap-2 lg:gap-6 justify-center items-center'>
          {bestOfType &&
            Array.from({ length: bestOfType }).map((_, index) => (
              <Cards key={index} index={index + 1} />
            ))}
        </div>
      </section>
    </div>
  );
};

const Cards = (props) => {
  return (
    <div className='flex flex-col w-[80%] lg:w-56 lg:h-60 bg-white/10 text-text gap-2 justify-center items-center rounded-xl backdrop-blur-sm mb-5'>
      <h2 className='w-full flex justify-center text-3xl'>Map {props.index}</h2>
      <div>
        <div className='flex w-full justify-evenly items-center gap-1 text-background'>
          <button className='flex w-[15vw] h-[6vh] lg:w-16 lg:h-8 bg-primary rounded-lg justify-center items-center text-base'>Pick</button>
          <button className='flex w-[15vw] h-[6vh] lg:w-16 lg:h-8 bg-primary rounded-lg justify-center items-center text-base'>Decider</button>
          <button className='flex w-[15vw] h-[6vh] lg:w-16 lg:h-8 bg-primary rounded-lg justify-center items-center text-base'>Ban</button>
        </div>
      </div>
      <div className='flex flex-col w-full justify-evenly items-center'>
        <h4 className='border-2 w-2/3 text-center'>Team</h4>
        <h4 className='border-2 w-2/3 text-center'>Map</h4>
      </div>
    </div>
  );
};

export default Teams;
