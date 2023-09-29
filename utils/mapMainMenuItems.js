import { v4 as uuid } from "uuid";

export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: uuid(),
    destination: menuItem.items.destination?.uri,
    label: menuItem.items.label,
    subMenuItems: (menuItem.subItemsMenu || []).map((subMenuItem) => ({
      id: uuid(),
      destination: subMenuItem.sdestination?.uri,
      label: subMenuItem.slabel,
    })),
  }));
};
