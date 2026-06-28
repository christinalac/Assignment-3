function FilterBtn({ sortAZ, sortZA }) {
  return (
    <div className="sort">
      <button onClick={sortAZ}>
        Sort A-Z
      </button>

      <button onClick={sortZA}>
        Sort Z-A
      </button>
    </div>
  );
}

export default FilterBtn;