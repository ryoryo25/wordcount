import { KEY_SAVE_MODE, KEY_SAVE_TEXT_INPUT } from "@/lib/constants"
import { useEffect, useState } from "react"
import Results from "./results"
import InputText from "./input-text"
import SelectMode from "./select-mode"

const Contents = () => {
  const [ text, setText ] = useState<string>('')
  const [ mode, setMode ] = useState<number>(0)

  useEffect(() => {
    const storedText = localStorage.getItem(KEY_SAVE_TEXT_INPUT)
    const storedMode = localStorage.getItem(KEY_SAVE_MODE)
    if (storedText) {
      setText(storedText)
    }
    if (storedMode) {
      setMode(Number(storedMode))
    }
  }, [])

  return (
    <main className="pb-10">
      <div className="mx-auto w-max">
        <SelectMode mode={mode} setMode={setMode} />
        <InputText text={text} setText={setText} />
      </div>
      <Results text={text} mode={mode} />
    </main>
  )
}

export default Contents
