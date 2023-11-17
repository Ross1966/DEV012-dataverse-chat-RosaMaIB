let ROUTES = {};
let rootElement = '';

export const setRoutes = (newRoutesSet) =>{
    ROUTES = newRoutesSet;
}
export const setRootElement = (newRootElement) => {
    rootElement = newRootElement;
}
const renderView = (pathname, props)=>{
    const root = rootElement;
    root.innerHTML="";

    if(ROUTES[pathname]){
        const componentResultView = ROUTES[pathname](props);
        rootElement.appendChild(componentResultView);
    }else{
        rootElement.appendChild(ROUTES["/error"]())
    }
}

export const navigateTo = (pathname, props ={}) => {
    window.history.pushState(pathname.substring(1), "", window.location.origin + pathname);
    renderView(pathname, props);
}

export const onURLChange = (location) =>{
    navigateTo(location, {})
}
