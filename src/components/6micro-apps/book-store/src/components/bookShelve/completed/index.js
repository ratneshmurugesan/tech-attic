import React from 'react'

import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux';
import { addToCurrentlyReading, addToWishList } from '../../../actions/actions.js'

function DropDown(props) {
    return (
        <span>
            <select className="dropdown" value={props.category} onChange={(event)=>props.handleSelect(props.id, event)}>
                <option value="Current">Currently reading</option>
                <option value="Wishlist">Want to read</option>
                <option value="Completed">Done reading</option>
            </select>
        </span>
    )
}

class Completed extends React.Component {

    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(id, event) {
        //alert(id + event)
        event.target.value === 'Current' ? this.props.addToCurrentlyReading(id) : this.props.addToWishList(id)
    }

    render() {
        const { DoneReadingBooks } = this.props
        return (<div>
            
            {
                DoneReadingBooks.length !== 0 ? DoneReadingBooks.map((book, index) => {
                    return (
                        <div className="book-name"
                            key={index}>{book.name}
                            <DropDown
                                category='Completed'
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
        DoneReadingBooks: state.books.filter((book) => {
            return book.category === 'COMPLETED'
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCurrentlyReading: id => dispatch(addToCurrentlyReading(id)),
        addToWishList: id => dispatch(addToWishList(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed)