import React from "react";
import { BlogList } from "../BlogList";
import { pn, pnm1 } from "../BlogList/type";
import { SidebarBase } from "./SidebarBase";

export const SidebarBlog: React.FC<{ excludeIds?: number[] }> = ({
  excludeIds,
}) => {
  return (
    <SidebarBase>
      <BlogList
        key={excludeIds?.join("-") ?? "no-exclude"} // A clean trick to force React to fully remount a component.
        excludeIds={excludeIds}
        showDate={true}
        showCat={false}
        typeCard="horizontal"
        search={true}
        spaceRow={pn(30)}
        spaceCol={pn(20)}
        columList={1}
        sortOrder="latest"
        postPerPage={pnm1(4)}
      />
    </SidebarBase>
  );
};
