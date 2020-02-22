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
    height: 210px;
    align-items: flex-start;
    justify-content: flex-end;
    border-bottom: 1px solid #282828;
    margin-right: 32px;
    
    h1{
      font-size: 48px;
      margin-bottom: 28px;
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
    padding-top: ${({ fixed }) => fixed ? 210 : 0}px;
    
    p{
      margin: 20px;
    }
  }
  
  .extra-size{
    display: block;
    height: 210px;
  }
  
  .scroll{
    width: 100%;
    margin: 0 32px;
  }
`
