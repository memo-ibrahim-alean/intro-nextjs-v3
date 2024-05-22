import styles from './style.module.css'

const DocsPage = ({ params }) => {
  console.log(params)
  return (
    <div className={styles.title}>docs</div>
  )
}

export default DocsPage
