import styles from './OurClientsSection.module.scss';

function OurClientsSection() {
  return (
    <section id='our-clients' className={styles.ourClientSection}>
      <div className={styles.clientLogoWrapper}>
        <img
          src='https://assets.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76fc4f08023d8_Yelp_Logo.svg'
          loading='lazy'
          alt=''
          className='social-logo'
        />
      </div>
      <div className={styles.clientLogoWrapper}>
        <img
          src='https://assets.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76fe9178023d9_NewYorkTimes.svg'
          loading='lazy'
          alt=''
          className='social-logo wide'
        />
      </div>
      <div className={styles.clientLogoWrapper}>
        <img
          src='https://assets.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f73a38023da_New_Bloomberg_Logo.svg'
          loading='lazy'
          alt=''
          className='social-logo wide hide'
        />
      </div>
      <div className={styles.clientLogoWrapper}>
        <img
          src='https://assets.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f27ff8023d7_CBS_News_logo.svg'
          loading='lazy'
          alt=''
          className='social-logo hide'
        />
      </div>
      <div className={styles.clientLogoWrapper}>
        <img
          src='https://assets.website-files.com/5f5be145dea76ffe978023b7/5f5be145dea76f5e428023d6_American_Broadcasting_Company_Logo.svg'
          loading='lazy'
          alt=''
          className='social-logo'
        />
      </div>
    </section>
  );
}

export default OurClientsSection;
