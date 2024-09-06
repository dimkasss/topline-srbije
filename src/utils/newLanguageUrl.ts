export const getNewURL = (path: string | null): string => {
  if (path == null) {
    return "/";
  }
  if (path?.includes("/sr")) {
    return path?.replace("/sr", "/ru");
  } else {
    return path?.replace("/ru", "/sr");
  }
};
