import React from 'react'

interface Props {

  name: string,
  surname: string
  email: string
  message: string
}

export default function EmailTemplate({ name, surname, email, message }: Props) {
  return (
    <div>
      <h1>Nuevo mensaje</h1>
      <h2>De: {name} {" "} {surname}</h2>
      <i>{email}</i>
      <p>{message}</p>
    </div>
  )
}
