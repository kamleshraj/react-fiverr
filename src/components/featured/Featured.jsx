import React from 'react'
import './featured.scss'
import man from '../../images/man.png'
import search from '../../images/search.png'
const Featured = () => {
  return (
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <h1>Find the right <em>freelance</em> service, right away</h1>
                <div className='search'>
                    <div className='searchInput'>
                        <img src={search} alt='icon'/>
                        <input type='text' placeholder='Try Building Mobile App'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className='popular'>
                    <span>Popular:</span>
                    <button>Website Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className='right'>
                <img src={man} alt='banner man'/>
            </div>
        </div>
    </div>
  )
}

export default Featured