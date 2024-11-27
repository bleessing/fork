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
        <div className={styles.form}>
        <div>
            <img src={'Tatneft-Logo.wine.svg'}/>
        </div>

       <Form onFinish={handleSubmit}>
           <Form.Item
           label='login'
           name='login'
           rules={[{

               message: 'Введите Логин'
           }]}>
               <Input  ref={userRef} value={login} />

           </Form.Item>
           <Form.Item
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
           <Form.Item label={null}>
               <Button type="primary" htmlType="submit" >
                   Войти
               </Button >
           </Form.Item>
       </Form>
        </div>
    )
}
export default Auth