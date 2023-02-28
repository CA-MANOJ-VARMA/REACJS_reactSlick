// Write your code here
// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  slickerFunction = () => {
    const {planetsList} = this.props
    console.log(planetsList)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem>
              <div className="css-planetItem-container">
                <h1>PLANETS</h1>
                <div>
                  <img
                    src={eachPlanet.imageUrl}
                    alt={`planet ${eachPlanet.name}`}
                    className="css-planetImage-itself"
                  />
                  <h1>{eachPlanet.name}</h1>
                  <p>{eachPlanet.description}</p>
                </div>
              </div>
            </PlanetItem>
          ))}
        </Slider>
      </div>
    )
  }

  render() {
    return <div className="css-bg-container">{this.slickerFunction()}</div>
  }
}

export default PlanetsSlider
