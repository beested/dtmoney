import styled from "styled-components"

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 2rem;
margin-top:-10rem;

div{
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color:#363f5f;

  header {
  display: flex;
  align-items:center;
  justify-content:space-between;
  }

  strong {
    display:block;
    margin-top:1rem;
    font-size:2rem;
    font-weight:500;
    line-height:3rem
  }

  &.highligth-background{
    background:#33cc95;
    color: #fff;
  }
}
`