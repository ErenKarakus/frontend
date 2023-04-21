// import { Link } from 'react-router-dom'
// import useAuth from '../../hooks/useAuth'
// import useTitle from '../../hooks/useTitle'

// const Welcome = () => {

//     const { username, isManager, isAdmin } = useAuth()

//     useTitle(`Self Tax Assessment Tool: ${username}`)

//     const date = new Date()
//     const today = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date)

//     const content = (
//         <section className="welcome">

//             <p>{today}</p>

//             <h1>Welcome {username}!</h1>

//             <p><Link to="/dash/form1s">View Form1s</Link></p>
//             <p><Link to="/dash/form1s/new">Add New Form1</Link></p>

//             <p><Link to="/dash/form2s">View Form2s</Link></p>
//             <p><Link to="/dash/form2s/new">Add New Form2</Link></p>

//             <p><Link to="/dash/form3s">View Form3s</Link></p>
//             <p><Link to="/dash/form3s/new">Add New Form3</Link></p>

//             <p><Link to="/dash/form4s">View Form4s</Link></p>
//             <p><Link to="/dash/form4s/new">Add New Form4</Link></p>
            
//             {(isManager || isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>}

//             {(isManager || isAdmin) && <p><Link to="/dash/users/new">Add New User</Link></p>}
            
//         </section>
//     )

//     return content
// }
// export default Welcome

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import useTitle from '../../hooks/useTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFileCirclePlus,
  faFolderOpen,
  fa1,
  fa2,
  fa3,
  fa4,
  faUserGear,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons"

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();

  useTitle(`Self Tax Assessment Tool: ${username}`);

  const date = new Date();
  const today = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date);

  const content = (
    <section className="welcome">
        <div className="grid-item">
          <p>{today}</p>
          <h1>Welcome {username}</h1>
        </div>


        <div className="grid-container">
        <div className="grid-item">
          <FontAwesomeIcon icon={fa1} />
          <p>
            <h4>View Form1s</h4>
            <Link to="/dash/form1s" className='icon-button'>
              <FontAwesomeIcon icon={faFolderOpen}/>            
            </Link>
          </p>
          <p>
            <h4>Add New Form1</h4>
            <Link to="/dash/form1s/new" className='icon-button'>
              <FontAwesomeIcon icon={faFileCirclePlus}/>
            </Link>
          </p>
        </div>

        <div className="grid-item">
          <FontAwesomeIcon icon={fa2} />
          <p>
            <h4>View Form2s</h4>
            <Link to="/dash/form2s" className='icon-button'>
              <FontAwesomeIcon icon={faFolderOpen}/>            
            </Link>
          </p>
          <p>
            <h4>Add New Form2</h4>
            <Link to="/dash/form2s/new" className='icon-button'>
              <FontAwesomeIcon icon={faFileCirclePlus}/>
            </Link>
          </p>
        </div>
        
        <div className="grid-item">
          <FontAwesomeIcon icon={fa3} />
          <p>
            <h4>View Form3s</h4>
            <Link to="/dash/form3s" className='icon-button'>
              <FontAwesomeIcon icon={faFolderOpen}/>            
            </Link>
          </p>
          <p>
            <h4>Add New Form3</h4>
            <Link to="/dash/form3s/new" className='icon-button'>
              <FontAwesomeIcon icon={faFileCirclePlus}/>
            </Link>
          </p>
        </div>

        <div className="grid-item">
          <FontAwesomeIcon icon={fa4} />
          <p>
            <h4>View Form4s</h4>
            <Link to="/dash/form4s" className='icon-button'>
              <FontAwesomeIcon icon={faFolderOpen}/>            
            </Link>
          </p>
          <p>
            <h4>Add New Form4</h4>
            <Link to="/dash/form4s/new" className='icon-button'>
              <FontAwesomeIcon icon={faFileCirclePlus}/>
            </Link>
          </p>
        </div>

        {(isManager || isAdmin) && (
          <div className="grid-item">
            <p>
              <h4>View User Settings</h4>
              <Link to="/dash/users" className='icon-button'>
                <FontAwesomeIcon icon={faUserGear} />
              </Link>
            </p>
            <p>
              <h4>Add New User</h4>
              <Link to="/dash/users/new" className='icon-button'>
                <FontAwesomeIcon icon={faUserPlus} />
              </Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );

  return content;
};

export default Welcome;

