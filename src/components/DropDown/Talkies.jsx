// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import NavDropDown from "./NavDropDown";
const Talkies = () => {
  return (
    <>
      <NavDropDown />
      <Container>
        <h1>TINT Talkies - TINT Film & Drama Club</h1>
        <SecContainer>
          <div className="left">
            <h3>Current Events</h3>
          </div>
          <div className="mid">
            <p>
              <span>TINT Talkies, the Official Film Club of Techno International New Town, was inaugurated on Tuesday, 30th July, 2019, in the presence of renowned film personalities— Mr. Arjun Gaurisaria, National Award-winning filmmaker, Mr. Dhrubo Banerjee, acclaimed for his directorial series on Guptadhan, Ms. Sudeshna Ray, celebrated actor, director and social activist, and Mr. Soumik Haldar, illustrious cinematographer with more than a hundred and fifty feature films to his credit.</span>
            </p>
            <br />
            <p>
            TINT Talkies was launched on the platform of the B.Tech. first year Induction Programme, by the celebrities present and the Hon’ble Director of the College, Prof. (Dr.) R. T. Goswami, with the screening of Two, a 12-minute short film by none other than Satyajit Ray, the film being arguably one of the most allegorical in Ray’s entire body of work.
            </p>
          </div>
          <div className="right">
            <h3>Notices</h3>
          </div>
        </SecContainer>
        <ThirdContainer>
          <div className="first">
            <h3>Rules and regulations of the Club:</h3>
            <ol>
              <li>
              No applicant will be allowed for membership without approval of concerned Head of Department.
              </li>
              <li>
              The applicant must responsibly ensure that their participation in the activities of the club do not encroach on their academic performance.
              </li>
              <li>
              The membership of club will be granted only on the basis of an audition conducted by the competent faculty members and the mere submission of application does not guarantee the selection of an applicant.
              </li>
              <li>The selected members are expected to attend the meetings of the Club regularly.</li>
              <li>
              Members shall under no circumstances use club properties provided or made available to them for their private purposes and must not mishandle club property.
              </li>
              <li>
              Members are expected to work responsibly and sincerely as well as develop a spirit of mutual respect and cooperation among themselves while organizing events or participating in Club activities.
              </li>
              <li>
              Parents/Local Guardians must be informed regarding the involvement with this club.
              </li>
              <li>
              Membership will automatically become invalid after graduating from college.
              </li>
            </ol>
          </div>

          <div className="line"></div>
          <div className="second">
            <h3>List of Faculty Members who are a part of the Club:</h3>
            <ul>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
              <li>
              Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>

          <div className="line"></div>
          <div className="second">
            <h3>Faculty In-Charge of TINT Talkies - TINT Film & Drama Club</h3>
            <ul>
              <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, necessitatibus?
              </li>
              <li>
              orem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, necessitatibus?
              </li>
              <li>
              orem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, necessitatibus?
              </li>
            </ul>
          </div>
        </ThirdContainer>
      </Container>

      <Footer>
        <div className="left">
          <div className="leftLogo">
            <img src="../cropped-s-4.png" alt="" />
            <div className="text">
              <h4>TINT TALKIES</h4>
              <h5>TINT Film & Drama Club </h5>
            </div>
          </div>
          <div className="searchBar">
            <form action="#">
              <input type="text" />
              <button className="btn" type="submit">
                Search
              </button>
            </form>
          </div>
          <p>
          TINT Talkies, the Official Film Club of Techno International New Town, was inaugurated on Tuesday, 30th July, 2019, in the presence of renowned film personalities— Mr. Arjun Gaurisaria, National Award-winning filmmaker, Mr. Dhrubo Banerjee, acclaimed for his directorial series on Guptadhan, Ms. Sudeshna Ray, celebrated actor, director and social activist, and Mr. Soumik Haldar, illustrious cinematographer with more than a hundred and fifty feature films to his credit.
          </p>
        </div>
      </Footer>
      <FooterLine>
        <div className="copyRight">&copy;
          <h4>2024 EMS. All rights reserved</h4>
        </div>
        <div className="lastRight">
          <h4>Privacy Policy </h4>
          <h4>Terms of service </h4>
          <h4>Cookies Settings </h4>
        </div>
      </FooterLine>
    </>
  );
};

export default Talkies;
const ThirdContainer = styled.div`
  display: flex;
  margin: 25px 0px;
  align-items: center;

  border: 2px solid black;

  h3{
    padding-bottom: 10px;
    padding-left: 10px;
    /* border-bottom: 2px solid black; */
  }
  .first{
    width: 40%;
    padding-right: 10px;
    padding-bottom: 10px;
    /* background-color: #dfd0d0; */
    ol{
      padding-left: 30px;
    }
  }
  .second{
    width: 30%;
    padding-right: 10px;
    /* background-color: #dfd0d0; */
    ul{
      padding-left: 30px;
    }
  }
  .line{
    width: 2px;
    background-color: black;
    height: 450px;
  }
`;
const FooterLine = styled.div`
  padding: 0px 150px 0px 180px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #2b2b2b;
  border-top: 2px solid white;

  .copyRight{
    display: flex;
    gap: 5px;
    color: white;
    h4{
      font-weight: 200;
    }
  }

  .lastRight{
    display: flex;
    gap: 20px;
    height: 25px;

    color: white;
    h4{
      font-weight: 300;
      &:hover{
        cursor: pointer;
        border-bottom: 2px solid white;
      }
    }
  }
`
const Footer = styled.div`
  position: relative;
  bottom: 0;
  background-color: #2b2b2b;
  height: 350px;
  width: 100%;

  p {
    color: white;
    margin: 10px 150px 0px 180px;
    font-size: 12px;
    width: 450px;
    text-align: justify;
  }
  .searchBar {
    justify-content: center;
    margin: 0pc 180px 0px 180px;

    form {
      align-items: center;
      input {
        height: 40px;
        width: 255px;
        /* border-radius: 5px; */
        border: 2px solid #6090d8;

        /* margin-right: 10px; */
      }

      button {
        background-color: #6090d8;
        color: white;
        padding: 7px 15px 9px 15px;
        /* border-radius: 5px; */
        border: 2px solid #6090d8;
        cursor: pointer;
        font-weight: 600;
        font-size: 15px;

        &:hover {
          background-color: #3a6ebd;
        }
      }
    }
  }
  .leftLogo {
    width: 120px;
    height: 120px;
    margin: 0pc 150px 0px 180px;
    display: flex;
    align-items: center;

    img{
        width: 80%;
        height: auto;
        
        margin-right: 14px;
    }
    h4 {
      color: white;
      font-size: 25px;
    }
    h5 {
      color: white;
      font-size: 15px;
      width: 170px;
    }
  }
`;

const Container = styled.div`
  margin: 0pc 150px 0px 150px;

  h1 {
    text-align: center;
    font-size: 55px;
    font-weight: 600;
    padding-bottom: 15px;
  }
`;

const SecContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  .left {
    width: 25%;
    height: 360px;
    /* background-color: #b1b1b1; */

    border: 5px dashed black;
  }
  .mid {
    width: 50%;
    span {
      font-weight: 550;
    }
    p {
      font-weight: 300;
      text-align: justify;
    }
  }
  .right {
    width: 25%;
    height: 360px;
    /* background-color: #b1b1b1; */

    border: 5px dashed black;
  }

  h3 {
    font-size: 30px;
    text-align: center;
    color: #484848;
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 5px solid black;
  }
`;
