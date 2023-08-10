// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {listDetails} = props
  const {id, name, teamImageUrl} = listDetails
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="card-to-row">
        <div>
          <img src={teamImageUrl} alt={name} className="team-image-url" />
        </div>
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
