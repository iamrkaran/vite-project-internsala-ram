const Card = ({ title, logo, description }) => {
  return (
    <div className="bg-[#161c23] p-2 rounded-lg shadow-md">
      <img src={logo} alt={`${title} Logo`} className="w-16 h-16 mx-auto mb-2" />
      <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
      <p className="text-gray-3">{description}</p>
    </div>
  );
};
  
  export default Card;