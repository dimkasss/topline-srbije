export type ParamsType = { locale: "rs" | "ru" };

export interface PageWithParams {
  params: ParamsType;
}

export interface PageWithLangProps {
  params: ParamsType;
  children?: React.ReactNode;
}
