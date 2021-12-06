import { SearchRounded } from '@material-ui/icons'
import styles from './SearchInputs.module.css'

const SearchInputs = ({...rest}) => {
    return (
        <div className={styles.wrapper}>
        <SearchRounded/>
            <input className={styles.input} {...rest }/>
        </div>
    )
}

export default SearchInputs
