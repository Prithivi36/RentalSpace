import React from 'react'
import SpaceComp from './DashComp/SpaceComp';
import { getUserSpace, getUserStorage } from '../../api/Api';

function MySpaces(props) {


  const [mySpace, setMySpace] = React.useState([]);

  console.log(props.storage)
  console.log("ithu")
  console.log(mySpace)

  React.useEffect(() => {
    props.storage?getUserStorage(localStorage.getItem('user')).then(res => setMySpace(res.data)):
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
            <SpaceComp storage={props.storage} key={space._id} space={space} />
          );
        })
      }
    </div>
  )
}

export default MySpaces