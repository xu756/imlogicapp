import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '@/constants';
import { accountLogin, getUserAccess, mobileLogin } from '@/services';

import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Tabs, message, theme } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useModel, useNavigate } from '@umijs/max';
import { useCookieState, useMount } from 'ahooks';
import styles from './index.less';
type LoginType = 'mobile' | 'account';

export default () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [form] = ProForm.useForm();
  const [loginType, setLoginType] = useState<LoginType>('account');
  const { setInitialState } = useModel('@@initialState');
  const sessionId = localStorage.getItem('session_id');
  const [jwt, setJwt] = useCookieState('ImlogicToken');
  useMount(() => {
    if (!sessionId) {
      localStorage.setItem('session_id', uuidv4());
    }
    if (jwt && jwt.length > 0) {
      navigate('/');
    }
  });
  // 获取用户权限
  const updateUserAccess = async () => {
    try {
      const res = await getUserAccess();
      setInitialState({
        access: res,
      });
      message.success('登录成功！');
      navigate('/');
    } catch (e) {
      message.error('获取用户权限失败！');
    }
  };

  // 登录
  const handleLogin = async (values: API.LoginReq) => {
    const hour = values.autoLogin ? 3 * 24 : 3;
    values.session_id = String(sessionId);
    if (loginType === 'account') {
      try {
        const res = await accountLogin(values);
        setJwt(() => res.token, {
          path: location.origin,
          expires: (() => new Date(+new Date() + hour * 60 * 60 * 1000))(),
        });
        // updateUserAccess();
      } catch (e) {
        form.resetFields();
      }
    } else {
      try {
        const res = await mobileLogin(values);
        setJwt(() => res.token, {
          path: location.origin,
          expires: (() => new Date(+new Date() + hour * 60 * 60 * 1000))(),
        });
        // updateUserAccess();
      } catch (e) {
        form.resetFields();
      }
    }
  };
  return (
    <div className={styles.content}>
      <div className={styles.login}>
        <LoginForm<API.LoginReq>
          form={form}
          initialValues={{
            autoLogin: true,
            username: 'admin',
            password: '123456',
          }}
          logo="https://cos.imlogic.cn/appserver/images/logo.svg"
          title={DEFAULT_TITLE}
          onFinish={handleLogin}
          onFinishFailed={() => {
            message.error('请检查登录信息！');
          }}
          subTitle={DEFAULT_DESCRIPTION}
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
            <Tabs.TabPane key={'mobile'} tab={'手机号登录'} />
          </Tabs>
          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'用户名: admin or user'}
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                  strengthText: '密码强度：弱、中、强',

                  statusRender: (value) => {
                    const getStatus = () => {
                      if (value && value.length > 12) {
                        return 'ok';
                      }
                      if (value && value.length > 6) {
                        return 'pass';
                      }
                      return 'poor';
                    };
                    const status = getStatus();
                    if (status === 'pass') {
                      return (
                        <div style={{ color: token.colorWarning }}>
                          强度：中
                        </div>
                      );
                    }
                    if (status === 'ok') {
                      return (
                        <div style={{ color: token.colorSuccess }}>
                          强度：强
                        </div>
                      );
                    }
                    return (
                      <div style={{ color: token.colorError }}>强度：弱</div>
                    );
                  },
                }}
                placeholder={'密码: ant.design'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'mobile' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                placeholder={'手机号'}
                rules={[
                  {
                    required: true,
                    message: '请输入手机号！',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '手机号格式错误！',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'请输入验证码'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'获取验证码'}`;
                  }
                  return '获取验证码';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success('获取验证码成功！验证码为：1234');
                }}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              3天自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div>
        </LoginForm>
      </div>
    </div>
  );
};
