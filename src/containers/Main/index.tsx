import moment from "moment";
import {useRequest}     from "../../context/RequestContext";

import {Container}      from "../../components/Container";
import {Link}           from "../../components/Link";
import {Accordion}      from "../../components/Accordion";
import {LIST_METHODS}   from './consts';

import styles           from './index.module.scss';

function Main() {
  const {data} = useRequest();

  const listContent =
    (<div className={styles.listWrapper}>
      <div className={styles.header}>
        <div className={styles.tableTitle}>Дата:</div>
        <div className={styles.tableTitle}>URL:</div>
      </div>
      {data.map(el => {
        const date = moment(el.time).format( 'Do MMMM YYYY, h:mm:ss a');
        return (
          <div className={styles.string}>
            <div>
              {date}
            </div>
            <div>
              {el.url}
            </div>
          </div>
          )
      })}
    </div>)

  return (
    <Container>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Методы:</h2>
        <div className={styles.btnsWrapper}>
          {LIST_METHODS.map(el => (
            <div>
              <Link
                key={el.to}
                to={el.to}
              >
                {el.title}
              </Link>
            </div>
          ))}
        </div>
        <Accordion title='Список запросов' content={listContent} />
      </div>
    </Container>
  )
}

export default Main;
