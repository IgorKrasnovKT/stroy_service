declare module '*.css' {
  const classnames: { [key: string]: string };
  export default classnames;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module "*.module.css";