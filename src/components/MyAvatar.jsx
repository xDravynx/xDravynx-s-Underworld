import React from "react";

const MyAvatar = (props) => {
    return (
        <img
            src={props.AvatarIcon}
            alt={props.AvatarAlt || "User Profile"}
            style={styles.avatar}
        />
    );
}

export default MyAvatar;

const styles = {
    avatar: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid #0077b6",
        cursor: "pointer",
    }
};
