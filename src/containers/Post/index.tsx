import React          from "react";
import {useRequest}   from "../../context/RequestContext";

import {Container}    from "../../components/Container";
import {Button}       from "../../components/Button";
import {Link}         from "../../components/Link";
import {apiPost}      from "../../api";

function Post() {
  const {setData} = useRequest()

  const handleAdd =  async () => {
    const url = '/post'
    const time = new Date()
    await apiPost(url);
    setData(prev => [...prev, {time, url}])
  }

  return (
    <Container>
      <Link to={'/'}>Назад</Link>
      <Button onClick={handleAdd}>Post</Button>
    </Container>
  )
}

export default Post;
