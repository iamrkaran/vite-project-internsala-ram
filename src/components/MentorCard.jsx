import React from 'react';

const MentorCard = ({ name, title, image, bio, contact }) => {
  return (
    <div className="bg-[#161c23] p-6 rounded-lg shadow-md">
      <img src={image} alt={`${name} Photo`} className="w-32 h-32 mx-auto mb-4 rounded-full" />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-300 mb-2">{title}</p>
      <p className="text-gray-400 mb-4">{bio}</p>
      <a href={`mailto:${contact}`} className="text-blue-500 hover:underline">
        {contact}
      </a>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full">
        Message him Now
      </button>
    </div>
  );
};

export default MentorCard;
