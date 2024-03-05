// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import NavDropDown from "./NavDropDown";

const PhotoClub = () => {
  return (
    <>
      <NavDropDown />
      <Container>
        <h1>TINT Photography club</h1>
        <SecContainer>
          <div className="left">
            <h3>Current Events</h3>
          </div>
          <div className="mid">
            <p>
              <span>TINT Photography Club is the official photography club of Techno International New Town, where the photo enthusiasts of the college try to nurture their creativity and disclose the subtle richness of reality through their images. It is one of the most popular clubs of the college and acts as a mantle to voice the feelings and ideas of students through photography, which is amongst the most modern visual art forms.</span>
            </p>
            <br />
            <p>
            The honourable Director of Techno International New Town, Prof. (Dr.) R.T. Goswami and the venerable Registrar of the college, Prof. (Dr.) S.P. Ghosh have always nurtured an environment in the college where culture with all its branches can flourish radiantly. It was their endeavour to maintain such an environment that led to the germination of the idea for a photography club in the college. This idea gained ground as our beloved MD Dr. Satyam Roychowdhury has always encouraged the creation of platforms so that students can express themselves outside their academic activities. He lent his support to the initiative of our honourable Director and Registrar.
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
              No applicant will be allowed to take membership without obtaining the No-Objection Certificate duly signed and issued by the concerned Head of Department.
              </li>
              <li>
              Membership will be offered primarily to those who have genuine interest in photography.
              </li>
              <li>
              Membership process will be complete only after producing all relevant documents in order to justify their claim.
              </li>
              <li>A group of competent faculty members will scrutiny the photos sent by the students before offering formal membership to them.</li>
              <li>
              The club membership of a student will lapse in the natural course once and when his/her studentship ends.
              </li>
              <li>
              The selected members are expected to follow the notice offered to them regrading periodic meetings of the club. Members are expected to take part in different activities organised by the club.
              </li>
              <li>
              All photos for display or for discussion must be clicked by the member himself/herself.
              </li>
              <li>
              The authority reserves the sole right to cancel membership of any student on valid grounds at any time without prior notice. Addition and alteration of the rules and regulations may take place at any point of time in future depending on the requirement.
              </li>
            </ol>
          </div>

          <div className="line"></div>
          <div className="second">
            <h3>List of Faculty Members who are a part of the Club:</h3>
            <ul>
              <li>
              Prof. Anisha Mahato, Assistant Professor (IT)
              </li>
              <li>
              Prof. Averi Banerjee, Assistant Professor (BSH)
              </li>
              <li>
              Prof. Ayantani  Bhattacharjee, Assistant Professor (EE)
              </li>
              <li>
              Mr. Basab Mukherjee, Assistant Librarian
              </li>
              <li>
              Prof. Debraj Chatterjee, Assistant Professor (CSE)
              </li>
              <li>
              Mr. Gourab Panda, Technical Assistant (CE)
              </li>
              <li>
              Prof. Md. Anoarul Islam, Assistant Professor (ECE)
              </li>
              <li>
              Prof. Nantu Das, Assistant Professor & HOD (AEIE)
              </li>
              <li>
              Prof. (Dr). Papiya Debnath, Assistant  Professor (BSH)
              </li>
              <li>
              Mr. Rahul Raj Gupta, Technical Assistant (ME)
              </li>
              <li>
              Prof. Saswati Ghosh, Assistant Professor (MCA)
              </li>
              <li>
              Mr. Subhajit Maitra, Technical Assistant (BSH)
              </li>
            </ul>
          </div>

          <div className="line"></div>
          <div className="second">
            <h3>Faculty In-Charge of TINT Photography Club:</h3>
            <ul>
              <li>
              Prof.(Dr). Anindita Ray, Assistant Professor (BSH)
              </li>
              <li>
              Prof. Debashis Bhattacharyya, Assistant HOD (BBA)
              </li>
    
            </ul>
          </div>
        </ThirdContainer>
      </Container>

      <Footer>
        <div className="left">
          <div className="leftLogo">
            <img src="../PhotoClub.png" alt="" />
            <div className="text">
              <h4>TINT Photography Club</h4>
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
          Life is built up with a tableau of experiences and perceptions that make us what we are. Therefore, while the college primarily seeks to excel in the field of technical disciplines, it ensures that the individuality and creativity of the students are kept alive by nurturing the passion within. It is with this vision that the club began its long walk. Be it nature, wildlife, portrait, street or fashion photography, advertisement, journalism or any other camera skill – the club yearns to aid students in every possible way to nurture their skills and yet keep alive the individuality of each student in terms of style.
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

export default PhotoClub;
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
    height: 485px;
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
