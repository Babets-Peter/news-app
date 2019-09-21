import React, { memo } from 'react';

const NewsCard = (props) => {

	const { newsData } = props;
	
  return (
    <ul className={`news__list`}>
    	{newsData.map((currNews, newsInd) => {
    		const { title, content, author, description, publishedAt, url, urlToImage, source: { name } } = currNews;
    		const prettyDate = new Date(publishedAt).toLocaleString();

    		return(
    			<li key={newsInd+1} className={`new-details`}>
    				<div className={`new-details__title`}>
    					<h3>{title}</h3>
    				</div>
			    	 <div className={`new-details__image`}>
			    	 	<img src={`${urlToImage}`} alt="" />
			    	 </div>
    				<div className={`new-details__content`}>
    					<p>{content}</p>
    				</div>
			    	<div className={`new-details__link`}>
			    		<a href={`${url}`}>See more details</a>
			    	</div>
			    	<div className={`new-details__description`}>
			    		<p>Description:</p>
			    		{description}
			    	</div>
			    	<div className={`new-details__author`}>
			    		<p>Author:</p> 
			    		<strong>{author}</strong>
			    	</div>
			    	<div className={`new-details__source`}>
			    		Website:&nbsp;{name}
			    	</div>
			    	<div className={`new-details__published`}>
			    		<span>{prettyDate}</span>
			    	</div>
    			</li>);
    	})}
    	
    </ul>
  )
}

export default memo(NewsCard);
