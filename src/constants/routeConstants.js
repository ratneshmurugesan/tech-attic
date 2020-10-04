export const routeEnums = {
    timeSheetChange: '/timeSheet/change/',
};

export const generateURL = (module, params = "") => {
    return routeEnums[module];
};