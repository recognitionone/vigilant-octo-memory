import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Divider from '@material-ui/core/Divider'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <Divider />
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default HomeView
