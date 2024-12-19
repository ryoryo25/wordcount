import React from "react"

type Props = {
  name: string
  placeholder?: string
  disabled?: boolean
  min?: number
  max?: number
  rows?: number
  cols?: number
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onLoad?: React.ReactEventHandler
  className?: string
}

export default function Button({ name, placeholder, disabled, min, max, rows = 5, cols = 30, onChange, onBlur, onLoad, className }: Props) {
  return (
    <textarea
      className={`border border-neutral-400 rounded p-2 resize ${className}`}
      id={name}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      minLength={min}
      maxLength={max}
      rows={rows}
      cols={cols}
      onChange={onChange}
      onBlur={onBlur}
      onLoad={onLoad}
    />
  )
}