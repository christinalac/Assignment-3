import BreedLst from '../components/BreedLst';
import SearchBar from '../components/SearchBar';
import FilterBtn from '../components/FilterBtn';

function Home({
    breeds,
    searchTerm,
    setSearchTerm,
    setBreeds
}) {

    function sortAZ() {
        const sorted = [...breeds].sort((a, b) =>
            a.name.localeCompare(b.name));
        setBreeds(sorted);
    }

    function sortZA() {
        const sorted = [...breeds].sort((a, b) =>
            b.name.localeCompare(a.name));
        setBreeds(sorted);
    }

    const filteredBreeds = breeds.filter((breed) =>
        breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalBreeds = breeds.length;

    return (
        <div className="container">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <FilterBtn
              sortAZ={sortAZ}
              sortZA={sortZA}
            />

            <div className="summary">
              <p>Total Breeds: {totalBreeds}</p>
            </div>

            <BreedLst breeds={filteredBreeds} />
        </div>

    );
}

export default Home;

