export interface ITableRowData<T> {
    header: string;
    field: keyof T;
    render?: (data: T) => JSX.Element;
  }
  
  interface IProps<T> {
    data: T[];
    rowData: ITableRowData<T>[];
  }
  
  const Table = <T extends { id: number }>({ data, rowData }: IProps<T>) => {
    const renderTableCell = (element: T, row: ITableRowData<T>) => {
      if (row.render) {
        return row.render(element);
      }
  
      return element[row.field];
    };
  
    if (!data) return null;
  
    return (
      <table>
        <thead>
          <tr>
            {rowData.map((row) => (
              <th key={row.header}>{row.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr key={element.id}>
              {rowData.map((row) => (
                <td key={row.header}>
                  {renderTableCell(element, row) as JSX.Element}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    );
  };
  
  export default Table;
  