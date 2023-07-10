
import styles from './Container.module.css'
import PropTypes from 'prop-types'
Container.propTypes = {
    children: PropTypes.any
  }.isRequired
// eslint-disable-next-line react/prop-types
function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container