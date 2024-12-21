type Props = {
  value?: string | number
  defaultValue?: string | number
  disabled?: boolean
  readOnly?: boolean
  size?: number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}

const TextBox = ({
  value,
  defaultValue,
  disabled,
  readOnly,
  size,
  onChange,
  className
}: Props) => {
  return (
    <input
      type="text"
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      readOnly={readOnly}
      size={size}
      onChange={onChange}
      className={className}
    />
  )
}

export default TextBox
