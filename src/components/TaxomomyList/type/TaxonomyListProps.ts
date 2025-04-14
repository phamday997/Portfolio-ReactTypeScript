export interface TaxonomyListProps<T> {
  loading?: boolean;
  typeList: "normal" | "tag" | "card";
  title?: string;
  linkParams: string;
  data: T[];
  field: keyof T; // key:category or tag,...
  imageField?: keyof T; // optional image field name
}
