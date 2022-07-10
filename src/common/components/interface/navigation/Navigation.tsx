import { NavigationProps } from "../../../types/interface/navigation";
import styles from "./_styles/navigation.module.scss";
const Navigation: React.FC<NavigationProps> = (props) => {
    return <div className={styles.nav_bar}>{props.children}</div>;
};

export default Navigation;
