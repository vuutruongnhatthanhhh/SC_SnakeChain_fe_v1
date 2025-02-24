"use client";
import React from "react";
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

  // const [checkboxes, setCheckboxes] = useState([
  //   { label: "Tất cả", checked: true },
  //   { label: "Front end", checked: false },
  //   { label: "Back end", checked: false },
  //   { label: "Full-stack", checked: false },
  //   { label: "Mobile", checked: false },
  // ]);

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
    {
      title: "[SCA2] Dự án Portfolio có chế độ sáng / tối",
      description: "Nextjs + Tailwind CSS",
      imageUrl: "/images/sourcecode/sca2/main-sca2.png",
      link: "/sourcecodeDetail/sca2",
    },
    {
      title: "[SCA3] Dự án Portfolio phối màu đẹp mắt",
      description: "Html + Css + Js",
      imageUrl: "/images/sourcecode/sca3/main-sca3.png",
      link: "/sourcecodeDetail/sca3",
    },
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
