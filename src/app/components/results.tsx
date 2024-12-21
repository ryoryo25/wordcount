type Props = {
  text: string
}

const Results = ({ text }: Props) => {
  const removeNewlines = (text: string): string => {
    return text.replaceAll('\r\n', '').replaceAll('\n', '')
  }

  const removeSpaces = (text: string): string => {
    return text.replaceAll(' ', '')
  }

  return (
    <table className="mx-auto mt-4">
      <tbody>
        <tr>
          <td align="right">文字数: </td>
          <td>
            <input
              id="count-num"
              name="count-num"
              type="text"
              value={text.length}
              readOnly
            />
          </td>
        </tr>
        <tr>
          <td align="right">文字数 (改行なし): </td>
          <td>
            <input
              id="count-num-no-nl"
              name="count-num-no-nl"
              type="text"
              value={removeNewlines(text).length}
              readOnly
            />
          </td>
        </tr>
        <tr>
          <td align="right">文字数 (改行/スペースなし): </td>
          <td>
            <input
                id="count-num-no-sp"
                name="count-num-no-sp"
                type="text"
                value={removeSpaces(removeNewlines(text)).length}
                readOnly
              />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Results
