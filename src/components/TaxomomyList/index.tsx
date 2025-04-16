import { Link } from "react-router-dom";
import {
  getArrayFromString,
  getCapitalizeWords,
  getPlainText,
} from "../../helper";
import { AnimationPD } from "../AnimationPD";
import { scroller } from "react-scroll";
import "./TaxonomyList.scss";
import { TaxonomyListProps, TaxonomyWithImage } from "./type";
import { useCallback } from "react";
import { CardTaxonomy } from "./Card/CardTaxonomy";

export const TaxonomyList = <T,>({
  loading,
  typeList = "normal",
  title,
  linkParams, // Noted: "/blog/taxonomy?cat or "/blog/taxonomy?tag" depend on your Router setup
  data,
  field,
  imageField = "imageTaxonomy" as keyof T,
}: TaxonomyListProps<T>) => {
  const taxonomyImageMap = new Map<string, TaxonomyWithImage>();

  data.forEach((item: T) => {
    getArrayFromString(item[field], false).forEach((category) => {
      const taxonomyStr = String(category);
      if (!taxonomyImageMap.has(taxonomyStr)) {
        taxonomyImageMap.set(taxonomyStr, {
          name: taxonomyStr,
          image: item[imageField] ? String(item[imageField]) : undefined,
        });
      }
    });
  });

  const uniqueCategoryImagePairs: TaxonomyWithImage[] = Array.from(
    taxonomyImageMap.values()
  );

  const handleLinkClick = useCallback((): void => {
    scroller.scrollTo("top", {
      duration: 200,
      smooth: true,
      offset: -100,
    });
  }, []);

  return (
    <div className={`taxonomy-list-wrapper type-${typeList}`}>
      {typeList !== "card" ? (
        <>
          {title && (
            <AnimationPD animation="fadeIn" duration={1.2} delayBase={0.2}>
              <h2 className="title-taxonomy">{title}</h2>
            </AnimationPD>
          )}
          <ul
            className={`taxonomy-list taxonomy-list--${getPlainText(
              title ?? ""
            )}`}
          >
            {uniqueCategoryImagePairs.length > 0 &&
              uniqueCategoryImagePairs.map((item, index: number) => (
                <li className="item-taxonomy" key={index}>
                  <AnimationPD
                    animation="fadeInUp"
                    delayBase={0.3}
                    duration={1.2}
                    index={index}
                    totalItem={uniqueCategoryImagePairs.length}
                  >
                    <Link
                      to={`${linkParams}=${item.name.toLowerCase()}`}
                      onClick={handleLinkClick}
                    >
                      {getCapitalizeWords(item.name)}
                    </Link>
                  </AnimationPD>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <>
          <div className="taxonomy-list-card">
            {uniqueCategoryImagePairs.length > 0 &&
              uniqueCategoryImagePairs.map(
                (item: TaxonomyWithImage, index: number) => (
                  <div className="item-taxonomy-card" key={index}>
                    <AnimationPD
                      animation="fadeIn"
                      duration={1.2}
                      delayBase={0.2}
                      index={index}
                      totalItem={uniqueCategoryImagePairs.length}
                    >
                      <CardTaxonomy
                        linkParams={linkParams}
                        data={item}
                        handleClick={handleLinkClick}
                      />
                    </AnimationPD>
                  </div>
                )
              )}
          </div>
          {loading && (
            <div
              className="d-flex justify-content-center align-center"
              style={{
                alignItems: "center",
                height: "auto",
                minHeight: "200px",
              }}
            >
              Loading...
            </div>
          )}
        </>
      )}
    </div>
  );
};
