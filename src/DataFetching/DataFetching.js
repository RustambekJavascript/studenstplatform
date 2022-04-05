import { useEffect, useState } from "react";
import { API_RANDOM } from "../const/index";
const DataFetching = (url) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(API_RANDOM + url)
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, [url]);

  return [data, loadMoreData];
};

export default DataFetching;
