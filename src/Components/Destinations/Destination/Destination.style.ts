import { styled } from "@mui/material/styles";
import reportWebVitals from "../../../reportWebVitals";

export const Container = styled("div")({
    backgroundColor: "rgb(255,255,255)",
    width: '22rem',
    height: '16rem',
    borderRadius: "3px",
    boxShadow: "0px 2px 10px 0px #888888",
});


export const Header = styled("div")({
    display: "flex",
    justifyContent: "space-between",
});

export const City = styled("h1")({
    marginBlock: "0.7rem",
    paddingInlineStart: "1.2rem"
});

//TODO image


export const WeatherDescription = styled("p")({
    marginTop: "0",
    paddingInlineStart: "1.7rem",
    color: "grey"
});


export const Data = styled("div")({
    marginTop: "2.5rem",
    display: "flex",
    justifyContent: "space-around"
});

export const DataBlock = styled("div")({
});

export const DataCategory = styled("p")({
    textAlign: "center",
    margin: "0rem 0rem 0.7rem 0rem",
});

export const DataValue = styled("h3")({
    textAlign: "center",
    fontSize: "1.6rem",
    marginBlock: "0",
    direction: "ltr",
});