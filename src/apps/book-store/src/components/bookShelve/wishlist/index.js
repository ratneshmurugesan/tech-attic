import React from 'react'

import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux';
import { addToCompletion, addToCurrentlyReading } from '../../../actions/actions.js'

function DropDown(props) {
    return (
        <span>
            <select value={props.category} onChange={(event)=>props.handleSelect(props.id, event)}>
                <option value="CURRENT">Currently reading</option>
                <option value="WISHLIST">Want to read</option>
                <option value="COMPLETED">Done reading</option>
            </select>
        </span>
    )
}

class Wishlist extends React.Component {

    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(id, event) {
        //alert(id + event)
        event.target.value === 'COMPLETED' ? this.props.addToCompletion(id) : this.props.addToCurrentlyReading(id)
    }

    render() {
        const { WantToReadBooks } = this.props
        return (<div>
           
            {
                WantToReadBooks.length !== 0 ? WantToReadBooks.map((book, index) => {
                    return (
                        <div
                            key={index}>{book.name}
                            <DropDown
                                category='WISHLIST'
                                id={book.id}
                                handleSelect={this.handleSelect} />
                        </div>
                    )
                }) : 'No books...'
            }

        </div>)
    }
}

function mapStateToProps(state) {
    return {
        WantToReadBooks: state.books.filter((book) => {
            return book.category === 'WISHLIST'
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCompletion: id => dispatch(addToCompletion(id)),
        addToCurrentlyReading: id => dispatch(addToCurrentlyReading(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)