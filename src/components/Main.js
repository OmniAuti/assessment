import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import TagSearchInput from "./TagSearchInput";

import StudentCardsContainer from "./StudentCardsContainer";

const Main = () => {
  // API
  const api = "https://api.hatchways.io/assessment/students";

  // STATES ========================================================
  // API STATE
  const [apiData, setApiData] = useState([]);
  // SEARCH STATE
  const [searchedName, setSearchedName] = useState("");
  const [searchedTag, setSearchedTag] = useState("");
  // FILTER STATE
  const [filteredArr, setFilteredArr] = useState(apiData)
  // TAGGED DATA
  const [taggedData, setTaggedData] = useState(apiData)
  // END OF STATES ==================================================

  // EFFECTS ========================================================
  // FETCH API DATA
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setApiData(data.students));
      setFilteredArr(apiData)
      setTaggedData(apiData)
  }, []);
  // SET FILTERED DATA WHEN API PULLED

  useEffect(() => {
   for (var data of apiData) {
     data.tags = [];
    }
   setFilteredArr(apiData)
  }, [apiData]);
  // END OF EFFECTS ========================================================

  // FUNCTIONS =============================================================
  const handleSearch = (e) => {
    setSearchedName(e.target.value);
    if (e.target.value === '') {
      if (searchedTag === '') {
        setFilteredArr(apiData)
        return
      }
      const searchedTagResult = filteredArr.filter(data => data.tags.some(tag => tag.toLowerCase().startsWith(searchedTag.toLowerCase())));
      setFilteredArr(searchedTagResult)
      return;
    }
    const searchResult = apiData.filter(data => data.firstName.toLowerCase().startsWith(e.target.value.toLowerCase()) || data.lastName.toLowerCase().startsWith(e.target.value.toLowerCase()))
    setFilteredArr(searchResult)
  };
  // ADDS TAGS TO OBJECT ===================================================
  const handleTagSubmission = (val, id) => {
    var filterData = apiData; 
      for (let data of filterData) {
        if (data.id === id) {
          var oldArr;
          if(data.tags) {
            oldArr = data.tags
            data.tags = [val, oldArr].flat()
            return
          }
            data.tags = [val]
        }
      }
     setApiData(filterData)
  }
// FILTER OUT THE TAGS ======================================================
  const handleTagSearch = (e) => {
    setSearchedTag(e.target.value)
    if (e.target.value === '') {
      if (searchedName === '') {
        setFilteredArr(apiData)
        return
      }
      setFilteredArr(apiData);
      const searchResult = apiData.filter(data => data.firstName.toLowerCase().startsWith(searchedName.toLowerCase()) || data.lastName.toLowerCase().startsWith(searchedName.toLowerCase()))
      setFilteredArr(searchResult)
      return;
    }
    const searchedTagResult = filteredArr.filter(data => data.tags.some(tag => tag.toLowerCase().startsWith(e.target.value.toLowerCase())));
    setFilteredArr(searchedTagResult)
  }
  // END OF FUNCTIONS ========================================================

  return (
    <main>
      <SearchInput handleSearch={handleSearch} />
      <TagSearchInput handleTagSearch={handleTagSearch} />
      <StudentCardsContainer handleTagSubmission={handleTagSubmission} apiData={filteredArr} />
    </main>
  );
};

export default Main;
