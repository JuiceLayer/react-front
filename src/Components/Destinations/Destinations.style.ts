import { styled } from "@mui/material/styles";

export const Container = styled("div")({ 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export const Grid = styled("div")({ //TODO make reactive
    display: "grid",
    gridTemplateColumns: "auto auto",
    rowGap: "10rem",
    columnGap: "30rem",
    paddingTop: "4rem"
});