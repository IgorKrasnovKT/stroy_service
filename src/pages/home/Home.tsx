import { memo } from 'react'
import mainImg from '../../assets/main.jpg'

const Home = memo(() => {
  return (
    <div>
      <img src={mainImg} alt={'mainImg'} />
    </div>
  )
})

export default Home