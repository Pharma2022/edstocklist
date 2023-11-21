import { Outlet,useParams,useNavigate, useMatch } from "react-router-dom";

import { Link } from "react-router-dom";


const Layout=()=>{

     const match=useMatch('/ward')

    return (
        <div className="flex-col app">
            <div className="container nav-container flex-row">
            <Link className={'nav-link'}to={match? '/':'/ward'}>Sort by {match? 'drug':'ward'}</Link>

            </div>
         
    
        <Outlet/>
   
        </div>
    )
}
export default Layout