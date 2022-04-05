import React, { useState } from "react";
import DataFetching from "../DataFetching/DataFetching";
import { List, Avatar, Skeleton, Divider, Button, Modal } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
const Students = () => {
  //Api
  let url = "/?results=10&inc=name,gender,email,nat,picture&noinfo";
  const [data, loadMoreData] = DataFetching(url);
  console.log(data);
  //List items

  //editModal
  const editModal = (el) => {
    console.log(el);
  };

  // deleteStudent
  const deleteStudent = (i) => {
    Modal.confirm({
      title: "O'chirishga rozimisiz",
      okText: "Ha",
      cancelText: "Yo'q",
      onOk: () => {
        data.filter((item, index) => {
          return index + 1 !== i;
        });
      },
    });
    console.log(i);
  };

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>Tugadi 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="#">{item.name.last}</a>}
                description={item.email}
              />
              <div>
                <Button
                  type="primary"
                  style={{ marginRight: "5px" }}
                  // onClick={showModal}
                  onClick={() => editModal(item)}
                >
                  Edit
                </Button>
                <Button
                  danger
                  type="dashed"
                  onClick={() => deleteStudent(index + 1)}
                >
                  Delete
                </Button>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Students;
