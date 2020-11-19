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
        <span key="ChildFriendlyIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="ChildFriendlyIcon"><ChildFriendlyIcon style={{ color: 'rgb(255 235 59 / 75%)', fontSize: 40 }} /></span>,
        <span key="AcUnitIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="AcUnitIcon"><AcUnitIcon style={{ color: 'rgb(255 235 59 / 75%)', fontSize: 40 }} /></span>,
        <span key="HomeWorkIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="HomeWorkIcon"><HomeWorkIcon style={{ color: 'rgb(255 235 59 / 75%)', fontSize: 40 }} /></span>,
        <span key="MotorcycleIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="MotorcycleIcon"><MotorcycleIcon style={{ color: 'rgb(255 235 59 / 75%)', fontSize: 40 }} /></span>,
        <span key="OfflineBoltIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="OfflineBoltIcon"><OfflineBoltIcon style={{ color: 'rgb(255 235 59 / 75%)', fontSize: 40 }} /></span>,
        <span key="ShutterSpeedIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="ShutterSpeedIcon"><ShutterSpeedIcon style={{ color: 'rgb(255 235 59 / 75%)', fontSize: 40 }} /></span>,
        <span key="QueuePlayNextIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="QueuePlayNextIcon"><QueuePlayNextIcon style={{ color: 'rgb(255 235 59 / 75%)', fontSize: 40 }} /></span>,
        <span key="WhatshotIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="WhatshotIcon"><WhatshotIcon style={{ color: 'rgb(255 235 59 / 75%)', fontSize: 40 }} /></span>,
        <span key="SportsEsportsIcon" draggable="true" onDragStart={drag} className="user-journey__icon" id="SportsEsportsIcon"><SportsEsportsIcon style={{ color: 'rgb(255 235 59 / 75%)', fontSize: 40 }} /></span>
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
                                children: <div className="arrow-group">
                                    <ForwardIcon style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 30, transform: 'rotate(180deg)' }} />
                                    <ForwardIcon style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 30 }} />
                                </div>
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

    // console.log('#state', superState);

    const transitions = useTransition(tiles, item => item.ele.key, {
        from: { display: 'inline-flex', maxWidth: '120px', opacity: 0 },
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
                            transitions.map(({ item, key, props }) =>
                                <animated.div key={key} style={props}>
                                    {item.ele}
                                </animated.div>)
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