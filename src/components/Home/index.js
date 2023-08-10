// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedData})
  }

  render() {
    const {teamsList} = this.state
    return (
      <div className="bg-image">
        <div className="to-center">
          <div className="to-row">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="ipl-logo"
              />
            </div>
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
        </div>
        <ul className="to-ul">
          {teamsList.map(each => (
            <TeamCard listDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
