import React from 'react'
import Styles from './spinner-styles.scss'

interface Props {
  className?: string
}

const Spinner: React.FC<Props> = (props: Props) => {
  const { className } = props
  return (
    <div className={[Styles.spinner, className].join(' ')}><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner
