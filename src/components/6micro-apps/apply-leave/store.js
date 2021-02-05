import mockData from "./mockData";
import { sortSectionsDes } from "./utils";

export const initialState = {
  viewCard: true,
  sortAsc: true,
  isApplyNewVisible: false,
  data: mockData.sort(sortSectionsDes),
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case "addNew":
      return {
        ...state,
        data: [...action.updatedData],
      };
    case "changeSortOrder":
      return {
        ...state,
        sortAsc: action.sortAsc,
        data: [...action.sortedData],
      };
    case "changeView":
      return {
        ...state,
        viewCard: action.viewCard,
      };
      case "toggleDrawer":
        return {
          ...state,
          isApplyNewVisible: action.isApplyNewVisible,
        };
    default:
      return state;
  }
};
