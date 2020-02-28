import React, {useState,useEffect, useCallback} from "react"
import SearchButton from "./SearchButton"
import SingleMovie from "./SingleMovie"
import userDebounce from "../Helpers/useDebounce.js"
import loader from "../Assets/loader.gif"
import '../style.css'
function SearchBar(){

      const wrapperDiv ={
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        marginLeft: "2%",
        marginRight: "2%"
      }
      const loaderStyle ={
        width: "32px",
        height: "32px"
      }

      const movies = {
        width: "96%",
        top: "85px",
        background: "whitesmoke",
        borderRadius: "0px 0px 5px 5px",
        position: "absolute",
        border:"0px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }


      const [keyword, setKeyword] = useState('')
      const [results, setResults] = useState([])
      const [isSearching, setIsSearching] = useState(false)
      const [inputValue, setInputValue] = useState('')

      const debouncedSearch = userDebounce(keyword, 300)

      const getMovies = (keyword) =>{
        fetch('https://api.themoviedb.org/3/search/movie?api_key=ba0ac7475d9d6eef735d172d922bea03&language=en-US&query='+keyword)
        .then((response) => {
          return response.json()
        }).then((response) => {
            setIsSearching(false)
            setResults(response.results.slice(0,8))
          }
        )
      }


      const handleCardClick = (movieData) =>{
            setInputValue(movieData.original_title)
            setResults([])
      }


      useEffect( () => {
          if(debouncedSearch && debouncedSearch.length>=3){
            setIsSearching(true);
            getMovies(debouncedSearch)
          }else{
            setResults([])
          }
      },

      [debouncedSearch]
    )

      return (
        <div style={wrapperDiv}>
          <div className="searchBar">
          <input
              value={inputValue}
              type="text"
              name="query"
              placeholder="Enter movie name"
              onChange={e => {
                setInputValue(e.target.value)
                setKeyword(e.target.value)
              }}/>
          <SearchButton />
          </div>

          <div style={movies}>
            {isSearching && <img style={loaderStyle} src={loader} alt="loading..." />}
            {results.map( (item) => <SingleMovie
              key={item.id}
              handleCardClick={handleCardClick}
              item={item}/>)}
          </div>


        </div>
      )
    }

export default SearchBar
