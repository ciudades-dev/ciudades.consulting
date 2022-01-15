import { IAboutUs } from '../../fixtures/about-us-fixture'
import styles from './about-us.module.scss'

function AboutUs({ aboutUsTitle, aboutUsDescription }: IAboutUs): JSX.Element {
  return (
    <div className={styles["aboutus-container"]}>
      <div className={styles.container}>
        <div className={styles["aboutus-text-container"]}>
          <h2 className={styles["aboutus-title"]}>{aboutUsTitle}</h2>
          <div className={styles["aboutus-description"]}>
            {aboutUsDescription.map(item => <p>{item}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default AboutUs;