import React from 'react'
import type { TestViewAnswer } from '../../types'

interface QuestionProps {
    asnwers: TestViewAnswer[]
}

const Question = ({ asnwers }: QuestionProps) => {
  return (
    <div className='py-3'>
        {asnwers.map((answer) => (
            <div className='border-1 border-light-gray rounded-md py-4 px-3'>
                <div key={answer.questionId}>{answer.question}</div>
            </div>
        ))}
    </div>
  )
}

export default Question