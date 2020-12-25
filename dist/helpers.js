export const getFilteredDataSource = (value, filterByFields, data) => {
  if (!value) {
    return data;
  } else {
    return data.filter(item => {
      for (let key in item) {
        if (filterByFields.includes(key)) {
          let v = item[key] && item[key].toString().toLowerCase();

          if (v && v.indexOf(value.toLowerCase()) !== -1) {
            return true;
          }
        }
      }

      return false;
    });
  }
};
export const paginatedDataSource = (selectedPage, pageNumber, data) => {
  let firstIndex = (selectedPage - 1) * pageNumber;
  let secondIndex = selectedPage * pageNumber;
  const newPageData = data.slice(firstIndex, secondIndex);
  return newPageData;
};
export const pageCount = (data, pageNumber) => {
  if (data.length && pageNumber) {
    return Math.ceil(data.length / pageNumber);
  } else {
    return 1;
  }
};