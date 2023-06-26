import { FilterListOffRounded, FilterListRounded, SearchRounded } from '@mui/icons-material';
import './Searchbar.css';
import { IconButton, Input } from '@mui/material';
function Searchbar() {
    return (
        <div className='searchbar'>
            <div className='searchbar-box'>
                <SearchRounded className='searchbar__search-icon' />
                <Input placeholder='Search or start new chat' className='searchbar__input' />
            </div>
            <IconButton>
                <FilterListRounded className='searchbar__filter' />
            </IconButton>
        </div>
    );
}
export default Searchbar;