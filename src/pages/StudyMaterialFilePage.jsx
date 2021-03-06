import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BreadcrumbPdf from "../components/BreadcrumbPdf";
import HelpComponent from "../components/HelpComponent";
import "../styles/StudyMaterialFilePage.css";
import "../styles/style.css";
class StudyMaterialFilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomValue: null,
    };
  }
  render() {
    return (
      <Container className="contentContainerSm" id="file-page-container">
           <HelpComponent />
            <BreadcrumbPdf />
        <br/>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <div
              id="file-data-div"
              tabIndex="0"
              className={
                this.props.value === "125"
                  ? "zoom-125"
                  : this.props.value === "150"
                  ? "zoom-150"
                  : this.props.value === "175"
                  ? "zoom-175"
                  : this.props.value === "200"
                  ? "zoom-200"
                  : null
              }
            >
              The purpose of personas is to create reliable and realistic
              representations of your key audience segments for reference. These
              representations should be based on qualitative and some
              quantitative user research and web analytics. Remember, your
              personas are only as good as the research behind them. Effective
              personas: <br />
              <br />
              Represent a major user group for your website Express and focus on
              the major needs and expectations of the most important user groups
              Give a clear picture of the user's expectations and how they're
              likely to use the site Aid in uncovering universal features and
              functionality Describe real people with backgrounds, goals, and
              values
              <br />
              <br />
              <b> Benefits of Personas</b>
              <br /> Personas help to focus decisions surrounding site
              components by adding a layer of real-world consideration to the
              conversation. They also offer a quick and inexpensive way to test
              and prioritize those features throughout the development process.
              In addition they can help:
              <br />
              <br /> You may develop one or more personas for a project but
              limit yourself to the main audiences for the site. For any given
              project, creating only three or four personas is best. Remember
              that it is better to paint with a broad brush and meet the needs
              of the larger populations than try to meet the needs of everyone.
              The goal of personas is not represent all audiences or address all
              needs of the website but instead to focus on the major needs of
              the most important user groups.
            </div>
          </Col>
            <Col xs={2} style={{paddingTop:'18%'}}>
                <Link to='/study-material/image'>
                  <span style={{display:'inline-flex',color:"#000000",textDecoration:'none'}}> Market analysis.jpg <ArrowForwardIosIcon className ="arrowIcn"/></span>
                </Link>
            </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state,
  value: state.reducers.zoomValue,
});
export default connect(mapStateToProps)(StudyMaterialFilePage);
