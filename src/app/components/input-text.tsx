import { KEY_SAVE_TEXT_INPUT } from '@/lib/constants'
import TextArea from './text-area'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type Props = {
  text: string,
  setText: Dispatch<SetStateAction<string>>
}

const InputText = ({ text, setText }: Props) => {

  const saveText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    localStorage.setItem(KEY_SAVE_TEXT_INPUT, e.target.value)
  }

  return (
    <TextArea
      className="block mx-auto"
      name="main-input"
      placeholder="カウントするテキストを入力"
      value={text}
      cols={60}
      rows={10}
      onChange={saveText}
    />
  )
}

export default InputText
