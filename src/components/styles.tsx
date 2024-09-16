
const styles = {
    flexColCenter: "flex flex-col items-center",
    mainClass: "flex flex-col items-center p-20 sm:px-1 sm:py-4",
    
};

const addSpaceToStyles = (styles: { [key: string]: string }) => {
    return Object.fromEntries(
        Object.entries(styles).map(([key, value]) => [key, value + " "])
    );
};


const updatedStyles = addSpaceToStyles(styles);

export default updatedStyles;