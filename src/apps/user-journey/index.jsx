import React, { useState, useEffect, useCallback } from 'react';

// import Button from '@material-ui/core/Button';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
// import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
// import CancelIcon from '@material-ui/icons/Cancel';
import ForwardIcon from '@material-ui/icons/Forward';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import './index.scss';

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            //             newNode.next = null;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return null;
        let delNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = delNode.prev;
            this.tail.next = null;
            delNode.prev = null;
        }
        this.length--;
        return delNode;
    }

    shift() {
        if (!this.length) return null;
        let delNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = delNode.next;
            this.head.prev = null;
            delNode.next = null;
        }
        this.length--;
        return delNode;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(pos) {
        if (this.length === 0) return null;
        if (pos < 0 || pos >= this.length) return null;
        let current;
        if (pos <= this.length / 2) {
            console.log('From HEAD');
            current = this.head;
            let count = 0;
            while (pos !== count) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            console.log('From Tail');
            current = this.tail;
            let count = this.length - 1;
            while (pos !== count) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    set(pos, val) {
        if (this.length === 0) return null;
        if (pos < 0 || pos >= this.length) return null;
        let target = this.get(pos)
        if (target) {
            target.val = val;
            return true;
        }
        return false;
    }

    insert(pos, val) {
        if (pos < 0 || pos > this.length) return null;
        if (pos === 0) return !!this.unshift(val);
        if (pos === this.length) return !!this.push(val);
        let prevNode = this.get(pos - 1);
        let newNode = new Node(val);
        let nextNode = prevNode.next;
        //first part: prevNode & newNode
        prevNode.next = newNode;
        newNode.prev = prevNode;
        //second part: nextNode & newNode
        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;
        console.log({ prevNode, newNode, nextNode });
        return true;
    }

    remove(pos) {
        if (pos < 0 || pos > this.length) return null;
        if (pos === 0) return !!this.shift();
        if (pos === this.length) return !!this.pop();

        let prevNode = this.get(pos - 1);
        let targetNode = prevNode.next;
        let nextNode = targetNode.next;

        prevNode.next = targetNode.next;
        nextNode.prev = targetNode.prev;
        //Clean-up of removed refs
        targetNode.next = null;
        targetNode.prev = null;


        this.length--;
        return targetNode;
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            // move forward
            current = current.prev;
        }
        if (temp !== null) {
            let swap = this.head;
            this.head = this.tail;
            this.tail = swap;
        }

        return this;
    }
}

var dll = new DoublyLL();
console.log(dll);

const UserJourneyWithHooks = () => {

    const [superState, setSuperState] = useState({
        tiles: [],
        tileID: 0,
    });
    const { tiles, tileID } = superState;
    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    const [icons] = useState([
        <span key="ChildFriendlyIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="ChildFriendlyIcon"><ChildFriendlyIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="AcUnitIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="AcUnitIcon"><AcUnitIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="HomeWorkIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="HomeWorkIcon"><HomeWorkIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="MotorcycleIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="MotorcycleIcon"><MotorcycleIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="OfflineBoltIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="OfflineBoltIcon"><OfflineBoltIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="ShutterSpeedIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="ShutterSpeedIcon"><ShutterSpeedIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="QueuePlayNextIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="QueuePlayNextIcon"><QueuePlayNextIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="WhatshotIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="WhatshotIcon"><WhatshotIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="SportsEsportsIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="SportsEsportsIcon"><SportsEsportsIcon style={{ color: 'green', fontSize: 40 }} /></span>
    ]);
    /* 
        drop variable will have always the same function object of the callback function 
        between renderings of this UserJourney component.
    */
    const drop = useCallback((ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        const droppedIconClone = document.getElementById(data).cloneNode(true);
        ev.target.appendChild(droppedIconClone);
        const droppedItem = [...ev.target.children];
        droppedItem.forEach(obj => {
            obj.setAttribute('draggable', 'false');
        });
        setSuperState(prevState => {
            return ({ ...prevState, tileID: prevState.tileID + 1 });
        });
    }, []);

    const allowDrop = (ev) => {
        ev.preventDefault();
        return null;
    }

    useEffect(() => {
        const removeTile = (id) => {
            setSuperState(prevState => {
                const newTileList = prevState.tiles.filter(obj => obj.key !== id);
                return ({ ...prevState, tiles: newTileList })
            });
        };

        const createTiles = (tileID) => {
            return (
                <div className="tile" key={`tile${tileID}`} id={`tile${tileID}`}>
                    <span id={`tile__cancel${tileID}`} className="tile__cancel" onClick={() => removeTile(`tile${tileID}`)}>
                        <HighlightOffIcon style={{ color: 'grey', fontSize: 30 }} />
                    </span>
                    <span id={`tile__forward${tileID}`} className="tile__forward">
                        <ForwardIcon style={{ color: 'grey', fontSize: 50 }} />
                    </span>
                    <div id={`tile__box${tileID}`} className="tile__box" onDrop={drop} onDragOver={allowDrop}></div>
                </div>
            );
        };

        setSuperState(prevState => ({ ...prevState, tiles: [...prevState.tiles, createTiles(tileID)] }));
    }, [tileID, drop]);

    console.log('#state', superState);

    return (
        <React.Fragment>
            <div className="user-journey">
                <div className="user-journey__tray">
                    <p>Tray</p>
                    {icons}
                </div>
                <div className="user-journey__playground">
                    <p>PlayGround</p>
                    <div>
                        {tiles}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

// class UserJourney extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             tiles: [],
//             iconID: 0,
//             tileID: 0,
//             icons: [
//                 <span key="ChildFriendlyIcon" draggable="true" onDragStart={this.drag} className="user-journey__icon" id="ChildFriendlyIcon"><ChildFriendlyIcon style={{ color: 'green', fontSize: 40 }} /></span>,
//                 <span key="AcUnitIcon" draggable="true" onDragStart={this.drag} className="user-journey__icon" id="AcUnitIcon"><AcUnitIcon style={{ color: 'green', fontSize: 40 }} /></span>,
//                 <span key="HomeWorkIcon" draggable="true" onDragStart={this.drag} className="user-journey__icon" id="HomeWorkIcon"><HomeWorkIcon style={{ color: 'green', fontSize: 40 }} /></span>,
//                 <span key="MotorcycleIcon" draggable="true" onDragStart={this.drag} className="user-journey__icon" id="MotorcycleIcon"><MotorcycleIcon style={{ color: 'green', fontSize: 40 }} /></span>,
//                 <span key="OfflineBoltIcon" draggable="true" onDragStart={this.drag} className="user-journey__icon" id="OfflineBoltIcon"><OfflineBoltIcon style={{ color: 'green', fontSize: 40 }} /></span>,
//                 <span key="ShutterSpeedIcon" draggable="true" onDragStart={this.drag} className="user-journey__icon" id="ShutterSpeedIcon"><ShutterSpeedIcon style={{ color: 'green', fontSize: 40 }} /></span>,
//                 <span key="QueuePlayNextIcon" draggable="true" onDragStart={this.drag} className="user-journey__icon" id="QueuePlayNextIcon"><QueuePlayNextIcon style={{ color: 'green', fontSize: 40 }} /></span>,
//                 <span key="WhatshotIcon" draggable="true" onDragStart={this.drag} className="user-journey__icon" id="WhatshotIcon"><WhatshotIcon style={{ color: 'green', fontSize: 40 }} /></span>,
//                 <span key="SportsEsportsIcon" draggable="true" onDragStart={this.drag} className="user-journey__icon" id="SportsEsportsIcon"><SportsEsportsIcon style={{ color: 'green', fontSize: 40 }} /></span>
//             ]
//         }
//     }

//     // const [tiles, setTiles] = useState([]);
//     // const [iconID, incrementId] = useState(0);
//     // const [tileID, incrementTileId] = useState(0);
//     drag = (ev) => {
//         ev.dataTransfer.setData("text", ev.target.id);
//     }

//     componentWillMount() {
//         const { tileID } = this.state;
//         this.setState(state => ({ tiles: [...state.tiles, this.createTiles(tileID)] }));
//     }

//     drop = (ev) => {
//         const { iconID, tileID } = this.state;
//         ev.preventDefault();
//         var data = ev.dataTransfer.getData("text");
//         let victimId = document.getElementById(data).id;
//         let clone = document.getElementById(data).cloneNode(true);
//         clone.id = `${victimId}${iconID}`;
//         ev.target.appendChild(clone);
//         const droppedItem = [...ev.target.children];

//         console.log('dropped', { data, victimId, clone, droppedItem });

//         droppedItem.forEach(obj => {
//             obj.setAttribute('draggable', 'false');
//         });
//         // incrementId(stateIconID => stateIconID + 1);
//         // incrementTileId(stateTileID => stateTileID + 1);
//         this.setState(state => ({ iconID: state.iconID + 1, tileID: state.tileID + 1 }), () => {
//             const { tileID } = this.state;
//             this.setState(state => ({ tiles: [...state.tiles, this.createTiles(tileID)] }));
//         });
//         // this.setState(state => ({  }));
//         // const { tileID } = this.state;
//         console.log('drop - setTiles', tileID);
//         // this.setState(tilesState => {
//         //     console.log('tilesState', tilesState);
//         //     return [...tilesState, this.createTiles(tileID)];
//         // });
//         // this.setState(state => ({  }));
//         console.log('Id\'s updated', this.state);
//     };
//     allowDrop = (ev) => {
//         // const { tileID } = this.state;
//         ev.preventDefault();
//         // this.setState(state => ({ tiles: [...state.tiles, this.createTiles(tileID)] }));
//     }
//     removeTile = (id) => {
//         const { tiles } = this.state;
//         console.log('removeTile', id);
//         console.log('removeTile - before tiles', tiles);
//         const newTileList = tiles.filter(obj => {
//             console.log('newTileList', { objKey: obj.key, id });
//             return obj.key !== id;
//         });
//         console.log('removeTile - after tiles', newTileList);
//         this.setState({ tiles: newTileList });
//     };
//     createTiles = (tileID) => {
//         // const { tiles } = this.state;

//         // console.log('createTiles fn', tiles);
//         return (
//             <div className="tile" key={`tile${tileID}`} id={`tile${tileID}`}>
//                 <span id={`tile__cancel${tileID}`} className="tile__cancel" onClick={() => this.removeTile(`tile${tileID}`)}>
//                     <HighlightOffIcon style={{ color: 'grey', fontSize: 30 }} />
//                 </span>
//                 <span id={`tile__forward${tileID}`} className="tile__forward">
//                     <ForwardIcon style={{ color: 'grey', fontSize: 50 }} />
//                 </span>
//                 <div id={`tile__box${tileID}`} className="tile__box" onDrop={this.drop} onDragOver={this.allowDrop}></div>
//             </div>
//         );
//     };

//     render() {
//         const { icons, tiles } = this.state;
//         console.log('render state', this.state);

//         return (
//             <React.Fragment>
//                 <div className="user-journey">
//                     <div className="user-journey__tray">
//                         <p>Tray</p>
//                         {icons}
//                     </div>
//                     <div className="user-journey__playground">
//                         <p>PlayGround</p>
//                         <div>
//                             {tiles}
//                         </div>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// export default UserJourney;
export default UserJourneyWithHooks;