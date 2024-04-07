/** Styles */
import styles from "./styles.module.scss";

type InputProps = {
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
    const { type, placeholder, onChange } = props;

    return (
        <input
            {...props}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={styles["input"]}
        />
    );
};

export default Input;
