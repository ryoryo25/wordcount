import { MODE_CHARACTERS, MODE_WORDS } from "@/lib/constants"
import TextBox from "./text-box"

type Props = {
  text: string
  mode: number
}

const Results = ({ text, mode }: Props) => {
  const removeNewlines = (text: string): string => {
    return text
      .replaceAll('\r\n', '')
      .replaceAll('\n', '')
  }

  const removeSpaces = (text: string): string => {
    return text.replaceAll(' ', '')
  }

  const countWords = (text: string): number => {
    return text
      .replace(/  +/g, ' ') // remove contiguous whitespaces
      .replace(/ +$/, '') // remove trailing whitespaces
      .split(' ').length
  }

  const resultsMode = (mode: number) => {
    if (mode === MODE_CHARACTERS) {
      return (
        <>
          <tr>
            <td align="right">文字数: </td>
            <td>
              <TextBox
                value={text.length}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td align="right">文字数 (改行なし): </td>
            <td>
              <TextBox
                value={removeNewlines(text).length}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td align="right">文字数 (改行/スペースなし): </td>
            <td>
              <TextBox
                  value={removeSpaces(removeNewlines(text)).length}
                  readOnly
                />
            </td>
          </tr>
        </>
      )
    } else if (mode === MODE_WORDS) {
      return (
        <>
          <tr>
            <td align="right">単語数:</td>
            <td>
              <TextBox
                size={10}
                value={countWords(text)}
                readOnly
              />
            </td>
          </tr>
        </>
      )
    } else {
      return (
        <tr><td>エラー</td></tr>
      )
    }
  }

  return (
    <table className="mx-auto mt-4">
      <tbody>
        {resultsMode(mode)}
      </tbody>
    </table>
  )
}

export default Results
