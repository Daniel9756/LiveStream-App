import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    btn:{
        borderRadius: "8px",
        border: "none",
        font: "Black 20px/24px Roboto",
        letterSpacing: "0.12px",
        opacity: 1,
        textAlign: "center",
        padding: "10px",
    },
    
    primaryBtn: {
        backgroundColor: "#CA6144",
        color: "#FFFFFF",
    },
    
    secondaryBtn: {
        backgroundColor:  "#FFFFFF",
        color: "#CA6144",
    }

}));

function UIBottom(props) {
  const classes = useStyles();
  const { text, size, color, variant, onClick, icon,disabled,  ...other } = props;
  return (
    <MuiButton size={size || "large"} color={color} onClick={onClick} variant={variant || "contained"} {...other} className={classes.btn}
     backgroundColor={other.backgroundColor || "white"} disabled={disabled}>
{text} {icon}
    </MuiButton>
  );
}

export default UIBottom;
