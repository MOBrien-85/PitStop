import { SearchIcon } from './SearchIcon';
import "./SearchBar.css"

export const InterstateSearch = ({ setterFunction }) => {
    return (
        <div>
            <input
                className='interstate_searchbar'
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }
                type="text" placeholder="Find Interstate..." />
            <button type="submit" className="search-button">
                <SearchIcon />
            </button>

        </div>
    )
}