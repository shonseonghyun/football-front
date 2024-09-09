import styled from 'styled-components';
import BallIcon from "../../icon/BallIcon";
import BeginnerIcon from "../../icon/BeginnerIcon";
import ChallengeIcon from "../../icon/ChallengeIcon";
import EarlyBirdIcon from '../../icon/EarlyBirdIcon';
import SemiProIcon from "../../icon/SemiProIcon";

const QuickMenuContainer = styled.div`
    padding: 15px 0;
    margin: 0 auto;
    max-width: 1024px;
`;

const QuickMenuItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Span = styled.span`
    display: inline-block;
    width: 40px;
    text-align: center;
`;

const Text = styled.p`
    font-size: 12px;
    margin-top: 5px;
`;

const QuickMenu = () => {
    return (
        <QuickMenuContainer>
                <QuickMenuItem>
                    <Span>
                        <EarlyBirdIcon />
                        <Text>
                            얼리버드
                        </Text>
                    </Span>

                    <Span>
                        <BeginnerIcon />
                        <Text>
                            비기너
                        </Text>
                    </Span>

                    <Span>
                        <SemiProIcon />
                        <Text>
                            세미프로
                        </Text>
                    </Span>

                    <Span>
                        <ChallengeIcon />
                        <Text>
                            챌린지
                        </Text>
                    </Span>

                    <Span>
                        <BallIcon />
                        <Text>
                            축구
                        </Text>
                    </Span>
                </QuickMenuItem>
            </QuickMenuContainer>
    );
};

export default QuickMenu;