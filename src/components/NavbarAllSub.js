import react,{useContext} from 'react';
import data from './../data';
function NavbarAllSub(props) {
  const renderNavbarAll=()=>{
      return (
        data.map((e,index)=>{
          return(
            <>
               <div className="Items">
                 <div className="title">
                            <p>{e.page}</p>
                  </div>
                  <div className="listItem">
                       { e.links.map((events,index)=>{
                            return(
                                  <div className="item" key={index}>
                                      <a href={events.url}><p>{events.icon} {events.label} </p></a>
                                  </div>
                              );
                        })
                     }
                  </div>
                </div>
              </>
            );
          })

        );
  }
  return (
   <>
   	  <div className="ShowContainer">
          <div className="group">
              {renderNavbarAll()}

          </div>
      </div>
   </>
  );
}

export default NavbarAllSub;
