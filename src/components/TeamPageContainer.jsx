import Teampage from './Teampage';
import universitiesData from './universitiesData'; 

const TeamPageContainer = () => {
  return (
    <Teampage
      title="Team Page"
      description="Learn from scientists and research scholars from the top institutes in the world."
      universities={universitiesData} 
    />
  );
};

export default TeamPageContainer;
