import React, {memo} from 'react';

const Button = (props) => {
	const { changeHandler } = props;
  return (
    <div 
    	className={`btn__more-news`} 
    	onClick={changeHandler}>
    		Next 10 news
    </div>
  )
}

export default memo(Button);