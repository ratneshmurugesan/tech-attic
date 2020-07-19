import React from 'react'

import { connect } from 'react-redux'
import { addToList, RemoveFromList, searchTerm } from '../../actions/actions.js'

function DropDown(props) {
    return (
        <span>
            <select value={props.category} onChange={(event) => props.handleSelect(props.id, event)}>
                <option value="ADD">ADD</option>
                <option value="REMOVE">REMOVE</option>
            </select>
        </span>
    )
}

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSelect(id, event) {
        event.target.value === 'ADD' ? this.props.addToList(id) : this.props.RemoveFromList(id)
    }

    handleChange() {
        this.props.searchTerm(this.refs.search.value)
    }

    render() {
        let SearchedBooks = this.props.SearchedBooks
        let searchText = this.props.searchText

        if (searchText !== 'undefined' && searchText !== null && searchText !== '') {
            SearchedBooks = SearchedBooks.filter((book) => {
                return book.name.toLowerCase().match(searchText)
            })
        }

        return (<div>
            <input
                type="text"
                ref="search"
                value={this.props.searchText}
                onChange={this.handleChange}
                placeholder="search books...."
            />

            {
                SearchedBooks.length !== 0 ?
                    SearchedBooks.map((book, index) => {
                        return (
                            <div
                                key={index}>{book.name}
                                <DropDown
                                    category={(book.category === null || book.category === 'REMOVE') ? 'REMOVE' : book.category}
                                    id={book.id}
                                    handleSelect={this.handleSelect} />
                            </div>
                        )
                    }) : 'No books...'
            }
            <h4>PS: Newly added books can be used from "Want to Read" Section!</h4>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        SearchedBooks: state.books,
        searchText: state.searchText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToList: id => dispatch(addToList(id)),
        RemoveFromList: id => dispatch(RemoveFromList(id)),
        searchTerm: term => dispatch(searchTerm(term))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)