import React from "react";
import { BlogBase } from "./BlogBase";
import { BlogList } from "../../components";
import { pn, pnm1 } from "../../components/BlogList/type";
import { DataBreadcrumb } from "../../components/HeroHeader/types";
import { useSearchParams } from "react-router-dom";
import { getCapitalizeWords } from "../../helper";

interface BlogArchivePageProps {
  typeTaxonomy: string;
  taxonomyParam: string;
  dataBreadcrumb: DataBreadcrumb[];
}

export const BlogArchive: React.FC<BlogArchivePageProps> = ({
  typeTaxonomy,
  taxonomyParam,
  dataBreadcrumb,
}) => {
  const title = `${getCapitalizeWords(
    typeTaxonomy ?? ""
  )}: ${getCapitalizeWords(taxonomyParam ?? "")}`;

  return (
    <BlogBase titlePage={title} dataBreadcrumb={dataBreadcrumb}>
      <BlogList
        typeCard="vertical"
        sort={true}
        taxonomyParams={taxonomyParam ?? ""}
        showLayoutSeting={true}
        pagination={true}
        showExcerpt={true}
        showTag={true}
        columList={3}
        postPerPage={pnm1(9)}
        spaceCol={pn(25)}
        spaceRow={pn(35)}
        sortOrder="latest"
      />
    </BlogBase>
  );
};
