import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  padding: 2rem 1rem;
  flex-wrap: wrap;
  gap: 30px;
  background-color: ${(props) => props.theme.bg};
`;

export const NavBar = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.border};

  .logo {
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.fg};
  }

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .login-button {
    color: white;
    background-color: ${(props) => props.theme.accent};
    height: 35px;
    width: 80px;
    font-size: 0.9rem;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .login-button:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.hoverAccent};
  }

  .input {
    font-size: 1rem;
    width: 200px;
    border-radius: 5px;
    padding: 0.4rem 1rem;
    border: 2px solid ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg};
    margin-right: 1rem;
  }

  .input::placeholder {
    color: #c8c8c8;
  }
`;

export const VideoCard = styled(Link)`
  width: 18rem;
  height: 22rem;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.05s ease-out;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }

  img {
    height: 10rem;
    width: 18rem;
    object-fit: cover;
    border: none;
  }

  .video-data {
    flex: 1;
    padding: 1rem;
    border: 2px solid ${(props) => props.theme.border};
    border-radius: 0 0 10px 10px;
  }

  .video-title {
    margin: 0;
    font-weight: bold;
    font-size: 1.1rem;
    white-space: pre;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .video-channel {
    margin: 0;
    font-weight: bold;
    font-size: 0.9rem;
    color: ${(props) => props.theme.accent};
  }

  .video-description {
    font-size: 0.8rem;
    height: 4rem;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: justify;
    white-space: pre-wrap;
    color: ${(props) => props.theme.secondaryFg};
  }
`;
