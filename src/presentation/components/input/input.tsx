import React from 'react'
import Styles from './input-styles.scss'

type Props = {
  type: string
  placeholder?: string
  name: string
}

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span className={Styles.status}>🔴</span>
    </div>

  )
}

export default Input
