import React from "react";

export const User = ({ user, onDelete }) => {
  return (
    <div id="user-item-item">
      {user.name}
      <button id="user-delete" onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
};
