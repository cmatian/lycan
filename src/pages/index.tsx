import type { NextPage } from "next";
import Navigation from "../common/components/interface/navigation/Navigation";
import NavItem from "../common/components/interface/navigation/NavItem";
const Home: NextPage = () => {
    return (
        <div>
            <Navigation>
                <NavItem title="Home" href="/" />
                <NavItem title="Login" href="/Login" />
            </Navigation>
        </div>
    );
};

export default Home;
