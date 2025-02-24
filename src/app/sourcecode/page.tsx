"use client";
import React, { useState } from "react";
import SourceCode from "@/components/SourceCode";
// import Search from "@/components/Search";
export default function Source() {
  // const [filters, setFilters] = useState({
  //   courses: [],
  //   services: [],
  //   sourceCode: [],
  // });

  // const handleFilterChange = (newFilters: any) => {
  //   setFilters(newFilters);
  //   console.log("Selected Filters:", newFilters);
  // };

  // const handleSearch = (query: string) => {
  //   console.log("Searching for:", query);
  // };

  const [checkboxes, setCheckboxes] = useState([
    { label: "Tất cả", checked: true },
    { label: "Front end", checked: false },
    { label: "Back end", checked: false },
    { label: "Full-stack", checked: false },
    { label: "Mobile", checked: false },
  ]);

  // const handleCheckboxChange = (index: number, checked: boolean) => {
  //   const newCheckboxes = [...checkboxes];
  //   newCheckboxes[index].checked = checked;
  //   setCheckboxes(newCheckboxes);
  // };

  const codes = [
    {
      title: "[SCA1] Full code dự án hệ sinh thái của doanh nghiệp",
      description: "ReactJs + NodeJs + MySQL",
      imageUrl: "/images/sourcecode/eco/main-eco.png",
      link: "/sourcecodeDetail/sc_a1",
    },
    // {
    //   title: "[SC_A2] Code dự án Portfolio",
    //   description: "Nextjs",
    //   imageUrl: "/images/sourcecode/source-code.png",
    //   link: "/course/react",
    // },
    // {
    //   title: "[SC_A3] Code dự án Portfolio",
    //   description: "Html + Css + Js",
    //   imageUrl: "/images/sourcecode/source-code.png",
    //   link: "/course/react",
    // },
  ];
  return (
    <div className="flex p-4 w-full">
      <div className="w-full">
        {/* Hiển thị kết quả dựa trên filters */}
        {/* <pre>{JSON.stringify(filters, null, 2)}</pre> */}
        {/* <Search
          onSearch={handleSearch}
          checkboxes={checkboxes}
          onCheckboxChange={handleCheckboxChange}
        /> */}
        <SourceCode
          codes={codes}
          title="Tất cả Source Code"
          allCodeLink="#allcourse"
        />
      </div>
    </div>
  );
}
