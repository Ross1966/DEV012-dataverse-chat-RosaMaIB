let ROUTES = {};
let rootElement = '';

export const setRoutes = (newRoutesSet) =>{
    ROUTES = newRoutesSet;
}
export const setRootElement = (newRootElement) => {
    rootElement = newRootElement;
}
const renderView = (pathname, props = {})=>{
    const root = rootElement;
    root.innerHTML= '';
    //console.log(renderView)
    
    if(ROUTES[pathname]){
        const componentResultView = ROUTES[pathname](props);
        //console.log(ROUTES[pathname]) 
        root.appendChild(componentResultView);
    }else{
        root.appendChild(ROUTES["/Error"](props))
        //console.log(ROUTES)
    }
}

export const navigateTo = (pathname, props = {}) => {
    const urlVisitada = window.location.origin + pathname;
    window.history.pushState('',"", urlVisitada);
    console.log(urlVisitada)
    renderView(pathname, props);
}

export const onURLChange = (location) =>{
    navigateTo(location)
   
}
