import styled from 'styled-components'

type ContainerProps ={
    done:boolean
}
export const Container = styled.div(({done}: ContainerProps)=>(
    `
    display: flex;
    background-color: #20212C;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    
    label{
        color: #CCC;
        font-size: 1.5rem;
        text-decoration: ${done ? 'line-through' : 'initial'}
    }
    
    input{
        width: 25px;
        height: 25px;
        margin-right: 25px;
    }
    `
))


