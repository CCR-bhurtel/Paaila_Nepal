import React from "react";

function SectionTitle({title}) {
  return (
    <div className="sectiontitle flex items-center justify-center flex-col">
          <span className="text-xl text-Apple font-bold">{title}</span>
      <div className="w-[4rem] h-[.2rem] bg-Apple"></div>
    </div>
  );
}

export default SectionTitle;
