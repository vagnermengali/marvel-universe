import { useContext } from 'react';
import { Context as ContextPage } from '../../context/pageContext';
import { Pagination } from 'antd';

const PaginationCard = () => {
  const { setCurrentPage } = useContext(ContextPage);

  const total = 2600;
  const pageSize = 20;

  return (
    <Pagination
      showQuickJumper
      defaultCurrent={1}
      total={total}
      pageSize={pageSize}
      onChange={(page) => {
        setCurrentPage(page);
      }}
    />
  );
};

export default PaginationCard;