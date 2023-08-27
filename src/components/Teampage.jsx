import React, { useState } from 'react';
import Card from './Card'


const Teampage = ({ title, description, universities }) => {
  const [uniOpen, setUniOpen] = useState(false);

  const toggleUniOpen = () => {
    setUniOpen(!uniOpen);
  };

  const visibleUniversities = uniOpen ? universities : universities.slice(0, 6);
  return (
    <div>
      <header className="">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center font-bold tracking-tight ">
            {title}
          </h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold mb-4">
            {description}
          </h1>
          {/* Header and main content as before */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleUniversities.map((university, index) => (
              <Card
                key={index}
                title={university.title}
                logo={university.logo}
                // description={university.description}
              />
            ))}
          </div>
          <button onClick={toggleUniOpen} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full">
            {uniOpen ? "Show Less" : "Show All"}
          </button>

        </div>
      </main>
    </div>
  );
};

export default Teampage;