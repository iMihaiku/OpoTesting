'use client'
import React from 'react'
import { List } from 'antd'
import style from './customComponents.module.css'

export default function ListQuestions({
  data,
  setAddQuestion,
  setQuestionActive
}) {
  const handleClick = (e, item) => {
    e.preventDefault()

    setQuestionActive(item)
    setAddQuestion(true)
  }
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item className={style.listaQuestions}>
          <List.Item.Meta
            title={
              <a
                href=""
                onClick={(e) => {
                  handleClick(e, item)
                }}
              >
                {item.title}
              </a>
            }
            description={item.subtitle}
          />
        </List.Item>
      )}
    />
  )
}
