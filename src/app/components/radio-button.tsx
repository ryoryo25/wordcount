type Props = {
  name?: string
  value?: string | number
  checked?: boolean
  disabled?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}

const RadioButton = ({
  name,
  value,
  checked,
  disabled,
  onChange,
  className
}: Props) => {
  return (
    <input
      className={className}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

export default RadioButton
