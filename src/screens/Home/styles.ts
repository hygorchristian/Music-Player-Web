import styled from 'styled-components'
import Scroll from '~/components/Scroll'

export const Container = styled(Scroll)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  .head{
    display: flex;
    flex-direction: column;
    height: 240px;
    align-items: flex-start;
    justify-content: flex-end;
    
    h1{
      font-size: 48px;
      margin-bottom: 52px;
    }
  }
  
  .subhead{
    height: 68px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    h2{
      font-size: 28px;
    }
  }
  
  .fake-content{
    height: 300vh;
    padding-top: ${({ fixed }) => fixed ? 240 : 0}px;
    
    p{
      margin: 20px;
    }
  }
  
  .extra-size{
    display: block;
    height: 240px;
  }
  
  .scroll{
    width: 100%;
    margin: 0 32px;
  }
`
