export const addToCompletion = id => ({
    type: "COMPLETED",
    id
  });
  export const addToWishList = id => ({
    type: "WISHLIST",
    id
  });
  export const addToCurrentlyReading = id => ({
    type: "CURRENT",
    id
  });
  export const addToList = id => ({
    type: "ADD",
    id
  });
  export const RemoveFromList = id => ({
    type: "REMOVE",
    id
  });
  export const searchTerm = term => ({
    type: "SEARCH",
    term
  });
