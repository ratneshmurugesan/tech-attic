import React from 'react'

import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux';
import { addToCompletion, addToWishList } from '../../../actions/actions.js'

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

class Current extends React.Component {

    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(id, event) {
        //alert(id + event)
        event.target.value === 'COMPLETED' ? this.props.addToCompletion(id) : this.props.addToWishList(id)
    }

    render() {
        const { CurrentlyReadingBooks } = this.props
        return (<div>
            
            {
                CurrentlyReadingBooks.length !== 0 ? CurrentlyReadingBooks.map((book, index) => {
                    return (
                        <div
                            key={index}>{book.name}
                            <DropDown
                                category={book.category}
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
        CurrentlyReadingBooks: state.books.filter((book) => {
            return book.category === 'CURRENT'
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCompletion: id => dispatch(addToCompletion(id)),
        addToWishList: id => dispatch(addToWishList(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Current)