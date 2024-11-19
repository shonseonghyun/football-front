import styled from "styled-components";
import CustomInput from "../form/CustomInput";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/api/apiHooks";
import useRememberId from "../../hooks/useRememberId";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { AuthUserInfo } from "../../recoil/AuthUserInfo";

const LoginContainer = styled.div`
    /* background-color: yellow; */
    margin: 0 auto;
    width: 1024px;
    /* height: 100px; */
`;

const AuthLoginContainer = styled.div`
    padding: 20px 40px;
`;

const Button = styled.button`
    padding:10px;
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
`;

const LoginButton = styled(Button)`
    color: #fff;
    background-color: #1570ff;
`;

const KakaoLoginButton = styled(Button)`
    background-color: #fee500;
    color: #181600;
`;

const LoginExtraContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin:20px 0px;
`;

const ExtraItemContainer = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #727f88;
    text-align: center;  
    
`;

const SocialLoginContainer = styled.div`
    border-top: 1px solid #d9e0e6;
    padding-top: 30px;
`;

const RememberIdContainer = styled.div`
    position: relative;
    top: -20px;
`;

const SaveIdInput = styled.input`
    border-radius: 14px;
    background: #1570ff;
    border: 1px solid #1570ff;
`;

const SaveIdText = styled.p`
    display: inline;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    color: #727f88;  
`;

export interface ILoignRegType{
    email:string;
    pwd:string;
}

const rule = {required:"필수 입력 내용입니다"};

const Login = () => {
    const [authUserInfo,setAuthUserInfo] = useRecoilState(AuthUserInfo);
    const {register,handleSubmit,getValues,formState:{errors}}=useForm<ILoignRegType>();
    const location = useLocation();
    const navigate = useNavigate();
    const [isRememberId,onToggle,checkboxRef,doRememberId,rememberId] = useRememberId(false,getValues);
    const [cookie,removeCookie] = useCookies(["accessToken","refreshToken"]);

    
    const onSuccess = (data:any)=>{
        setAuthUserInfo({
            accessToken:cookie.accessToken,
            refreshToken:cookie.refreshToken,
            memberId:data.data.memberId,
            memberNo:data.data.memberNo
            })
            
        const from = location.state?.redirectedFrom?.pathname || "/";
        navigate(from);
    }

    const {mutate} = useLogin(onSuccess);

    const onValid = (data:ILoignRegType)=>{
        doRememberId();
        mutate.mutate(data);
    }

    const onInValid=(e:any)=>{
        doRememberId();
    }

    return (
        <LoginContainer>
            <AuthLoginContainer>
                <form onSubmit={handleSubmit(onValid,onInValid)}>
                    <CustomInput label="이메일" type="text" placeholder="이메일 주소를 입력하세요" register={register("email",rule)} errors={errors} defaultValue={rememberId}/>
                    <CustomInput label="패스워드" type="password" placeholder="비밀번호를 입력하세요" register={register("pwd",rule)} errors={errors} />
                    <RememberIdContainer>
                        <label>
                            <SaveIdInput type="checkbox"
                             ref={checkboxRef}
                             id="rememberId"
                             onChange={onToggle} 
                             checked={isRememberId} />
                            <SaveIdText>
                                아이디 저장
                            </SaveIdText>
                        </label>
                    </RememberIdContainer>
                    <LoginButton>로그인</LoginButton>
                </form>
                <LoginExtraContainer>
                    <ExtraItemContainer style={{marginRight:"20px"}}>
                        <Link to="/accounts/findme">
                            아이디/비밀번호 찾기
                        </Link>
                    </ExtraItemContainer>
                    <ExtraItemContainer>
                        <Link to="/join">
                            회원가입
                        </Link>
                    </ExtraItemContainer>
                </LoginExtraContainer>
                <SocialLoginContainer>
                    <KakaoLoginButton>
                        <img style={{marginRight:"10px"}} src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_kakao.svg" />
                        카카오 로그인
                    </KakaoLoginButton>
                </SocialLoginContainer>
            </AuthLoginContainer>
        </LoginContainer>
    );
};

export default Login;