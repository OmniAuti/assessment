const TagSearchInput = ({handleTagSearch}) => {
  return (
    <div className="tag-search-input-container">
      <input onChange={(e) => handleTagSearch(e)} className="tag-search-input" placeholder="Search by tag" type="text" />
    </div>
  );
};

export default TagSearchInput;
