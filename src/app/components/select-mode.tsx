import { KEY_SAVE_MODE, MODE_CHARACTERS, MODE_WORDS } from "@/lib/constants"
import { ChangeEvent, Dispatch, SetStateAction } from "react"
import RadioButton from "./radio-button"

type Props = {
  mode: number
  setMode: Dispatch<SetStateAction<number>>
}

const SelectMode = ({ mode, setMode }: Props) => {

  const changeMode = (e: ChangeEvent<HTMLInputElement>) => {
    setMode(Number(e.target.value))
    localStorage.setItem(KEY_SAVE_MODE, e.target.value)
  }

  return (
    <div className="mb-2">
      <label className="mr-3">
        <RadioButton
          className="mr-1"
          name="mode"
          value={MODE_CHARACTERS}
          checked={mode === MODE_CHARACTERS}
          onChange={changeMode}
        />
        文字数
      </label>
      <label>
        <RadioButton
          className="mr-1"
          name="mode"
          value={MODE_WORDS}
          checked={mode === MODE_WORDS}
          onChange={changeMode}
        />
        単語数 (英文など)
      </label>
    </div>
  )
}

export default SelectMode