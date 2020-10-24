import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=69f393bc985145f7ab280c4428a2afbc`)
        .then(res => res.json())
        .then(data => {
            setArticles(data.articles);
            console.log(data.articles);
        });
    }, []);
    return (
        <div>
            <h3>Top headlines: {articles.length}</h3>
            {
            articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;