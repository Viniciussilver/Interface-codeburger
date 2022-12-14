import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px 0;
  background-color: #efefef;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImg = styled.img``

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Button = styled(Link)`
  background: #9758a6;
  box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
    0px 20px 40px rgba(151, 88, 166, 0.24);
  border-radius: 8px;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 66px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
`

export const Img = styled.img`
  width: 200px;
  border-radius: 10px;
`
