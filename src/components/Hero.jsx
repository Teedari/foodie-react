import { ArrowRightOutlined ,DingtalkOutlined, ShoppingCartOutlined, GiftOutlined} from '@ant-design/icons'
import React from 'react'
import chef from '../assets/img/chef.png'
import './styles/Hero.scss'
const Hero = () => {
  return (
    <div className='container'>
    <div className='food-hero'>
    <div className='row'>
      <div className='col-md-6'>
        <div className='block-box d-flex flex-column align-items-center justify-content-center'>
          <h2>
            We ready to supply vegan food for you <span className="">anytime</span>
          </h2>
          <p>The food we provide is supplied directly from our garden, we guarantee the quality and freshness.</p>
        </div>
        <div>
          <button className='btn btn-default food-btn-primary'>shop with us <ArrowRightOutlined /></button>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='block-box d-flex align-items-center justify-content-center position-relative'>
          <img src={chef} alt='chef'  className='img-fluid'/>
          <div className='position-absolute right-0'>
            <ul className="d-flex flex-column gap-2">
              
              <HeroTile title='Fast delivery' text='Promise to deliver in 20 mins' icon={<DingtalkOutlined/>} />
              <HeroTile title='Pick up' text='Pickup delivery at your doorstep' icon={<ShoppingCartOutlined />} />
              <HeroTile title='Dine in' text='Pickup delivery at your doorstep' icon={<GiftOutlined/>} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

const HeroTile = ({title, text, icon}) => {
  return (
    <li className='tile p-4 rounded-xl d-flex align-items-center gap-2'>
      <div className='icon tile-icon shadow p-3 rounded-xl text-white'>
        {icon}
      </div>
      <div className='tile-body d-flex flex-column gap-2'>
        <h4 class>{title}</h4>
        <p className='small'>{text}</p>
      </div>
    </li>
  )
}

export default Hero
