import styles from './Auth.module.css';
import {Button, Checkbox, Form, Input, message} from "antd";
import {useContext, useEffect, useRef, useState} from "react";
import {AuthContext} from "../../../../providers/AuthProvider";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LOGIN_URL = '/login'

const Auth = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef()
    const errRef = useRef()
    const navigate = useNavigate();

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);
    useEffect(() => {
        setErrMsg('')
    }, [login, password]);


    const handleSubmit = async (values ) => {
        console.log(values.login, values.password)
        //             используем заглушку
        const mockResponse ={
            accessToken : 'mockAccessToken',
            roles: ['user'],
        }
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
        //     имитируем успешную авторизацию
            setAuth({login: values.login, password: values.password, ...mockResponse});
            setLogin('')
            setPassword('')
            setSuccess(true)
            message.success('Успешная авторизация')
            navigate('/dashboard')
        }catch(err){
            setErrMsg('Ошибка авторизации')

            message.error(err.message)
        }

        // запрос к беку
        // setLogin('');
        // setPassword('');
        // setSuccess(true);
        // try {
        //             const response = await axios.post(LOGIN_URL,
        //                 JSON.stringify({ login: values.login, password: values.password }),
        //                 {
        //                     headers: { 'Content-Type': 'application/json' },
        //                     withCredentials: true
        //                 }
        //             );
        //             console.log(JSON.stringify(response?.data));
        //             const accessToken = response?.data?.accessToken;
        //             const roles = response?.data?.roles;
        //             setAuth({ login: values.login, password: values.password, roles, accessToken });
        //             setLogin('');
        //             setPassword('');
        //             setSuccess(true);
        //             message.success('Успешная авторизация');
        //         } catch (err) {
        //             if (!err.response) {
        //                 setErrMsg('нет ответа от сервера');
        //
        //             } else if (err.response?.status === 400) {
        //                 setErrMsg("нет имени или пароля");
        //             } else if (err.response?.status === 401) {
        //                 setErrMsg('несанкционированный');
        //             } else {
        //                 setErrMsg('ошибка авторизации');
        //             }
        //             errRef.current.focus();
        //             message.error(errMsg);
        //         }
    }

    return (
        <>

            <img src={'Tatneft-Logo.wine.svg'} className={styles.logo}/>
            <div className={styles.form}>


                <h2>Авторизация</h2>

                <Form onFinish={handleSubmit}>
                    <Form.Item
                        className={styles.login}
                        layout={'vertical'}
                        label='login'
                        name='login'
                        gap={'20px'}
                        rules={[{

                            message: 'Введите Логин'
                        }]}>
                        <Input ref={userRef} value={login}/>

                    </Form.Item>
                    <Form.Item
                        className={styles.password}
                        layout={'vertical'}
                        label='password'
                        name='password'
                        rules={[{

                            message: 'Введите пароль'
                        }]}>
                        <Input.Password value={password}
                        />

                    </Form.Item>
                    <Form.Item name='remember' valuePropName='checked' label={null}>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>

                </Form>
            </div>
        </>
    )
}
export default Auth