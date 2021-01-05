import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CSVLink } from "react-csv";
import ReactPaginate from "react-paginate";
import {
  getFilteredDataSource,
  paginatedDataSource,
  pageCount,
} from "../../utils/helpers";
import {
  ButtonContainer,
  PaginateContainer,
  Table,
  Heading,
  Row,
  Th,
  Title,
  Td,
  NoDataTd,
  DropdownContainers,
  Search,
  Select,
} from "./Styled";
import "./DataTable.scss";

const pageNumbers = [1, 5, 10, 20, 30, 40, 50, 100];

export const DataTable = React.memo((props) => {
  const { isLoading, columns, tableData, perPageData } = props;
  const [data, setData] = useState([]);
  const [filterByFields, setFilterByFields] = useState([]);
  const [search, setSearch] = useState(null);
  const [recordPerPage, setRecordPerPage] = useState(5);
  const [selectedPage, setSelectedPage] = useState(1);
  const [maximumDisplayedPages, setMaximumDisplayedPages] = useState(1);

  const csvData = {
    headers: columns,
    data: data,
    filename: "data.csv",
  };

  useEffect(() => {
    setRecordPerPage(perPageData);
  }, [perPageData]);

  useEffect(() => {
    const filterByFields = columns?.map((item) => item.key);
    setFilterByFields(filterByFields);
  }, [columns]);

  useEffect(() => {
    const maxPages = pageCount(tableData, recordPerPage);
    const newPage = selectedPage > maxPages ? 1 : selectedPage;
    const newPageData = paginatedDataSource(newPage, recordPerPage, tableData);
    setSelectedPage(newPage);
    setMaximumDisplayedPages(maxPages);
    setData(newPageData);
  }, [tableData]);

  useEffect(() => {
    const filteredData = getFilteredDataSource(
      search,
      filterByFields,
      tableData
    );
    const newPageData = paginatedDataSource(1, recordPerPage, filteredData);
    const maxPages = pageCount(filteredData, recordPerPage);
    setMaximumDisplayedPages(maxPages);
    setData(newPageData);
    setSelectedPage(1);
  }, [search]);

  const onPageSizeChange = (pageSize) => {
    const filteredData = getFilteredDataSource(
      search,
      filterByFields,
      tableData
    );
    const newPageData = paginatedDataSource(1, pageSize, filteredData);
    const maxPages = pageCount(filteredData, pageSize);
    setData(newPageData);
    setSelectedPage(1);
    setRecordPerPage(pageSize);
    setMaximumDisplayedPages(maxPages);
  };

  const handleOnPaginationChange = ({ selected }) => {
    const selectPage = selected + 1;
    const filteredData = getFilteredDataSource(
      search,
      filterByFields,
      tableData
    );
    const newPageData = paginatedDataSource(
      selectPage,
      recordPerPage,
      filteredData
    );
    setSelectedPage(selectPage);
    setData(newPageData);
  };

  return (
    <Fragment>
      <DropdownContainers className="product-filter-wrapper">
        <div className="asif-lib-report-filter">
          <Search
            placeholder="Search..."
            list="sku"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="asif-lib-report-filter">
          <Select onChange={(e) => onPageSizeChange(Number(e.target.value))}>
            {pageNumbers.map((page) => (
              <option value={page} selected={page === recordPerPage}>
                {page}
              </option>
            ))}
          </Select>
        </div>
        <ButtonContainer>
          <CSVLink className="btn-export-to-csv-data-asif-lib" {...csvData}>
            Export to CSV
          </CSVLink>
        </ButtonContainer>
      </DropdownContainers>
      <Table>
        <Heading>
          {columns?.map((column) => (
            <Th key={column.key}>
              <Title>{column.label}</Title>
            </Th>
          ))}
        </Heading>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <Row key={index}>
                {columns?.map((column) => (
                  <Td key={index}>{item[column.key]}</Td>
                ))}
              </Row>
            );
          })
        ) : (
          <Row>
            <NoDataTd colSpan={columns?.length}>
              {isLoading ? "Loading..." : `No data available`}
            </NoDataTd>
          </Row>
        )}
      </Table>
      <PaginateContainer>
        <div id="react-paginate">
          <ReactPaginate
            forcePage={selectedPage - 1}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={maximumDisplayedPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={handleOnPaginationChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </PaginateContainer>
    </Fragment>
  );
});

DataTable.propTypes = {
  isLoading: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
  perPageData: PropTypes.number
};

DataTable.defaultProps = {
  isLoading: false,
  columns: [],
  tableData: [],
  perPageData:10
};
