import CircularProgress from "@mui/material/CircularProgress";
import styles from './loader.module.css';

export default function Loader() {

  return (
      <div id={styles.loader} >
          <CircularProgress/>
      </div>
  )

}


