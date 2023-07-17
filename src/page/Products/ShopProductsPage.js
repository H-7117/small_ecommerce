import React from "react";
import CategoryHeader from "../../Components/Category/CategoryHeader";
import SearchCount from "../../Components/utility/SearchCount";
import { Container, Row, Col } from "react-bootstrap";
import SideFilter from "../../Components/utility/SideFilter";
import CardProductComponent from "../../Components/Product/CardProductComponent";
import Pagination from "../../Components/utility/Pagination";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "650px" }}>
      <CategoryHeader />
      <Container>
        <SearchCount title=" الترتيب 400" />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col  sm="10" xs="10" md="11">
            <CardProductComponent title="" btntitle=""/>
          </Col>
        </Row>
        <Pagination/>
      </Container>
    </div>
  );
};

export default ShopProductsPage;
