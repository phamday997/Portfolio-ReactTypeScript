import React, { useCallback, useMemo, CSSProperties } from "react";
import {
  getArrayFromString,
  getCapitalizeWords,
  getPlainText,
} from "../../helper";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";
import "./TaxonomyListSingle.scss";

interface TaxonomyListSingleProps {
  label: string;
  dataTax: string | string[];
  linkParams: string;
  style?: CSSProperties;
}
export const TaxonomyListSingle: React.FC<TaxonomyListSingleProps> = ({
  label,
  dataTax,
  linkParams, // Noted: "/blog/taxonomy?cat or "/blog/taxonomy?tag" depend on your Router setup
  style,
}) => {
  const taxLists = useMemo(() => getArrayFromString(dataTax, false), [dataTax]);
  const handleLinkClick = useCallback((): void => {
    scroller.scrollTo("top", {
      duration: 200,
      smooth: true,
      offset: -100,
    });
  }, []);
  return (
    <>
      {taxLists.length > 0 && (
        <div className="taxs-wrapper" style={style}>
          <div className="label">{label}</div>
          <ul className="taxs-list">
            {taxLists.map((tag: string, index: number) => (
              <li className="tax" key={index}>
                <Link
                  to={`${linkParams}=${getPlainText(tag).toLowerCase()}`}
                  onClick={handleLinkClick}
                >
                  {getCapitalizeWords(tag)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
