import styles from "./TextInput.module.css"
import { useId } from "react"

export default function TextInput({
  label,
  placeholder,
  hint,
  error,
  leadingIcon,
  trailingIcon,
  disabled = false,
  ...props
}) {
    const inputId = useId()
    const hintId = `${inputId}-hint`
    const errorId = `${inputId}-error`

    return (
        <div className={styles.field}>
            <label
            htmlFor={inputId}
            className={styles.label}>{label}</label>
            <div className={`${styles.inputWrapper}`}>
                {
                leadingIcon && 
                <div className={`
                ${styles.leadingIcon} 
                ${styles.icon} 
                ${error ? styles.errorIcon : ""}
                `}>
                    {leadingIcon}
                </div>
                }
                    <input
                    disabled={disabled}
                    id={inputId}
                    placeholder={placeholder}
                    className={`
                    ${styles.input} 
                    ${leadingIcon ? styles.leftPadding : ""}
                    ${trailingIcon ? styles.rightPadding : ""}
                    ${error && styles.error}
                    ${error ? styles.inputError : ""}
                    `}
                    aria-describedby={
                        error ? errorId
                        : hintId ? hintId
                        : undefined
                    }
                    {...props}
                    />
                {
                trailingIcon &&
                <div className={`
                ${styles.trailingIcon} 
                ${styles.icon} 
                ${error ? styles.errorIcon : ""}`}
                >
                    {trailingIcon}
                </div>
                }
            </div>
            {hint && (
                <div id={hintId} className={styles.hint}>{hint}</div>
            )}
            {error && (
                <div id={errorId} className={styles.errorMessage}>{error}</div>
            )}
        </div>
    )
}