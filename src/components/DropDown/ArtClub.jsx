// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import NavDropDown from "./NavDropDown";
const ArtClub = () => {
  return (
    <>
      <NavDropDown />
      <Container>
        <h1>TINT Art Club - AESTHETICA</h1>
        <SecContainer>
          <div className="left">
            <h3>Current Events</h3>
          </div>
          <div className="mid">
            <p>
              <span>AESTHETICA - the Art Club of TINT,</span> is the official
              Art club of Techno International New Town, has been established
              with an aim to inculcate among students a deep passion for visual
              arts with an aesthetic touch. The club provides a platform for
              students to develop their creativity and self-expression, and to
              nurture a deep rooted understanding of concepts and ideas in art.
              {/* <img src="./ArtClubLogo.png" alt="" /><br /> */}
              It provides support and encouragement for those students who are
              seeking a creative break in addition to their academic
              schedule.ArtClubLogo The club was inaugurated on 27th September,
              2019 on the auspicious occasion of Freshers’ Welcome 2019. It was
              indeed a proud moment for the entire TINT family when the banner
              of AESTHETICA was held high by club members and other eminent
              dignitaries on the dais: Dr. R. T. Goswami, Director TINT, Dr.
              Swarup Prasad Ghosh, Registrar, TINT, Dr. Mala Mitra, HOD, BSH,
              TINT and Dr. Papiya Debnath, Convener, AESTHETICA, TINT. On this
              auspicious occasion, Dr. R. T. Goswami in his address mentioned
              that the Art Club of TINT proposes to capture the inherent talent
              and potentiality of the student community and also to uphold the
              artistic merits of the students who would in turn bring laurels to
              the organization through their constant efforts.
            </p>
            <p>
              AESTHETICA would encourage students to express their thoughts,
              feelings and creativity freely through drawing, sketching and
              painting. It would further motivate students to actively
              participate or be directly involved in art competitions. One of
              the major activities of the club would be to establish art club
              representatives to help manage and plan activities, and organize
              group projects. The club would also organize seminar, competitions
              and workshop for aesthetic enrichment of the students. At the same
              time the club is also looking forward to organize enrichment
              outing to a museum, art gallery, or figure drawing session in a
              year.
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
                Membership will be offered only to those who have serious
                interest in drawing and painting.
              </li>
              <li>
                No Objection Certificate from the Head of the Department has to
                be obtained.
              </li>
              <li>
                The club membership of a student will lapse in the natural
                course once and when his/her studentship in this college ends.
              </li>
              <li>
                Members are expected to take part in different activities
                organized by the club.
              </li>
              <li>
                All drawings for display or for discussion must be done by the
                member himself/herself.
              </li>
              <li>
                Misuse of membership card is strictly prohibited and if so found
                stringent step will be taken.
              </li>
              <li>
                The authority reserves the sole right to cancel membership any
                time without notice.
              </li>
              <li>
                Addition and alteration of the rules and regulations may take
                place at any point of time in future depending on the
                requirement.
              </li>
            </ol>
          </div>

          <div className="line"></div>
          <div className="second">
            <h3>List of Faculty Members who are a part of the Club:</h3>
            <ul>
              <li>
              Prof. Debaparna Sengupta, Assistant Professor (EE)
              </li>
              <li>
              Prof. Nantu Das, Assistant Professor (EIE)
              </li>
              <li>
              Prof. Sandip Bhattacharya, Assistant Professor    (ECE)
              </li>
              <li>
              Prof. Averi Banerjee, Assistant Professor (BSH)
              </li>
              <li>
              Prof. Ivy Das Choudhury, Assistant Professor (ME)
              </li>
              <li>
              Prof.  Mousumi Kundu, Assistant Professor (CE)
              </li>
              <li>
              Prof.(Dr.) Kashmi Mondal, Assistant Professor (BSH)
              </li>
              <li>
              Prof. Ipshita Ghatak, Assistant Professor (BBA)
              </li>
              <li>
              Prof. Soumajit Pal, Assistant Professor (MCA)
              </li>
              <li>
              Prof. Sayantan Majumder, Assistant Professor (BSH)
              </li>
              <li>
              Prof. Soumalya De, Assistant Professor (IT)
              </li>
            </ul>
          </div>

          <div className="line"></div>
          <div className="second">
            <h3>Faculty In-Charge of AESTHETICA - the Art Club:</h3>
            <ul>
              <li>
              Prof. (Dr.) Papiya Debnath, Convenor, Assistant Professor, Department of Basic Science & Humanities.
              </li>
              <li>
              Prof. Anindita Ray, Co-convenor, Assistant Professor, Department of Basic Science & Humanities.
              </li>
              <li>
              Prof. Debraj Chatterjee, Co-convenor, Assistant Professor, Department of Computer Science.
              </li>
            </ul>
          </div>
        </ThirdContainer>
      </Container>

      <Footer>
        <div className="left">
          <div className="leftLogo">
            <img src="../ArtClubLogo.png" alt="" />
            <div className="text">
              <h4>AESTHETICA</h4>
              <h5>The TINT Art Club</h5>
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
          AESTHETICA - the official Art Club of TINT, fosters a passion for visual arts, nurturing creativity and self-expression among students. Established on 27th September, 2019, it aims to cultivate talent and uphold artistic merits through various activities, competitions, seminars, and workshops.
          </p>
        </div>
      </Footer>
      <FooterLine>
        <div className="copyRight">&copy;
          <h4>2024 EMS. All rights reserved</h4>
        </div>
        <div className="lastRight">

        </div>
      </FooterLine>
    </>
  );
};

export default ArtClub;
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
    ol{
      padding-left: 30px;
    }
  }
  .second{
    width: 30%;
    padding-right: 10px;
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

  background-color: black;
  border-top: 2px solid white;

  .copyRight{
    display: flex;
    gap: 5px;
    color: white;
    h4{
      font-weight: 200;
    }
  }
`
const Footer = styled.div`
  position: relative;
  bottom: 0;
  background-color: black;
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

    h4 {
      color: white;
      font-size: 25px;
    }
    h5 {
      color: white;
      font-size: 15px;
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
