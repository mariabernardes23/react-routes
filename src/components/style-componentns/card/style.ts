import styled from 'styled-components'

const CardContainer = styled.div`
    width: 300px;
    margin: 50px;
    border: 0.5rem solid #3B3BA4;
    border-radius: 2rem;
    overflow: hidden;
`

const CardImg = styled.img`
    width:100%;
`

const CardBody = styled.div`
    padding: 20px;
`
const CardTitle = styled.h5`
    margin: 1rem 0;
`

const CardText = styled.p`
    font-size: 12px;
    margin: 1rem 0;
`

const CardButton = styled.button`
    background-color: #A6A6DE;
    border: 0;
    border-radius: 20px;
    color: #FFFFFF;
    padding: 5px 15px;
    font-weight: bold;
    margin-top: 1rem;

    &:hover {
        background-color: #89BBE4;
    }
`

export {CardContainer, CardImg, CardBody, CardTitle, CardText, CardButton}