import { Link } from "react-router-dom";
import { getCapitalizeWords, getPlainText } from "../../helper";
import "./TaxonomyList.scss";
import { AnimationPD } from "../AnimationPD";

interface TaxonomyListProps<T> {
  typeList: "normal" | "tag";
  title?: string;
  linkParams: string;
  data: T[];
  field: keyof T;
}

export const TaxonomyList = <T,>({
  typeList = "normal",
  title,
  linkParams, // Noted: "/blog/taxonomy?cat or "/blog/taxonomy?tag" depend on your Router setup
  data,
  field,
}: TaxonomyListProps<T>) => {
  const uniqueValues: string[] = [
    ...new Set(data.map((item) => String(item[field]))),
  ];

  return (
    <AnimationPD
      animation="fadeIn"
      delayBase={0.2}
      duration={1.2}
      classElement="taxonomy-list-wrapper"
    >
      {title && <h2 className="title-taxonomy">{title}</h2>}
      <ul
        className={`taxonomy-list type-${typeList} taxonomy-list--${getPlainText(
          title ?? ""
        )}`}
      >
        {uniqueValues.length > 0 &&
          uniqueValues.map((value, index: number) => (
            <li className="item-taxonomy" key={index}>
              <Link to={`${linkParams}=${value.toLowerCase()}`}>
                {getCapitalizeWords(value)}
              </Link>
            </li>
          ))}
      </ul>
    </AnimationPD>
  );
};
