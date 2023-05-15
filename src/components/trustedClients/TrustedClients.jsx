import React from 'react'
import '../trustedClients/trustedclients.scss'

const TrustedClients = () => {
  return (
    <div className='trusted-wrapper'>
       <div className='trusted-container'>
       <h2>Trusted By:</h2>
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png" alt="facebook" data-uw-rm-ima-original="facebook"/>
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png" alt="Google" data-uw-rm-ima-original="google"/>
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png" alt="NETFLIX" data-uw-rm-ima-original="netflix"/>
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png" alt="P&amp;G" data-uw-rm-ima-original="p&amp;g"/>
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png" alt="PayPal" data-uw-rm-ima-original="paypal"/>
       </div>
    </div>
  )
}

export default TrustedClients