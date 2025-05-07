/** 파일 생성자 : 임성준
 * 임성준 : 프론트엔드 개발
 * 
 * 이석재
 *   - 로그인 기능 구현완료
 *   - 로그인 시 쿠키 정보 추가
 */

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import Swal from 'sweetalert2';
import styled from 'styled-components'


const MemberLogin = () => {
    // 쿠키(세션 쿠키)
    const [cookies, setCookie] = useCookies(['user']);

    // 상태관리
    const [memberID, setMemberID] = useState('');
    const [memberPW, setMemberPW] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({ memberID: '', memberPW: '' });

    // 핸들러
    const handleIDChange = (event) => {
        setMemberID(event.target.value);
    };
    const handlePWChange = (event) => {
        setMemberPW(event.target.value);
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    };
    // 로그인 처리 핸들러
    const handleLogin = async (event) => {
        event.preventDefault();
        // 유효성 검사
        if (validate()) {
            const loginData = {
                memberID,
                memberPW,
            };
            // 로그인 처리
            try {
                const response = await fetch('/api/member/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginData),
                });
                // 로그인 성공시 쿠키 설정 후 리다이렉트
                if (response.ok) {
                    const result = await response.json();
                    setCookie('user', memberID, { path: '/' });
                    setCookie('userType', result.userType, { path: '/' });
                    setCookie('userName', result.userName, { path: '/' });
                    window.location.href = '/';
                // 탈퇴한 계정인 경우
                } else if (response.status === 403) {
                    Swal.fire({
                        title: '로그인 실패',
                        text: '해당 계정은 탈퇴(비활성화) 상태입니다. 관리자에게 문의하십시오.',
                        icon: 'error',
                        confirmButtonText: '확인'
                    });
                // 아이디, 비밀번호 오류인 경우
                } else {
                    Swal.fire({
                        title: '로그인 실패',
                        text: '아이디 또는 비밀번호가 올바르지 않습니다.',
                        icon: 'error',
                        confirmButtonText: '확인'
                    });
                }
            // 서버 오류인 경우
            } catch (error) {
                Swal.fire({
                    title: '서버 오류',
                    text: '서버 오류가 발생했습니다. 나중에 다시 시도해주세요.',
                    icon: 'error',
                    confirmButtonText: '확인'
                });
            }
        }
    };
    // 유효성 검사 핸들러
    const validate = () => {
        let tempErrors = {};

        if (!memberID) tempErrors.memberID = "아이디를 입력하세요.";
        if (!memberPW) tempErrors.memberPW = "비밀번호를 입력하세요.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // useEffect
    // 쿠키가 존재하면 루트 경로로 리다이렉트
    useEffect(() => {
        if (cookies.user) {
            window.location.href = '/';
        }
    }, [cookies]);

    return (
        <div
            // action=""
            // method="post"
        >
            <div className='content-title'>로그인</div>
            <MemberJoinContent>
                <FormControl>
                    <div>
                        <TextField className='form-item' variant="filled" id="memberID" name="memberID" placeholder='아이디를 입력하세요' label='ID' value={memberID} onChange={handleIDChange} error={!!errors.memberID} helperText={errors.memberID} />
                    </div>
                    <div>
                        <TextField
                            className='form-item'
                            variant="filled"
                            type={showPassword ? 'text' : 'password'}
                            id="memberPW"
                            name="memberPW"
                            placeholder='비밀번호를 입력하세요'
                            value={memberPW}
                            onChange={handlePWChange}
                            error={!!errors.memberPW}
                            helperText={errors.memberPW}
                            InputProps={{
                                endAdornment:
                                    <InputAdornment style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            style={{padding: '0px', marginTop: '5px'}}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                            }}
                        />
                    </div>
                    <JoinButton type='submit' onClick={handleLogin}>로그인</JoinButton>
                </FormControl>
            </MemberJoinContent>
        </div>
    )
}

const MemberJoinContent = styled.div`
    width: 100%;
    height: 100%;
    
    div {
        width: 100%;
        margin: 7px 0;
        padding: 0 1rem;
        background-color: var(--sub-opacity-color);
        border-radius: 1rem;

        &:hover {
            background-color: var(--sub-opacity-color);
        }
    }
`

const JoinButton = styled.button`
    width: 100%;
    border-radius: 1rem;
    color: var(--sub-color);
    border: none;
    padding: 1rem;
    font-size: 1.5rem;
    background: var(--main-color);
    box-shadow: 2px 2px 4px #d9d9d9,
                -2px -2px 4px #ffffff;
    &:hover {
        box-shadow: inset 2px 2px 4px #0d214e,
                    inset -2px -2px 4px #112d6a;
        cursor: pointer;
        color: var(--font-yellow-color);
    }
`

export default MemberLogin