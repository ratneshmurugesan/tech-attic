import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import ViewAgendaOutlinedIcon from "@material-ui/icons/ViewAgendaOutlined";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";

import { sortSectionsAsc, sortSectionsDes } from "../../utils";

import CustomButton from "../atoms/button";

export default function MainButtonGroup({ storeState, dispatch }) {
  const handleSortClick = () => {
    dispatch({
      type: "changeSortOrder",
      sortAsc: !storeState.sortAsc,
      sortedData: storeState.sortAsc
        ? storeState.data.sort(sortSectionsAsc)
        : storeState.data.sort(sortSectionsDes),
    });
  };

  const handleViewChangeClick = () => {
    dispatch({
      type: "changeView",
      viewCard: !storeState.viewCard,
    });
  };

  const handleButtonClick = () => {
    dispatch({
      type: "toggleDrawer",
      isApplyNewVisible: !storeState.isApplyNewVisible,
    });
  };

  const { viewCard, sortAsc } = storeState;

  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      <CustomButton
        handleButtonClick={handleViewChangeClick}
        buttonText={"View"}
        buttonName={"viewCard"}
        startIcon={
          viewCard ? <ViewModuleOutlinedIcon /> : <ViewAgendaOutlinedIcon />
        }
      />
      <CustomButton
        handleButtonClick={handleSortClick}
        buttonText={"Sort"}
        buttonName={"sortAsc"}
        startIcon={
          sortAsc ? <ArrowDownwardRoundedIcon /> : <ArrowUpwardRoundedIcon />
        }
      />
      <CustomButton
        handleButtonClick={handleButtonClick}
        buttonText={"Apply New"}
        buttonName={"applyNew"}
        endIcon={<AddOutlinedIcon />}
        buttonStyles={{ backgroundColor: "#56C271" }}
      />
    </ButtonGroup>
  );
}
