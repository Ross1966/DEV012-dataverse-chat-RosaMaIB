let ROUTES = {};
let rootElement = "";

export const setRoutes = (newRoutesSet) => {
  ROUTES = newRoutesSet;
};
export const setRootElement = (newRootElement) => {
  rootElement = newRootElement;
};
const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = "";

  if (ROUTES[pathname]) {
    const componentResultView = ROUTES[pathname](props);
    root.appendChild(componentResultView);
  } else {
    root.appendChild(ROUTES["/Error"](props));
  }
};

export const navigateTo = (pathname, props = {}) => {
  const urlVisitada = window.location.origin + pathname;
  window.history.pushState({}, "", urlVisitada);
  
  renderView(pathname, props);
};

export const onURLChange = () => {
  const pathname = window.location.pathname;
  renderView(pathname);
};

