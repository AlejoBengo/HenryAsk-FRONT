import React, { useState, useRef } from "react";
import { Box, TextField, Button, useTheme } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useAppDispatch } from "../../app/hooks";
import { Link, useNavigate } from "react-router-dom";
import { getSearchResults } from "../../app/Reducers/searchSlice";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSearch = () => {
    dispatch(getSearchResults(searchValue));
    navigate("/Search");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        variant="filled"
        label="Buscar por palabra"
        value={searchValue}
        autoComplete="new-password"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleSearch();
        }}
        sx={{
          width: "30vw",
          "& .MuiFilledInput-root:before ": {
            borderBottomColor: "primary.dark",
          },
          "& .MuiFilledInput-root:hover:not(.Mui-disabled):before ": {
            borderBottomColor: "primary.light",
          },
          "& .MuiInputFilled-root:after": {
            borderBottomColor: "primary.main",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
            },
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
        InputLabelProps={{
          sx: { color: "primary.light" },
        }}
        inputProps={{
          sx: { color: "primary.light" },
        }}
      />
      <Button
        startIcon={<SearchIcon />}
        variant="contained"
        onClick={() => handleSearch()}
        sx={{ ml: 1 }}
      >
        Buscar
      </Button>
    </Box>
  );
};
