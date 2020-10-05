import React, { useState } from 'react';

import { Button } from '@material-ui/core';
// import { CSSTransition } from 'react-transition-group';
// import clsx from 'clsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import Node from './Node';


class _Node {
    constructor(value) {
        // this.id =
        this.value = value;
        this.next = null;
    }
}

class _SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addAtTail(value) {
        const newNode = new _Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const ReverseSLL = () => {
    const [isReverseEnabled, toggleReverse] = useState(false);

    let SLL = new _SLL();

    SLL.addAtTail('Alpha');
    SLL.addAtTail(4);
    SLL.addAtTail('Charlie');
    SLL.addAtTail(2);
    SLL.addAtTail('Bravo');
    SLL.addAtTail('Delta');

    // console.log('addAtTail', SLL.addAtTail(1));
    // console.log('len', SLL.length);

    let singly = SLL;
    let current = singly.head;
    const finalList = [];

    if (isReverseEnabled) {
        let temp = singly.tail;
        singly.tail = singly.head;
        singly.head = temp;
        let prev = null;
        let following = null;

        while (current !== null) {
            following = current.next;
            current.next = prev; // reversing happens here!
            prev = current;
            current = following;
        }
    }

    let curr = singly.head;
    for (let count = 0; count < singly.length; count++) {
        if (curr) {
            finalList.push({ value: curr.value, next: curr.next })
            if (curr.next) curr = curr.next;
        }
    }

    return (
        <React.Fragment>
            <TransitionGroup>
            <div className="sll">
                {
                    finalList.map((obj) => {
                        // console.log('obj', obj);
                        return (
                            <CSSTransition
                                // in={isReverseEnabled}
                                key={`${obj.value}`} 
                                timeout={750}
                                classNames='fade'
                                // unmountOnExit
                            >
                                <Node key={`${obj.value}`} value={obj.value} prev={null} next={obj.next ? '@' : null} />

                            </CSSTransition>
                        )
                    })
                }
            </div>
            </TransitionGroup>
            {/* <input type="button" value="REVERSE" onClick={() => toggleReverse((prev) => !prev)} /> */}

            <div className="button">
                <Button onClick={() => toggleReverse((prev) => !prev)}>Reverse</Button>
            </div>
        </React.Fragment>
    );
}

export default (ReverseSLL);