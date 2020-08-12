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
// import logo from './logo192.png';


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


const UserJourney = () => {

    const [iconID, incrementId] = useState(0);
    const [tileID, incrementTileId] = useState(0);
    // const [tracker, updateTracker] = useState({});
    const [journeyItems, setJourneyItems] = useState([]);

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const updateItems = useCallback((journeyItems, parentElement) => {
        console.log('updateItems - journeyItems', journeyItems);
        journeyItems.forEach(obj => {
            obj.setAttribute('draggable', 'false');
        });
        // tracker[parentElement.id] = {item: journeyItems[0], id: journeyItems[0].id};
        incrementId(stateIconID => stateIconID + 1);
        incrementTileId(stateTileID => stateTileID + 1);
        setJourneyItems(journeyItems);
    }, []);

    const drop = useCallback((ev) => {
        // console.log('ev-tile', ev.target);
        const parentElement = ev.target.parentElement;
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log('dropped');
        let victimId = document.getElementById(data).id;
        let clone = document.getElementById(data).cloneNode(true);
        clone.id = `${victimId}${iconID}`;
        ev.target.appendChild(clone);
        updateItems([...ev.target.children], parentElement);
    }, [iconID, updateItems]);

    const iconInitialState = [
        <span key="ChildFriendlyIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="ChildFriendlyIcon"><ChildFriendlyIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="AcUnitIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="AcUnitIcon"><AcUnitIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="HomeWorkIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="HomeWorkIcon"><HomeWorkIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="MotorcycleIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="MotorcycleIcon"><MotorcycleIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="OfflineBoltIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="OfflineBoltIcon"><OfflineBoltIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="ShutterSpeedIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="ShutterSpeedIcon"><ShutterSpeedIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="QueuePlayNextIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="QueuePlayNextIcon"><QueuePlayNextIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="WhatshotIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="WhatshotIcon"><WhatshotIcon style={{ color: 'green', fontSize: 40 }} /></span>,
        <span key="SportsEsportsIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="SportsEsportsIcon"><SportsEsportsIcon style={{ color: 'green', fontSize: 40 }} /></span>
    ];

    const [icons] = useState(iconInitialState);
    const [tiles, setTiles] = useState([]);

    const removeTile = useCallback((tileID) => {
        // delete tracker[tileID];
        console.log('removeTile', tileID);
        // console.log('removeTile - tiles', tiles);
        // delete tracker[tileID];
        // console.log('removeTile - tracker', tracker);
        // setTiles(tilesState => [...tilesState, tiles.filter(obj => obj.)]);
        // updateTracker(state => ({...state, tracker}));
    }, []);
    
    useEffect(() => {
        const createTiles = (tileID) => {
            return (<div className="tile" key={`tile${tileID}`} id={`tile${tileID}`}>
                <span className="tile__cancel" onClick={() => removeTile(`tile${tileID}`)}><HighlightOffIcon style={{ color: 'grey', fontSize: 30 }} /></span>
                <span className="tile__forward"><ForwardIcon style={{ color: 'grey', fontSize: 50 }} /></span>
                <div id={'tile-box'} className="tile__box" onDrop={drop} onDragOver={allowDrop}></div>
            </div>)
        };
        setTiles(tilesState => [...tilesState, createTiles(tileID)]);
        // console.log('useEffect');
    }, [drop, tileID, removeTile]);

    // useEffect(() => {
    //     console.log('useEffect - tracker', tracker);
    // }, [tracker])

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

export default UserJourney;