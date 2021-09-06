import Aos from 'aos';
import HeroInfo from './HeroInfo';
import HeroSvg from './HeroSvg'

function Hero() {
  Aos.init();
  return (
    <div id="hero">
      <HeroInfo />
      <HeroSvg />
    </div>
  )
}

export default Hero;