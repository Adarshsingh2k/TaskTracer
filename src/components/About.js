import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <h5 style={{fontStyle:'italic',
        fontSize='10px'
        }}>Created with ❤️ by Adarsh Singh</h5>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About