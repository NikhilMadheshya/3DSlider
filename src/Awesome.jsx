import React from 'react';
import blogs from './FamousBlog.json';
class  Awesome extends React.PureComponent {
    render() { 
        return (  
            <section className='container'>
                <input type='radio' id='forOne' name='switch'  />
                <input type='radio' id='forTwo' name='switch'/>
                <input type='radio' id='forThree' name='switch'/>
                <input type='radio' id='forFour' name='switch'/>
             <section className='box--container'>
                 <div className='image--box'>
               {
                   blogs.map((obj,ind)=>{
                    return (
                        <div className='image' key={ind}> 
                        <img src={obj.image} alt={obj.image} /> 
                        <div className='image--content'> 
                        <h3>{obj.title}</h3>
                         <p>{obj.description}</p>
                         <button className='more'>More</button>
                         <ul className='social'>
                          <li><a href='#' className='fa fa-facebook' style={{'--color':'blue'}}></a></li>
                          <li><a href='#' className='fa fa-instagram' style={{'--color':'crimson'}}></a></li>
                          <li><a href='#' className='fa fa-twitter' style={{'--color':'cyan'}}></a></li>
                        </ul>
                        </div>
                        </div>
                    )
                   })
               }
              </div>
                 <div className='content--box'>
               {
                   blogs.map((obj,ind)=>{
                    return (
                        <div className='content' key={ind}> 
                        <h3>{obj.title}</h3>
                         <p>{obj.description}</p>
                         <button className='more'>More</button>
                         <ul className='social'>
                          <li><a href='#' className='fa fa-facebook' style={{'--color':'blue'}}></a></li>
                          <li><a href='#' className='fa fa-instagram' style={{'--color':'crimson'}}></a></li>
                          <li><a href='#' className='fa fa-twitter' style={{'--color':'cyan'}}></a></li>
                        </ul>
                        </div>
                    )
                   })
               }
              </div>
             </section>
             <div className='carousel'>
             <label htmlFor='forOne' className='switch'></label>
             <label htmlFor='forTwo' className='switch'></label>
             <label htmlFor='forThree' className='switch'></label>
             <label htmlFor='forFour' className='switch'></label>
            </div> 
            </section>
        );
    }
}
 

export default Awesome;