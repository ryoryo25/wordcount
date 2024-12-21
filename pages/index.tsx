import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { KEY_SAVE_TEXT_INPUT, PAGE_NAME, SITE_NAME } from '../lib/constants'
import TextArea from '../components/text-area'

export default function Index() {
  const [ text, setText ] = useState<string>('')

  // useEffect(() => {
  //   if (typeof window === undefined) {
  //     return
  //   }

  //   const storedInput = localStorage.getItem(KEY_SAVE_TEXT_INPUT)
  //   if (storedInput) {
  //     setCurrentInput(storedInput)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(KEY_SAVE_TEXT_INPUT, currentInput)
  //   console.log(currentInput)
  // }, [currentInput])

  return (
    <Layout>
      <Head>
        {/* inject to head */}
        <title>{`${PAGE_NAME} | ${SITE_NAME}`}</title>
      </Head>
      <Container>
          <TextArea
            className="block mx-auto"
            name="main-input"
            placeholder="カウントするテキストを入力"
            value={text}
            cols={60}
            rows={10}
            onBlur={saveTextInput}
            onChange={(e) => setText(e.target.value)}
          />
          <table className="mx-auto mt-4">
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
          </table>
      </Container>
    </Layout>
  )
}

function saveTextInput(e: React.FocusEvent<HTMLTextAreaElement>) {
  const current = e.target.value
  localStorage.setItem(KEY_SAVE_TEXT_INPUT, current)
}

function removeNewlines(text: string): string {
  return text.replaceAll('\r\n', '').replaceAll('\n', '')
}

function removeSpaces(text: string): string {
  return text.replaceAll(' ', '')
}
