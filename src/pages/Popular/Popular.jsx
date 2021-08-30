import { useSetState } from "ahooks";
import React, { useEffect } from "react";
import Card from "@/components/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "@/components/Loading";
import ShowError from "@/components/ShowError";
import Container from "react-bootstrap/Container";
import { queryRepositoty } from "@/services/popular";
import LanguagePicker from "@/components/LanguagePicker";
import InfiniteScroll from "react-infinite-scroll-component";
import RepositotyDescription from "@/components/Card/RepositotyDescription";
import style from "./popular.less";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

export default function Popular() {
  const [{ message, doc_url }, setMessage] = useSetState({
    message: "",
    doc_url: "",
  });
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
    queryRepositoty({ language, per_page, page })
      .then((formServiceState) => {
        setState((workProcessState) => {
          const nextWorkProcessRepositoties = workProcessState?.additional
            ? [
                ...workProcessState.repositoties,
                ...formServiceState.data?.items,
              ]
            : formServiceState.data?.items;
          return {
            repositoties: nextWorkProcessRepositoties,
          };
        });
      })
      .catch((error) => {
        setMessage({
          message: error?.errorMessage?.message,
          doc_url: error?.errorMessage?.documentation_url,
        });
      });
  }, [language, page, per_page, setMessage, setState]);

  return (
    <Container>
      <LanguagePicker
        languages={languages}
        selected={language}
        onUpdateLanguage={handleUpdate}
        selectedColor={"rgb(187, 46, 31)"}
      />

      {message ? (
        <ShowError message={message} position="center">
          <a
            className="btn-dark mt-4 px-4 py-2 small"
            target="_blank"
            rel="noreferrer"
            href={doc_url && doc_url}
          >
            查看文档
          </a>
        </ShowError>
      ) : (
        <InfiniteScroll
          dataLength={repositoties?.length}
          next={handlePullUp}
          hasMore={true}
          loader={<Loading />}
        >
          <Row className={style.repositotiesContainer}>
            {repositoties?.map((repositoty, index) => (
              <Col lg={3} md={4} sm={6} key={repositoty?.id}>
                <Card
                  item={repositoty}
                  sources={repositoties}
                  title={`#${index + 1}`}
                  renderDescription={
                    <RepositotyDescription item={repositoty} />
                  }
                />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      )}
    </Container>
  );
}
