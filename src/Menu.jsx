import MenuItems from "./MenuItems";

const Menu = ({ menuItems }) => {
    const renderedMenu = menuItems.map((menuItem) => {
        return <MenuItems key={menuItem.id} {...menuItem} />;
    });
    return <div className="section-center">{renderedMenu}</div>;
};

export default Menu;
