import './header.css'
import { Link,useLocation } from 'react-router-dom'
function Header()
{

    const location=useLocation()
    return(
        <>
        <div className="header">
            <div className="image">

            </div>
            <div className="icons">
                <ul>

                    <li><a >Home</a></li>
                    <li><a>Contact</a></li>
                    <li><Link to={"/blog"}>
                    Blog
                    </Link></li>                    
                </ul>
            </div>
            
           
        </div>
        <div className='create'>
             {/* Conditionally render the Create Blog button */}
             {location.pathname === "/blog" && (
                    <div className="createblog">
                        <Link to="/blog/login">
                            <h5 className="create-blog">Create Blog</h5>
                        </Link>
                    </div>
            )}
        </div>
       
        </>
    )
}

export default Header