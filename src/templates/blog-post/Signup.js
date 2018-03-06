import React from "react";
import styled from "styled-components";

const Signup = styled.div `
  form {
    width: 700px;
    max-width: 100%;
    margin-bottom: 100px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 5px;
    box-sizing: border-box;
  }

  h3 {
    color: #f9a82f;
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
    color: #4F5362;
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

    &[type=submit] {
      color: white;
      background-color: #f9a82f;
      font-size: 15px;
      display: inline-block;
      height: auto;
      width: auto;
      border: none;
      padding: 15px;
      margin: 0;
    }

  }

  &:before {
    display: block;
    content: ". . .";
    letter-spacing: 10px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    margin-bottom: 60px;
  }
`;

export default () => (
  <Signup>
    <form action="https://www.getdrip.com/forms/242548946/submissions" method="post" data-drip-embedded-form="242548946">
      <h3 data-drip-attribute="headline">Deep Learning Curriculum</h3>
      <div data-drip-attribute="description">I'm spending 2018 teaching myself Deep Learning and AI and blogging my journey. I'll send you articles I write and techniques I learn. Happy coding!</div>
      <div>
        <input type="email" id="drip-email" name="fields[email]" placeholder="Email Address" />
      </div>
      <div>
        <input type="submit" value="Sign Up" data-drip-attribute="sign-up-button" />
      </div>
    </form>
  </Signup>
);
