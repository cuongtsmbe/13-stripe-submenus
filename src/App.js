
import './App.css';
import Navbar from './components/Navbar';
import {Appcontext} from './contexts/index';
import react,{useState} from 'react';
import data from './data';
import NavbarAllSub from './components/NavbarAllSub';
function App() {
  const [ListItemHover,setListItemHover]=useState([]);
  const [leftMoveNavber,setMoveNavbar]  =useState(null);
  const [titleNavbar,settitleNavbar]    =useState(null);
  const [isShowList,setShowList]        =useState(false);
  const setList=(namepage)=>{
        const listsTemp=[];
        if(namepage=='products'){
          setMoveNavbar({left:"360px"});
        }
         if(namepage=='company'){
          setMoveNavbar({left:"700px"});

        }
        if(namepage=='developers'){
          setMoveNavbar({left:"450px"});
        }
         data.forEach((e,index)=>{
            if(namepage==e.page){
              settitleNavbar(namepage);
               listsTemp.push(e.links);
            }
          });
        setListItemHover(listsTemp);
  }
  const renderNametitleItem=()=>{
    return data.map((e,index)=>{
        return (
                <div className="NameTitleItem" key={index} onMouseOver={(b)=>{setList(e.page)}}>
                          {e.page}
                </div>
                );
    });
  }
  return (
    <Appcontext.Provider value={ListItemHover}>
      <div className="App">
            {ListItemHover.length!=0&&<Navbar title={titleNavbar} setMoveLeft={leftMoveNavber}/>}
            <div className="header">
                <div className="iconStripe">
                    Stripe
                </div>
                <div className="listTitle">
                   {renderNametitleItem()}
                </div>
                <div className="button-Sign">
                    <button className="sign">Sign</button>
                    <button className="tag" onClick={()=>setShowList(!isShowList)}>Tag</button>
                </div>

            </div>

            <div className="body" onMouseOver={()=>setListItemHover([])}>
                <div className="left">
                  <h4>Payments infrastructure for the internet</h4>
                  <p>Millions companies od all sites -- from ...</p>
                  <button>Start</button>
                </div>
                <div className="right">
                </div>
            </div>
      </div>
      {isShowList && <NavbarAllSub />}
      
    </Appcontext.Provider>
  );
}

export default App;
