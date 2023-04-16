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
            
//             {(isManager || isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>}

//             {(isManager || isAdmin) && <p><Link to="/dash/users/new">Add New User</Link></p>}
            
//         </section>
//     )

//     return content
// }
// export default Welcome

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useTitle from '../../hooks/useTitle';

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
          <p>
            <Link to="/dash/form1s">View Form1s</Link>
          </p>
          <p>
            <Link to="/dash/form1s/new">Add New Form1</Link>
          </p>
        </div>
        <div className="grid-item">
          <p>
            <Link to="/dash/form2s">View Form2s</Link>
          </p>
          <p>
            <Link to="/dash/form2s/new">Add New Form2</Link>
          </p>
        </div>

        {(isManager || isAdmin) && (
          <div className="grid-item">
            <p>
              <Link to="/dash/users">View User Settings</Link>
            </p>
            <p>
              <Link to="/dash/users/new">Add New User</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );

  return content;
};

export default Welcome;

