import { useSetState } from "ahooks";
import React, { useEffect } from "react";
import Card from "@/components/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "react-bootstrap/Container";
import LanguagePicker from "@/components/LanguagePicker";
import Loading from "@/components/Loading";
import { queryRepositoty } from "@/services/popular";
import style from "./popular.less";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

export default function Popular() {
  const [{ repositoties, language, per_page, page }, setState] = useSetState({
    repositoties: [],
    per_page: 10,
    page: 1,
    language: "All",
    additional: false,
  });

  const handleUpdate = (language) => {
    setState({
      language,
      page: 1,
      additional: false,
      repositoties: [],
    });
  };

  const handlePullUp = () => {
    setState({
      page: page + 1,
      additional: true,
    });
  };

  useEffect(() => {
    queryRepositoty({ language, per_page, page }).then((formServiceState) => {
      setState((workProcessState) => {
        const nextWorkProcessRepositoties = workProcessState?.additional
          ? [...workProcessState.repositoties, ...formServiceState.data?.items]
          : formServiceState.data?.items;

        return {
          repositoties: nextWorkProcessRepositoties,
        };
      });
    });
  }, [language, page, per_page, setState]);

  return (
    <Container>
      <LanguagePicker
        languages={languages}
        selected={language}
        onUpdateLanguage={handleUpdate}
        selectedColor={"rgb(187, 46, 31)"}
      />
      <InfiniteScroll
        dataLength={repositoties?.length}
        next={handlePullUp}
        hasMore={true}
        loader={<Loading />}
      >
        <Row className={style.repositotiesContainer}>
          {repositoties?.map((repositoty, index) => (
            <Col lg={3} md={4} sm={6} key={repositoty?.id}>
              <Card index={index} item={repositoty} sources={repositoties} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}
