function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CSVLink } from "react-csv";
import ReactPaginate from "react-paginate";
import { getFilteredDataSource, paginatedDataSource, pageCount } from "../../utils/helpers";
import { ButtonContainer, PaginateContainer, Table, Heading, Row, Th, Title, Td, NoDataTd, DropdownContainers, Search, Select } from "./Styled";
import "./DataTable.css";
const pageNumbers = [1, 5, 10, 20, 30, 40, 50, 100];
export const DataTable = /*#__PURE__*/React.memo(props => {
  const {
    isLoading,
    columns,
    tableData,
    perPageData
  } = props;
  const [data, setData] = useState([]);
  const [filterByFields, setFilterByFields] = useState([]);
  const [search, setSearch] = useState(null);
  const [recordPerPage, setRecordPerPage] = useState(5);
  const [selectedPage, setSelectedPage] = useState(1);
  const [maximumDisplayedPages, setMaximumDisplayedPages] = useState(1);
  const csvData = {
    headers: columns,
    data: data,
    filename: "data.csv"
  };
  useEffect(() => {
    setRecordPerPage(perPageData);
  }, [perPageData]);
  useEffect(() => {
    const filterByFields = columns?.map(item => item.key);
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
    const filteredData = getFilteredDataSource(search, filterByFields, tableData);
    const newPageData = paginatedDataSource(1, recordPerPage, filteredData);
    const maxPages = pageCount(filteredData, recordPerPage);
    setMaximumDisplayedPages(maxPages);
    setData(newPageData);
    setSelectedPage(1);
  }, [search]);

  const onPageSizeChange = pageSize => {
    const filteredData = getFilteredDataSource(search, filterByFields, tableData);
    const newPageData = paginatedDataSource(1, pageSize, filteredData);
    const maxPages = pageCount(filteredData, pageSize);
    setData(newPageData);
    setSelectedPage(1);
    setRecordPerPage(pageSize);
    setMaximumDisplayedPages(maxPages);
  };

  const handleOnPaginationChange = ({
    selected
  }) => {
    const selectPage = selected + 1;
    const filteredData = getFilteredDataSource(search, filterByFields, tableData);
    const newPageData = paginatedDataSource(selectPage, recordPerPage, filteredData);
    setSelectedPage(selectPage);
    setData(newPageData);
  };

  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(DropdownContainers, {
    className: "product-filter-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "asif-lib-report-filter"
  }, /*#__PURE__*/React.createElement(Search, {
    placeholder: "Search...",
    list: "sku",
    value: search,
    onChange: e => setSearch(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "asif-lib-report-filter"
  }, /*#__PURE__*/React.createElement(Select, {
    onChange: e => onPageSizeChange(Number(e.target.value))
  }, pageNumbers.map(page => /*#__PURE__*/React.createElement("option", {
    value: page,
    selected: page === recordPerPage
  }, page)))), /*#__PURE__*/React.createElement(ButtonContainer, null, /*#__PURE__*/React.createElement(CSVLink, _extends({
    className: "btn-export-to-csv-data-asif-lib"
  }, csvData), "Export to CSV"))), /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(Heading, null, columns?.map(column => /*#__PURE__*/React.createElement(Th, {
    key: column.key
  }, /*#__PURE__*/React.createElement(Title, null, column.label)))), data.length > 0 ? data.map((item, index) => {
    return /*#__PURE__*/React.createElement(Row, {
      key: index
    }, columns?.map(column => /*#__PURE__*/React.createElement(Td, {
      key: index
    }, item[column.key])));
  }) : /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(NoDataTd, {
    colSpan: columns?.length
  }, isLoading ? "Loading..." : `No data available`))), /*#__PURE__*/React.createElement(PaginateContainer, null, /*#__PURE__*/React.createElement("div", {
    id: "react-paginate"
  }, /*#__PURE__*/React.createElement(ReactPaginate, {
    forcePage: selectedPage - 1,
    previousLabel: "Previous",
    nextLabel: "Next",
    breakLabel: "...",
    breakClassName: "break-me",
    pageCount: maximumDisplayedPages,
    marginPagesDisplayed: 1,
    pageRangeDisplayed: 4,
    onPageChange: handleOnPaginationChange,
    containerClassName: "pagination",
    subContainerClassName: "pages pagination",
    activeClassName: "active"
  }))));
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
  perPageData: 10
};