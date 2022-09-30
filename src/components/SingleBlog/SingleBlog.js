import React from 'react';

const SingleBlog = (props) => {
    const {name, about} = props.blog
    return (
        <div className='border rounded single-blog mb-2 p-2'>
            <h4 className='mb-1'>{name}</h4>
            <p>{about}</p>
        </div>
    );
};

export default SingleBlog;