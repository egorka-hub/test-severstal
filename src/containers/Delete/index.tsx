import React          from "react";
import {useRequest}   from "../../context/RequestContext";

import {Container}    from "../../components/Container";
import {Button}       from "../../components/Button";
import {Link}         from "../../components/Link";
import {apiDelete}      from "../../api";

function Delete() {
  const {setData} = useRequest()

  const handleAdd =  async () => {
    const url = '/delete'
    const time = new Date()
    await apiDelete(url);
    setData(prev => [...prev, {time, url}])
  }

  return (
    <Container>
      <Link to={'/'}>Назад</Link>
      <Button onClick={handleAdd}>Delete</Button>
    </Container>
  )
}

export default Delete;
