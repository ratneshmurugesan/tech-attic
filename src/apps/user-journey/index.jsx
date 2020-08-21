import React, {
    useState,
    useEffect,
    useCallback,
    // useRef,
    // useComponentDidMount,
    // useComponentWillMount
} from 'react';
import {
    // useSpring, 
    animated,
    useTransition
} from 'react-spring';

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

// import ConnectElements from 'react-connect-elements';


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

    const initialTileProps = {
        tileID: 0,
    };
    const [superState, setSuperState] = useState({
        tiles: [],
        currentTileProps: initialTileProps,
        addedIcon: null,
    });
    const {
        tiles,
        currentTileProps,
        addedIcon
    } = superState;

    const drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
        const ghostImage = ev.target.cloneNode(true);
        ghostImage.style.zIndex = -1;
        ghostImage.style.position = "absolute";
        ghostImage.style.top = "0px";
        ghostImage.id = 'ghost';
        document.body.appendChild(ghostImage);
        ev.dataTransfer.setDragImage(ghostImage, 0, 0);
    };

    const icons = [
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
    /* 
        drop variable will have always the same function object of the useCallback function 
        between renderings of this UserJourney component.
    */
    const drop = useCallback((ev) => {
        ev.preventDefault();
        document.getElementById('ghost').remove();
        const data = ev.dataTransfer.getData("text");
        const droppedIconClone = document.getElementById(data).cloneNode(true);
        ev.target.appendChild(droppedIconClone);
        const addedIcon = [...ev.target.children];
        addedIcon.forEach(obj => {
            obj.setAttribute('draggable', 'false');
        });
        setSuperState(pState => {
            const tileProp = {
                tileID: pState.currentTileProps.tileID + 1,
            }
            return {
                ...pState,
                tiles: [
                    ...pState.tiles,
                ],
                currentTileProps: {
                    ...pState.currentTileProps,
                    ...tileProp,
                },
                addedIcon,
            };
        });
    }, []);

    const allowDrop = (ev) => {
        ev.preventDefault();
        return null;
    }

    useEffect(() => {
        const removeTile = (id) => {
            setSuperState(pState => {
                const newTileList = pState.tiles.filter(obj => obj.tileID !== id);
                return ({ ...pState, tiles: newTileList })
            });
        };

        const createTiles = ({
            tileID,
            addedIcon,
        }) => {
            return {
                tileID,
                addedIcon,
                ele: React.createElement(
                    'div',
                    {
                        className: "tile",
                        key: `tile${tileID}`,
                        id: tileID,
                        children: [
                            React.createElement('span', {
                                key: `tile__cancel${tileID}`,
                                id: `tile__cancel${tileID}`,
                                className: "tile__cancel--hidden",
                                onClick: () => removeTile(tileID),
                                children: <HighlightOffIcon style={{ color: 'grey', fontSize: 30 }} />
                            }),
                            React.createElement('span', {
                                key: `tile__forward${tileID}`,
                                id: `tile__forward${tileID}`,
                                className: "tile__forward--hidden",
                                children: <ForwardIcon style={{ color: 'grey', fontSize: 50 }} />
                            }),
                            React.createElement('div', {
                                key: `tile__box${tileID}`,
                                id: `tile__box${tileID}`,
                                className: "tile__box",
                                onDrop: drop,
                                onDragOver: allowDrop,
                                children: addedIcon
                            })
                        ]
                    })
            }
        };

        const createTilesWithClose = ({
            tileID,
            addedIcon,
        }) => {
            return {
                tileID,
                addedIcon,
                ele: React.createElement(
                    'div',
                    {
                        className: "tile",
                        key: `tile${tileID}`,
                        id: tileID,
                        children: [
                            React.createElement('span', {
                                key: `tile__cancel${tileID}`,
                                id: `tile__cancel${tileID}`,
                                className: "tile__cancel",
                                onClick: () => removeTile(tileID),
                                children: <HighlightOffIcon style={{ color: 'grey', fontSize: 30 }} />
                            }),
                            React.createElement('span', {
                                key: `tile__forward${tileID}`,
                                id: `tile__forward${tileID}`,
                                className: "tile__forward",
                                children: <ForwardIcon style={{ color: 'grey', fontSize: 50 }} />
                            }),
                            React.createElement('div', {
                                key: `tile__box${tileID}`,
                                id: `tile__box${tileID}`,
                                className: "tile__box",
                                onDrop: drop,
                                onDragOver: allowDrop,
                                children: addedIcon
                            })
                        ]
                    })
            }
        };

        setSuperState(pState => {
            const currentTilePropWithIcon = { ...currentTileProps, ...addedIcon };
            if (!currentTileProps.tileID) {
                const finalItems = [...pState.tiles, createTiles(currentTilePropWithIcon)];
                // console.log('finalItems - if', finalItems);
                return ({ ...pState, tiles: finalItems });
            } else {
                // console.log('pState.tiles', pState.tiles);
                const modifiedTilesWithClose = pState.tiles.map(tile => {
                    const toBeModifiedTileProp = { ...tile };
                    // toBeModifiedTileProp.isCloseAvailable = true;
                    delete toBeModifiedTileProp.ele;
                    const tileWithClose = createTilesWithClose(toBeModifiedTileProp);
                    return { ...tileWithClose };
                });
                // console.log('modifiedTilesWithClose', modifiedTilesWithClose);
                return ({ ...pState, tiles: [...modifiedTilesWithClose, createTiles(currentTilePropWithIcon)] });
            }
        });
    }, [currentTileProps, addedIcon, drop]);

    console.log('#state', superState);

    const transitions = useTransition(tiles, item => item.ele.key, {
        from: { display: 'inline-flex', width: 120, opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <>
            <div className="user-journey">
                <div className="user-journey__tray">
                    <p>Tray</p>
                    {icons}
                </div>
                <div className="user-journey__playground">
                    <p>PlayGround</p>
                    <div>
                        {/* {tiles} */}
                        {
                            transitions.map(({ item, key, props }) => <animated.div key={key} style={props}>{item.ele}</animated.div>)
                        }
                        {/* <div>
                            <div className="elements">
                                <div className="element element1">e1</div>
                                <div className="element element2">e2</div>
                            </div>
                            <ConnectElements
                                selector=".elements"
                                overlay={2}
                                elements={[{ from: '.element1', to: '.element2' }]}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
};

export default UserJourneyWithHooks;