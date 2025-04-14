import { IoIosArrowRoundForward } from "react-icons/io";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import styles from "./page.module.css";
import Card from "./components/card";
import features from "./dummyData/features"
import PricingCard from "./components/pricingCard";
import pricingPlans from "./dummyData/pricingPlans.json";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Navbar/>
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
      <div className={styles.pricing}>
        <div className={styles.pricingContent}>
          <div className={styles.pricingContentText}>
            <h1>Pricing Plans</h1>
          </div>
          <div className={styles.pricingCards}>
            {pricingPlans && pricingPlans.plans.map((item,index)  =>{
              return(
                <div key={index}>
                  <PricingCard item={item}/>
                </div>
              )
            })}

          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerContentText}>
            <h1>CareerIQ.</h1>
            <p>Unlock your career potential with AI-powered resume optimization. Get matched with your dream job in minutes</p>
          </div>
          <div className={styles.footerContentLinks}>
            <div className={styles.footerContentLinksItem}>
              <h3>Product</h3>
              <ul>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">How It Works</a></li>
                <li><a href="">Testimonials</a></li>
              </ul>
            </div>
            <div className={styles.footerContentLinksItem}>
              <h3>Company</h3>
              <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Press</a></li>
              </ul>
            </div>
            <div className={styles.footerContentLinksItem}>
              <h3>Resources</h3>
              <ul>
                <li><a href="">Help Center</a></li>
                <li><a href="">Documentation</a></li>
                <li><a href="">Community</a></li>
                <li><a href="">Status</a></li>
              </ul>
            </div>
            <div className={styles.footerContentLinksItem}>
              <h3>Legal</h3>
              <ul>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Cookie Policy</a></li>
                <li><a href="">GDPR</a></li>
              </ul>
            </div>
            <div className={styles.footerContentLinksItem}>
              <h3>Get In Touch</h3>
              <ul>
                <div style={{marginBottom:15}}>
                  <p>Let's Connect and Transform Careers Together
                  Reach out for partnerships.
                  </p>
                </div>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                  <MdEmail size={20} />
                  <a href="mailto:contact@careeriq.com" style={{textDecoration:"none"}}>contact@careeriq.com</a>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                  <MdPhone size={20} />
                  <a href="tel:+1234567890" style={{textDecoration:"none"}}>+1 (234) 567-890</a>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <MdLocationOn size={20} />
                  <span>123 Career Street, Tech City</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
