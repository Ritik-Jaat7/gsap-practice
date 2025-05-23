import React from "react";
const Icons = ({ icon, className, stroke, fill }) => {
    const iconList = {
        rightArrow: (
            <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.8586 6.14142C29.9367 6.06332 29.9367 5.93668 29.8586 5.85858L24.3414 0.341421C24.2154 0.215428 24 0.304662 24 0.482843V4.3C24 4.41046 23.9105 4.5 23.8 4.5H0.200001C0.0895443 4.5 0 4.58954 0 4.7V7.3C0 7.41046 0.0895431 7.5 0.2 7.5H23.8C23.9105 7.5 24 7.58954 24 7.7V11.5172C24 11.6953 24.2154 11.7846 24.3414 11.6586L29.8586 6.14142Z" fill="#9E3040" />
            </svg>

        ),
        downIcon: (
            <svg width="10" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L0 2.5L2.66792 0L8 5L13.3321 0L16 2.5L8 10Z" fill="#14AE5C" />
            </svg>

        ),
    };
    const addClassName = (icon) => {
        return React.cloneElement(icon, {
            className: (className || "") + " custom-class",
        });
    };
    const iconsNew = Object.fromEntries(
        Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)])
    );
    return iconsNew[icon] || null;
};

export default Icons;
