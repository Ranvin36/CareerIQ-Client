import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "./page.module.css";
import Card from "./components/card";
import features from "./dummyData/features"

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <h1>CareerIQ.</h1>
          </div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Docs</a></li>
          </ul>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <div className={styles.bgBtn} style={{backgroundColor:"transparent"}}>
                <a href="">Login</a>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.bgBtn}>
                <a href="">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerContent}>
            <div className={styles.headerContentText}>
              <div>
                <h1>Optimize Your Resume. Land Your Dream Job.</h1>
              </div>
              <div className={styles.headerContentTextDesc}>
                <p>Struggling with your resume? Let our AI coach help you craft the perfect one and match it to your dream job.</p>
              </div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.inputBg}>
                <div>
                  <input type="text" placeholder="What's Your Email?" />
                </div>
                <div className={styles.getStarted}>
                  <a href="">Get Started</a>
                  <IoIosArrowRoundForward size={25} style={{marginLeft:5}}/>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.featuresContent}>
          <div className={styles.featuresContentText}>
            <h1>What Makes CareerIQ Different ?</h1>
          </div>
          <div className={styles.cardsLayout}>
          {features && features.map((item:any,index:number) => {
            console.log(item)
            return(
              <div key={index}>
                <Card item={item}/>
              </div>
            )
          })}
          </div>
        </div>
      </div>
      <div className={styles.quote}>
        <div className={styles.quoteContent}>
          <div className={styles.quoteText}>
            <h3> AI-powered tool that helps you improve your resume, match job descriptions, and get career advice</h3>
          </div>
        </div>
      </div>

    </div>
  );
}
