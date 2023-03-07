import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`

export const Credit = styled.div`
  background-color: #3b4b69;
  font-family: 'Roboto';
  padding: 50px;
  width: 50%;
`

export const Heading = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`

export const Hr = styled.hr`
  width: 150px;
  background-color: #ffd773;
  height: 2px;
`

export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 30vw;
  background-size: cover;
  height: 40vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-top: 200px;
`

export const Para = styled.p`
  color: white;
  font-size: 20px;
`

export const Payment = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Method = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 2px #d3d9e0;
  border-radius: 10px;
  padding: 70px;
  margin: 70px;
`

export const Head = styled.h1`
  color: #344e7a;
  font-weight: bold;
  font-size: 30px;
`

export const Input = styled.input`
  padding: 5px;
  margin: 5px;
  width: 250px;
`
