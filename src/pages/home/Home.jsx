import React from 'react'
import './home.scss'
import Featured from '../../components/featured/Featured'
import TrustedClients from '../../components/trustedClients/TrustedClients'
import PopularServices from './../../components/PopularServices/PopularServices';
import SectionTitle from '../../components/SectionTitle';
import check from '../../images/check.png'
import bestPart from '../../images/bestPart.PNG'
import solutionBuilt from '../../images/solutionBuilt.JPG'
const Home = () => {
  return (
    <>
      <Featured/>
      <TrustedClients/>
      <PopularServices/>
      <div className='theBestPart-Wrapper'>
        <div className='container'>
          <div className='best-left'>
            <SectionTitle title={'The best part? Everything.'}/>
            <ul>
              <li>
                <h3><img src={check} alt='check'/>Stick to your budget</h3>
                Find the right service for every price point. No hourly rates, just project-based pricing.
              </li>
              <li>
                <h3><img src={check} alt='check'/>Get quality work done quickly</h3>
                Hand your project over to a talented freelancer in minutes, get long-lasting results.
              </li>
              <li>
                <h3><img src={check} alt='check'/>Pay when you're happy</h3>
                Find the right service for every price point. No hourly rates, just project-based pricing.
              </li>
              <li>
                <h3><img src={check} alt='check'/>Count on 24/7 support</h3>
                Find the right service for every price point. No hourly rates, just project-based pricing.
              </li>
            </ul>
          </div>
          <div className='best-right'>
            <img src={bestPart} alt='right video'/>
          </div>
        </div>
      </div>
      <div className='explore-market'>
        <div className='container'>
        <SectionTitle title={"You need it, we've got it"}/>
        <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className='theBestPart-Wrapper dark'>
        <div className='container'>
          <div className='best-left'>
            <SectionTitle title={'A solution built for business'}/>
            <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
            <ul>
              <li>
                <h3><img src={check} alt='check'/>Stick to your budget</h3>
              </li>
              <li>
                <h3><img src={check} alt='check'/>Get quality work done quickly</h3>
              </li>
              <li>
                <h3><img src={check} alt='check'/>Pay when you're happy</h3>
              </li>
              <li>
                <h3><img src={check} alt='check'/>Count on 24/7 support</h3>
              </li>
            </ul>
          </div>
          <div className='best-right'>
            <img src={solutionBuilt} alt='right video'/>
          </div>
        </div>
      </div>

      <div className='inspiring-work-made'>
        <div className='container'>
        <SectionTitle title={'Inspiring work made on Fiverr'}/>
        </div>
      </div>
    </>
  )
}

export default Home