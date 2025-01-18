import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input className={styles.search}
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;
