export const getFullYear = () => {
        return new Date().getFullYear();
}

export const getFooterCopy = (isIndex) => {
    return isIndex? "Holberton School" : "Holberton School main dashboard";

}

export const getLatestNotification = () => {
    return "<strong>Urgent Requirement</strong> - complete by EOD";
}
