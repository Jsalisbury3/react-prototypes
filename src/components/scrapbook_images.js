import React from 'react';

export default props =>{
    console.log(props)
    const{src}=props.about
    console.log(src.cat);
    return(
        <img src={src.cat}/>
        <img src={src.an2}/>
    )
}

