import { IServices } from '../../fixtures/services.fixtures'
import Image from 'next/image'
import styles from './services.module.scss'

const Services = ({ serviceTitle, serviceSubTitle, itemsDercription, imgServiceUrl }: IServices) => {

  const myLoader = () => `${imgServiceUrl}`;

  return (
    <div className={styles["services-container"]}>
      <div className={styles.container}>
        <figure className={styles["services-img-container"]}>
          <Image 
            width={"333px"} 
            height={"239px"}
            loader={myLoader} 
            src={imgServiceUrl}
          />
        </figure>
        <div className={styles["services-text-container"]}>
          <h1 className={styles["services-title"]}>
            {serviceTitle}
          </h1>
          <h3 className={styles["services-subtitle"]}>
            {serviceSubTitle}
          </h3>
          <ul className={styles["services-items"]}>
            {itemsDercription.map(item => (
              <li className={styles["service-item"]}>
                {item}
              </li>))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;