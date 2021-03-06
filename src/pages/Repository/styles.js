import styled from 'styled-components';

export const Loading = styled.div`

  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

export const Owner = styled.header`

  display: flex;
  flex-direction: column;
   align-items: center;
  
  img {
    width: 120px;
    border-radius: 100%;
    margin-top: 20px;
  }

  h1{
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 20px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  a {
    font-color: #4682B4;
    text-decoration: none;
    font-size: 16px;
  }

`;

export const IssueList = styled.ul`

  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px; 
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee; 
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a{
          text-decoration: none;
          color: #333;

          &:hover {
            color: #4682B4;
          } 
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 5px;
        }
      }
      p {
          margin-top: 2px;
          font-size: 12px;
          color: #999;
        }
      
    }
  }

`;