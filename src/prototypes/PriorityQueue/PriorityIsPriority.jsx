import React, { useState } from 'react';

import { Button } from '@material-ui/core';
import PQNode from './PQNode';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import './index.scss';

class _Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        // console.log('exist', this.values.filter((obj) => obj.val === val || obj.priority === priority).length);
        if (this.values.filter((obj) => obj.val === val || obj.priority === priority).length === 0) {
            let newNode = new _Node(val, priority);
            this.values.push(newNode);
            this.bubbleUp();
            // this.bubbleUp_min();
        }
    }

    bubbleUp() {
        let lastIndex = this.values.length - 1;
        let ele = this.values[lastIndex];
        while (lastIndex > 0) {
            let parentIndex = Math.floor((lastIndex - 1) / 2);
            let parentEle = this.values[parentIndex];
            if (ele.priority <= parentEle.priority) break;
            this.values[parentIndex] = ele;
            this.values[lastIndex] = parentEle;
            lastIndex = parentIndex;
        }
    }

    bubbleUp_min() {
        let lastIndex = this.values.length - 1;
        let ele = this.values[lastIndex];
        while (lastIndex > 0) {
            let parentIndex = Math.floor((lastIndex - 1) / 2);
            let parentEle = this.values[parentIndex];
            if (ele.priority >= parentEle.priority) break;
            this.values[parentIndex] = ele;
            this.values[lastIndex] = parentEle;
            lastIndex = parentIndex;
        }
    }

    sinkDown() {
        let targetIdx = 0;
        let firstEle = this.values[targetIdx];
        let array = this.values;
        let length = this.values.length;
        while (true) {
            let leftChildIdx = (2 * targetIdx) + 1;
            let rightChildIdx = (2 * targetIdx) + 2;
            let lc, rc;
            let swap = null;
            if (leftChildIdx < length) {
                lc = array[leftChildIdx];
                if (lc.priority > firstEle.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rc = array[rightChildIdx];
                if (
                    (swap === null && rc.priority > firstEle.priority)
                    ||
                    (swap !== null && rc.priority > lc.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            let temp = array[targetIdx];
            array[targetIdx] = array[swap];
            array[swap] = temp;
            targetIdx = swap;
        }
    }


    sinkDown_min() {
        let targetIdx = 0;
        let firstEle = this.values[targetIdx];
        let array = this.values;
        let length = this.values.length;
        while (true) {
            let leftChildIdx = (2 * targetIdx) + 1;
            let rightChildIdx = (2 * targetIdx) + 2;
            let lc, rc;
            let swap = null;
            if (leftChildIdx < length) {
                lc = array[leftChildIdx];
                if (lc.priority < firstEle.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rc = array[rightChildIdx];
                if (
                    (swap === null && rc.priority < firstEle.priority)
                    ||
                    (swap !== null && rc.priority < lc.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            let temp = array[targetIdx];
            array[targetIdx] = array[swap];
            array[swap] = temp;
            targetIdx = swap;
        }
    }

    dequeue() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    dequeue_min() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown_min();
        }
        return min;
    }
}

let RatneshPQ = new PriorityQueue();

const PriorityIsPriority = () => {

    const [priorityQueue, setPriorityQueue] = useState(RatneshPQ.values);
    const [high, setHigh] = useState({});
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("");

    // let task = null, priority = null;
    const chooseTask = (selectedTask) => {
        setTask(selectedTask);
    }

    const choosePriority = (selectedPriority) => {
        setPriority(Number(selectedPriority));
    }

    const setTaskAndPriority = () => {
        if (task && priority) {
            RatneshPQ.enqueue(task, priority);
            setPriorityQueue([...RatneshPQ.values]);
        }
        setHigh({});
    }

    const getPriorityItem = () => {
        if (RatneshPQ.values.length) {
            setHigh(RatneshPQ.dequeue());
            setPriorityQueue([...RatneshPQ.values]);
        }
    }

    return (

        <React.Fragment>
            <div className="pq">
                <TransitionGroup>
                    {
                        priorityQueue.length && priorityQueue.map((obj) => {
                            // console.log('obj', obj);
                            return (
                                <CSSTransition
                                    key={obj.priority}
                                    timeout={500}
                                    classNames='fade'
                                    unmountOnExit
                                >
                                    <PQNode
                                        key={obj.priority}
                                        priority={obj.priority}
                                        val={obj.val}
                                        left={null}
                                        right={null}
                                        className="priority-node"
                                    />
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                {(high.val) ? <div className="final-msg">{high.val} with priority {high.priority} completed and removed</div> : null}
                {!priorityQueue.length && <div className="empty-info">List is empty, please add some!</div>}
            </div>
            {/* <div className="pq--result">
                <PQNode
                    // key={high.priority}
                    priority={high.priority}
                    val={high.val}
                    left={null}
                    right={null}
                    // className="priority-node"
                />
                </div> */}
            <div>
                <select className="task-dropdown" onChange={(e) => chooseTask(e.target.value)}>
                    <option valuee="">Select a task</option>
                    <option className="" value={'Todo A'} >Todo A</option>
                    <option className="" value={'Todo B'} >Todo B</option>
                    <option className="" value={'Todo C'} >Todo C</option>
                    <option className="" value={'Todo D'} >Todo D</option>
                    <option className="" value={'Todo E'} >Todo E</option>
                    <option className="" value={'Todo F'} >Todo F</option>
                    <option className="" value={'Todo G'} >Todo G</option>
                </select>
                <select className="priority-dropdown" onChange={(e) => choosePriority(e.target.value)}>
                    <option>Assign a priority</option>
                    <option className="" value={8} >8</option>
                    <option className="" value={7} >7</option>
                    <option className="" value={6} >6</option>
                    <option className="" value={5} >5</option>
                    <option className="" value={4} >4</option>
                    <option className="" value={3} >3</option>
                    <option className="" value={2} >2</option>
                    <option className="" value={1} >1</option>
                </select>
            </div>
            <div className="button">
                <Button onClick={setTaskAndPriority}>Add item with priority</Button>
            </div>
            <div className="button">
                <Button onClick={getPriorityItem}>Show item with highest priority</Button>
            </div>
        </React.Fragment>

    );
}

export default (PriorityIsPriority);