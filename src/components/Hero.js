import grid from '../images/grid.png'
import './Hero.css'

export default function Hero(){
    return(
      <section className='hero'>
        <img src={grid} alt='grid' className='hero--photo' />
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--text'> Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
      </section>
    )
}