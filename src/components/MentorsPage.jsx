import React, { useState } from 'react';
import MentorCard from './MentorCard';
import mentorsData from './mentorsData';

const MentorsPage = () => {
  const [uniOpen, setUniOpen] = useState(false);

  const toggleUniOpen = () => {
    setUniOpen(!uniOpen);
  };

  const mentorsInfoData = uniOpen ? mentorsData : mentorsData.slice(0, 3);
  return (
    <>
      <header className="">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center font-bold tracking-tight ">
            Meet Yours Mentors
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentorsInfoData.map((mentor) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              title={mentor.title}
              image={mentor.image}
              bio={mentor.bio}
              contact={mentor.contact}
            />
          ))}
        </div>
        <button onClick={toggleUniOpen} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full">
            {uniOpen ? "Show Less" : "Show All"}
          </button>
      </div>
    </>
  );
};

export default MentorsPage;
