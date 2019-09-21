import React, { memo, useState, useEffect}from 'react';

import Button from './button';
import NewsCard from './news-card';

import Api from '../api/index';

import './style.scss';

const NewsPage = (props) => {

	const { fetchForNews } = Api;

	const [allNews, setNews] = useState(null);
	const [limit, setLimit] = useState(10);

	useEffect(() => {
		fetchForNews()
		.then(currNews => setNews(currNews.articles))
		.catch(e => console.error(e))
	},[fetchForNews])


	const changeHandler = _ => {
		setLimit(limit + 10)
	}

  return (
    <div className={`news-page`}>
    	{!allNews ? 
    		<p className={`pre-loading`}> Loading... </p>
    		: 
    		<NewsCard newsData={allNews.slice(0, limit)}/>}
    		{allNews && <Button changeHandler={changeHandler} />}
    	

    </div>
  )
}

export default memo(NewsPage);