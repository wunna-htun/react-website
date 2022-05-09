import React, { useState, useEffect } from "react";

const News = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://api.mediastack.com/v1/news?access_key=b7d98314f358dddd71241eaa61cf2d6a&languages=en,-de')
            .then(res => res.json()).then(json => {
                setUsers(json.data);
                console.log("API", json.data);
            });
    }, []);


    return <>
        <section>
            <h2> News</h2>
            <ul>
                {users.map(u => <li key={u.published_at+u.title}>
                    <div className="news_card">
                        <h2>
                            {u.title}
                        </h2>
                        <div className="news-subtitle">
                        <div className="tag">
                            {u.category}
                        </div>
                        { u.author!=null && u.author!=='null'?(
                        <div className="news-author">{u.author}</div>
                        

                        ):(
                         <div> </div>
                        )

                        }
                        </div>
                      
                        <img src={u.image} alt="" />
                        <div>
                            {u.description}
                        </div>

                        <div className="continue_read">
                            <a href={u.url} target="_blank" rel="noopener noreferrer">Continue</a>
                            
                        </div>

                    </div>
                </li>)} </ul>
        </section>
    </>
}

export default News