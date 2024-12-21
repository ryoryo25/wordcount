import { KEY_SAVE_TEXT_INPUT } from "@/lib/constants"
import { useEffect, useState } from "react"
import Results from "./results"
import InputText from "./input-text"

const Contents = () => {
  const [ text, setText ] = useState<string>('')

  useEffect(() => {
    const storedText = localStorage.getItem(KEY_SAVE_TEXT_INPUT)
    if (storedText) {
      setText(storedText)
    }
  }, [text])

  return (
    <main className="pb-10">
      <InputText text={text} setText={setText} />
      <Results text={text} />
    </main>
  )
}

export default Contents
