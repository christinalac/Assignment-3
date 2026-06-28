import BreedCard from './BreedCrd'

function BreedLst({breeds}) {
  return (
    <div className="breed-grid">
      {breeds.map((breed) => (
        <BreedCard
          key={breed.id}
          breed={breed}
        />
      ))}
    </div>
  );
}

BreedLst.propTypes = {

}

export default BreedLst;


