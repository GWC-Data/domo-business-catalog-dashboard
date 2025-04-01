import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../../redux/actions/Users";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { CiSearch } from "react-icons/ci";

import {
  AllCommunityModule,
  ModuleRegistry,
  GridOptions,
  ColDef,
} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const SearchIcon: any = CiSearch;

const DashBoard: React.FC = () => {
  const [search, setSearch] = useState<any>();
  const dispatch = useDispatch<any>();

  const { data, loading, error } = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);

  const searchData = (
    data: {
      name: string;
      email: string;
      position: string;
      location: string;
      company: string;
    }[],
    query: string
  ) => {
    if (!query) return data;

    return data.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  const filteredData = searchData(data || [], search);

  const nameColumn: ColDef<any> = {
    headerName: "Name",
    field: "name",
    cellRenderer: ({ value }: { value: string }) => (
      <div className="font-semibold capitalize">{value}</div>
    ),
  };
  const emailColumn: ColDef<any> = {
    headerName: "Email",
    field: "email",
    resizable: true,
    minWidth: 300,
    flex: 0,
    cellStyle: { whiteSpace: "nowrap" },
    cellRenderer: ({ value }: { value: string }) => (
      <div className="font-semibold capitalize">{value}</div>
    ),
  };

  const companyColumn: ColDef<any> = {
    headerName: "Company",
    field: "company",
    cellRenderer: ({ value }: { value: string }) => (
      <div className="font-semibold capitalize">{value}</div>
    ),
  };

  const positionColumn: ColDef<any> = {
    headerName: "Position",
    field: "position",
    cellRenderer: ({ value }: { value: string }) => (
      <div className="font-semibold capitalize">{value}</div>
    ),
  };

  const locationColumn: ColDef<any> = {
    headerName: "Location",
    field: "location",
    cellRenderer: ({ value }: { value: string }) => (
      <div className="font-semibold capitalize">{value}</div>
    ),
  };
  const columnDefs: ColDef<any>[] = [
    nameColumn,
    emailColumn,
    companyColumn,
    positionColumn,
    locationColumn,
  ];

  const gridOptions: GridOptions<any> = {
    columnDefs,
    defaultColDef: {
      flex: 1,
      resizable: true,
      sortable: true,
      filter: false,
    },
    theme: "legacy",
  };

  return (
    <div className="mt-10">
      {/* Table Container */}
      <div className="w-full shadow-md  mt-10 p-4 bg-white rounded-md">
        <div className="flex  gap-3 border  bg-gray-100  w-full my-5 rounded">
          <div className=" items-center  justify-center py-1.5 pl-2 rounded-full ">
            <SearchIcon
              size={18}
              fontWeight={6}
              className="text-gray-600 font-bold"
            />
          </div>
          <input
            type="text"
            placeholder="What are you looking for ?"
            className="py-1.5 md:w-[300px] w-full outline-none bg-transparent flex-1 text-gray-700 placeholder-gray-400 text-sm"
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </div>

        <div className="ag-theme-alpine" style={{ height: "auto" }}>
          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          <div className="overflow-x-auto">
            <div className="ag-theme-alpine h-[500px] min-w-[600px]">
              <AgGridReact
                gridOptions={gridOptions}
                rowData={filteredData}
                suppressRowTransform={true}
                pagination={true}
                domLayout="normal"
                suppressHorizontalScroll={false}
                defaultColDef={{ resizable: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
