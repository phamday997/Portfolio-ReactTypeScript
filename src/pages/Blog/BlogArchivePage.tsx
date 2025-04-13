import React from "react";
import { BlogPageBase } from "./BlogPageBase";
import { BlogList } from "../../components";
import { pn, pnm1 } from "../../components/BlogList/type";
import { DataBreadcrumb } from "../../components/HeroHeader/types";
import { useSearchParams } from "react-router-dom";
import { getCapitalizeWords } from "../../helper";

interface BlogArchivePageProps {
  typeTaxonomy: string;
  taxonomyName: string;
  dataBreadcrumb: DataBreadcrumb[];
}

export const BlogArchivePage: React.FC<BlogArchivePageProps> = ({
  typeTaxonomy,
  taxonomyName,
  dataBreadcrumb,
}) => {
  const [searchParams] = useSearchParams();
  const taxonomyParam = searchParams.get(taxonomyName);
  const title = `${getCapitalizeWords(
    typeTaxonomy ?? ""
  )}: ${getCapitalizeWords(taxonomyParam ?? "")}`;

  return (
    <BlogPageBase titlePage={title} dataBreadcrumb={dataBreadcrumb}>
      <BlogList
        typeCard="vertical"
        sort={true}
        taxonomyParams={taxonomyParam ?? ""}
        showLayoutSeting={true}
        pagination={true}
        showExcerpt={true}
        columList={3}
        postPerPage={pnm1(9)}
        spaceCol={pn(25)}
        spaceRow={pn(35)}
        sortOrder="latest"
      />
    </BlogPageBase>
  );
};
