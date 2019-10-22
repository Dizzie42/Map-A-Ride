import { useState } from "react";

export default () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return {
    openMenu,
    handleOpenMenu
  };
};
