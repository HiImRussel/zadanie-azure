/** React */
import React from "react";

/** Styles */
import styles from "./styles.module.scss";

type ButtonProps = {
    onClick: () => void;
    name: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
    const { onClick, name } = props;

    return (
        <button {...props} onClick={onClick} className={styles["btn"]}>
            {name}
        </button>
    );
};

export default Button;
