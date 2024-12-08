import Header from "../Header/header.jsx";
import Footer from "../Footer/footer.jsx";
import axios from "axios";
import './blog.css'
import { useState, useEffect,React } from "react";

function Blog() {
    const [getdata, setGetdata] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:6800/api/blog/view");
            const singlebog = response.data.data;

            const dataone = singlebog.map((x) => ({
                title: x.title,
                type: x.type,
                description:x.description
                
            }));

            setGetdata(dataone);
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="body">
            
            <div className="key">
                {getdata.length > 0 ? (
                    getdata.map((x, index) => 
                        
                <div key={index} className="section">
                    <h1 className="blog-content">{x.title}</h1>
                    <h4>{x.description}</h4>
                    <h5>{x.type}</h5>
                </div>
                    
                    )
                ) : (
                    <p>Loading blogs...</p>
                )}
            </div>
        </div>
    );
}

export default Blog;
