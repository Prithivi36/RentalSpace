import React from 'react'
import SpaceComp from './DashComp/SpaceComp';
import { addSpace, getUser, getUserRequest, getUserSpace } from '../../api/Api';
import MySpaceForm from './MySpaceForm';

function MySpaces() {


  const [mySpace, setMySpace] = React.useState([]);


  React.useEffect(() => {
    getUserSpace(localStorage.getItem('user')).then(res => setMySpace(res.data));
  }, []);
  return (
    <div className="myspaces">
            {mySpace.length === 0 ?
              <div className="text-center">
                <h3>No Space, Add now ??</h3>
              </div>
              :
              mySpace.map((space) => {
                return (
                  <SpaceComp key={space._id} space={space} />
                );
              })
            }
          </div>
  )
}

export default MySpaces