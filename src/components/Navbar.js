import react,{useContext} from 'react';
import {Appcontext} from './../contexts/index';
function Navbar(props) {
	const ListData=useContext(Appcontext);
	const renderItems=()=>{
		const ListDivItems= ListData[0].map((e,index)=>{
			return (
					<div className="item" key={index} ><a href={e.url}><p>{e.icon} {e.label}</p></a></div>
				);
		});
		return ListDivItems;
	}
  return (
   <>
   		<div className="Navbar" style={props.setMoveLeft}>
   				<div className="title">
   					<p>{props.title}</p>
   				</div>
   				<div className="groupItem">
   					<div className="ListItem">
   						{renderItems()}
   					</div>
   				</div>
   		</div>
   </>
  );
}

export default Navbar;
