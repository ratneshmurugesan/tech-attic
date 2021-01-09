import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const CricketTeamIndia = () => {
  const [player, setPlayer] = useState("");
  const [category, setCategory] = useState("");
  const [checked, setChecked] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const [id, setId] = useState(0);

  let areInputsValid = false;
  if (player !== "" && category !== "") {
    areInputsValid = true;
  }

  const handleTextChange = (event) => {
    setPlayer(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddButtonClick = (_) => {
    let list = [];
    list = [
      ...playerList,
      {
        id,
        player,
        category,
        isCaptain: checked,
        removeButton: (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const _id = id;
              handleRemoveButtonClick(_id);
            }}
          >
            REMOVE
          </Button>
        ),
      },
    ];
    setPlayerList(list);
    setId((id) => id + 1);
    setPlayer("");
    setCategory("");
    setChecked(false);
  };

  const handleRemoveButtonClick = (id) => {
    const removedPlayerList = playerList.filter(
      (playerObj) => playerObj.id !== id
    );
    setPlayerList(removedPlayerList);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={player}
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={handleCategoryChange}
          >
            <MenuItem value={"Batsman"}>Batsman</MenuItem>
            <MenuItem value={"Bowler"}>Bowler</MenuItem>
            <MenuItem value={"Wicket-keeper"}>Wicket-keeper</MenuItem>
            <MenuItem value={"All-rounder"}>All rounder</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Checkbox checked={checked} onChange={handleCheckboxChange} />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddButtonClick}
            disabled={!areInputsValid}
          >
            ADD
          </Button>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <h3>
            <strong>BATSMEN</strong>
          </h3>
          <div>
            {playerList
              .filter((playerObj) => playerObj.category === "Batsman")
              .map((playerObj) => (
                <p key={playerObj.id}>
                  {playerObj.player}
                  {playerObj.removeButton}
                </p>
              ))}
          </div>
        </Grid>
        <Grid item xs={3}>
          <h3>
            <strong>BOWLER</strong>
          </h3>
          <div>
            {playerList
              .filter((playerObj) => playerObj.category === "Bowler")
              .map((playerObj) => (
                <p key={playerObj.id}>
                  {playerObj.player}
                  {playerObj.removeButton}
                </p>
              ))}
          </div>
        </Grid>
        <Grid item xs={3}>
          <h3>
            <strong>WICKET-KEEPER</strong>
          </h3>
          <div>
            {playerList
              .filter((playerObj) => playerObj.category === "Wicket-keeper")
              .map((playerObj) => (
                <p key={playerObj.id}>
                  {playerObj.player}
                  {playerObj.removeButton}
                </p>
              ))}
          </div>
        </Grid>
        <Grid item xs={3}>
          <h3>
            <strong>ALL-ROUNDER</strong>
          </h3>
          <div>
            {playerList
              .filter((playerObj) => playerObj.category === "All-rounder")
              .map((playerObj) => (
                <p key={playerObj.id}>
                  {playerObj.player}
                  {playerObj.removeButton}
                </p>
              ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CricketTeamIndia;
