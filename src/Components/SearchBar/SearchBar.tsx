import React, { useState, useRef } from "react";
import { Box, TextField, Button, useTheme } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useAppDispatch } from "../../app/hooks";
import { Link, useNavigate } from "react-router-dom";
import { getSearchResults } from "../../app/Reducers/searchSlice";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const linkRef = useRef<typeof Link>(null);
  const navigate = useNavigate();
  const handleSearch = () => {
    dispatch(getSearchResults(searchValue));
    navigate("/Search");
  };
  const theme = useTheme();

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
          sx: { color: "primary.main" },
        }}
        inputProps={{
          sx: { color: "primary.main" },
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
