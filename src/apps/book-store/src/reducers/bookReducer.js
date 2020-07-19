import bookData from '../utils/data.js'

const bookReducer = (state = bookData, action) => {
    switch (action.type) {
        case "CURRENT":
            return state.map((obj) => {
                return obj.id === action.id ? Object.assign({}, obj, { category: 'CURRENT' }) : obj
            })
        case "WISHLIST":
        case "ADD":
            return state.map((obj) => {
                return obj.id === action.id ? Object.assign({}, obj, { category: 'WISHLIST' }) : obj
            })
        case "COMPLETED":
            return state.map((obj) => {
                return obj.id === action.id ? Object.assign({}, obj, { category: 'COMPLETED' }) : obj
            })
        case "REMOVE":
            return state.map((obj) => {
                return obj.id === action.id ? Object.assign({}, obj, { category: null }) : obj
            })
        default:
            return state
    }
}

export default bookReducer
