function BreedCrd({breed}) {
  return (
    <div className="breed-card">
      <h3 style={{font: 'Copper Black', fontFamily: 'serif', fontSize: '2rem',
    fontWeight: 'bold'}} >{breed.name}</h3>
      <p style={{font: 'sans-serif'}}>Group: {breed.group}</p>
      <p style={{font: 'sans-serif'}}>Lifespan: {breed.lifespan}</p>
    </div>
  );
}

export default BreedCrd


