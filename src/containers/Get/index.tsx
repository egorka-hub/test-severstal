import React          from "react";
import {useRequest}   from "../../context/RequestContext";

import {Container}    from "../../components/Container";
import {Button}       from "../../components/Button";
import {Link}         from "../../components/Link";
import {apiGet}      from "../../api";

function Get() {
  const {setData} = useRequest()

  const handleAdd =  async () => {
    const url = '/get'
    const time = new Date()
    await apiGet(url);
    setData(prev => [...prev, {time, url}])
  }

  return (
    <Container>
      <Link to={'/'}>Назад</Link>
      <Button onClick={handleAdd}>Get</Button>
    </Container>
  )
}

export default Get;
