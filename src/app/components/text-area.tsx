import React from "react"

type Props = {
  name: string
  defaultValue?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  min?: number
  max?: number
  rows?: number
  cols?: number
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>
  className?: string
}

const TextArea = ({
  name,
  defaultValue,
  value,
  placeholder,
  disabled,
  min,
  max,
  rows = 5,
  cols = 30,
  onChange,
  onBlur,
  className
}: Props) => {
  return (
    <textarea
      className={`border border-neutral-400 rounded p-2 resize ${className}`}
      id={name}
      name={name}
      defaultValue={defaultValue}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      minLength={min}
      maxLength={max}
      rows={rows}
      cols={cols}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export default TextArea
