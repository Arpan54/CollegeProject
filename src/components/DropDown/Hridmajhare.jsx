// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import NavDropDown from "./NavDropDown";
const Hridmajhare = () => {
  return (
    <>
      <NavDropDown />
      <Container>
        <h1>HRIDMAJHARE- TINT Music Club</h1>
        <SecContainer>
          <div className="left">
            <h3>Current Events</h3>
          </div>
          <div className="mid">
            <p>
              <span>HRIDMAJHARE- TINT Music Club,</span> HRIDMAJHARE, the official music club of Techno International New Town, is where students and teachers come together, learn together, jam together, and together they make music— of varied genres and with varied flavours. One of the most prestigious and popular clubs of the Institute, Hridmajhare- TINT Music Club encourages various forms of cultural and artistic expressions and creates a sense of cultural harmony among the students who come here from diverse backgrounds.
            </p>
            <br />
            <p>
            The journey began almost a year back, when a handful of students, with a bit of hesitation and a lot of passion, approached some faculty members of this technical institute, with a request to form a music club of the College with the official approval of the appropriate authorities. Since then, although there were periods of lull and moments of zeal, there was, most importantly, no looking back.
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
              No applicant will be allowed to take membership without obtaining the No-Objection Certificate duly signed and issued by the Head of Department concerned.
              </li>
              <li>
              The applicant must responsibly ensure that his or her participation in the activities of the club do not encroach on his academic performance.
              </li>
              <li>
              The applicant must be able to produce before the competent authorities a documentary evidence of his or her interest in music and/or allied cultural activities.
              </li>
              <li>The membership of the club will be granted only on the basis of an audition conducted by the competent faculty members and the mere submission of application does not guarantee the selection of an applicant.</li>
              <li>
              The selected members are expected to attend the meetings of the club regularly as will be notified from time to time
              </li>
              <li>
              The members shall under no circumstances use the accessories or musical accompaniments provided or made available to them for their private purposes and must not mishandle club property.
              </li>
              <li>
              Members are expected to work responsibly and sincerely as well as develop a spirit of mutual cooperation amongst themselves while organising events or participating in Club activities.
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
            <h3>Faculty In-Charge of HRIDMAJHARE- TINT Music Club:</h3>
            <ul>
              <li>
              Prof. (Dr.) Kakali Ghosh, Covenor, Assistant Professor, Department of Basic Science & Humanities (Mathematics)
              </li>
              <li>
              Prof. Anwesha Dutta Ain, Co-convenor - Assistant Professor, Department of Basic Science & Humanities (English)
              </li>
              <li>
              Prof. Prabir Biswas, Co-convenor - Assistant Professor, Department of Mechanical Engineering
              </li>
            </ul>
          </div>
        </ThirdContainer>
      </Container>

      <Footer>
        <div className="left">
          <div className="leftLogo">
            <img src="../hridmajhare_logo.jpg" alt="" />
            <div className="text">
              <h4>HRIDMAJHARE</h4>
              <h5>TINT Music Club</h5>
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
          While excellence in the field of technical disciplines is the mainstay of the Institution, we also believe that the inculcation of the spirit of creativity and fine arts in students is essential for their holistic and spiritual development. It is with this aim and objective that Hridmajhare- TINT Music Club began its long walk to glory and excellence.
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

export default Hridmajhare;
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
    height: 360px;
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
    width: 285px;
    text-align: justify;
  }
  .searchBar {
    justify-content: center;
    margin: 0pc 180px 0px 180px;

    form {
      align-items: center;
      input {
        height: 40px;
        width: 200px;
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
    margin: 0pc 150px 0px 150px;
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
  }
`;

const SecContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  .left {
    width: 25%;
    height: 460px;
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
    height: 460px;
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
