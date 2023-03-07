import {useState} from 'react'

import {
  Container,
  Credit,
  Payment,
  Method,
  Heading,
  Head,
  Para,
  Card,
  Input,
  Hr,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <Container>
      <Credit>
        <Heading>CREDIT CARD</Heading>
        <Hr />
        <Card data-testid="creditCard">
          <Para>{number}</Para>
          <Para>CARDHOLDER NAME</Para>
          <Para>{name.toUpperCase()}</Para>
        </Card>
      </Credit>
      <Payment>
        <Method>
          <Head>Payment Method</Head>
          <Input
            type="text"
            placeholder="Card Number"
            value={number}
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </Method>
      </Payment>
    </Container>
  )
}

export default CreditCard
