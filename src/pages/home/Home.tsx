import { memo } from 'react'
import mainImg from '../../assets/main.jpg'

const Home = memo(() => {
  return (
    <main>
      <img src={mainImg} alt={'mainImg'} />
    </main>
  )
})

export default Home