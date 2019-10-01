import React from 'react'

const Notifications = (props) => {
    const {notifications} = props;
    return(
        <div className="section">
         <div className="col s12 m6">
          <div className="card blue-grey darken-1">
          <div class="card-content white-text">
           <span className="card-title">Notifications</span>
             <ul className="notifications">
              {notifications && notifications.map(item => {
                  return (
                      <li key={item.id}>
                       <span className="pink-text"> {item.user}</span>
                       <span>{item.content}</span>
                      </li>
                  )
              })}
             </ul>
           </div>
          </div>
         </div>
        </div>
    )
}

export default Notifications