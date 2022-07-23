

const FilterByGenre = ({genres, setGenreSearched}) => {

    return(
        <>
            {
                genres && genres.map((genre)=> (
                    <button key={genre.id} onClick={()=>setGenreSearched(genre.id)}>{genre.name}</button>
                ))
            }
        </>
    );
}

export default FilterByGenre;