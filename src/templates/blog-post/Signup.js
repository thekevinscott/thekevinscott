import React from "react";
import styled from "styled-components";

const Signup = styled.div `
  width: 100%;
  background-color: rgba(50,100,255,0.05);
  margin-top: 20px;
  padding-top: 60px;

  p {
    font-size: 1.4rem;
    color: rgba(0,0,0,0.6);
  }

  form {
    margin: 0 auto 100px auto;
    max-width: 100%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    padding: 20px;
    background: white;
    border-radius: 5px;
    box-sizing: border-box;
  }

  h3 {
    color: rgba(0,0,0,0.6);
    // color: #f9a82f;
    color: rgba(0,50,205,0.6);
    font-size: 23px;
    display: block;
    margin: 0 20px 0 0 ;
    padding: 0 0 15px 0 ;
    line-height: 1.4 ;
    font-weight: bold ;
    text-align: left ;
    clear: none ;
  }

  input {
    padding: 10px;
    font-size: 1.6rem;
    margin: 20px 0;
    padding: 10px 12px;
    height: auto;
    // color: #4F5362;
    color: rgba(0,0,0,0.6);
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    background-image: none;
    min-width: 0;
    min-height: 0;
    width: 300px;

    &[type=submit] {
      color: white;
      // background-color: #f9a82f;
      background-color: rgba(0,50,205,0.6);
      font-size: 15px;
      width: 140px;
      cursor: pointer;
      display: inline-block;
      height: auto;
      border: none;
      padding: 15px;
      margin: 0;
    }

  }
`;

const Container = styled.div `
  max-width: 700px;
  margin: 0 auto;
`;

export default () => (
  <Signup>
    <Container>
      <p>I'm spending 2018 teaching myself AI and deep learning, and I'm journaling my adventure. Sign up below and I'll drop you a line when I publish new articles or find cool new tools.</p>
      <form action="https://www.getdrip.com/forms/242548946/submissions" method="post" data-drip-embedded-form="242548946">
        <h3 data-drip-attribute="headline">Subscribe to the AI and Deep Learning Journal</h3>
        <div>
          <input type="email" id="drip-email" name="fields[email]" placeholder="Email Address" />
        </div>
        <div>
          <input type="submit" value="Sign Up" data-drip-attribute="sign-up-button" />
        </div>
      </form>
    </Container>
  </Signup>
);
