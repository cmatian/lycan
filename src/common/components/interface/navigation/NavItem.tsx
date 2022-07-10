import Link from "next/link";
import { NavItemProps } from "../../../types/interface/navigation";
import styles from "./_styles/nav_item.module.scss";

const NavItem: React.FC<NavItemProps> = (props) => {
    return (
        <Link href={props.href}>
            <a className={styles.nav_item}>{props.title}</a>
        </Link>
    );
};

export default NavItem;
