import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Body from './body';


import { Sidebody, Wrapper, BodyWrapper } from "./style";

function Main() {
    return (
        <Wrapper>
            <Header></Header>
            <Sidebody>
                <Sidebar/>
                <BodyWrapper>
                    <Body/>
                </BodyWrapper>
            </Sidebody>
        </Wrapper>

    )
}

export default Main;