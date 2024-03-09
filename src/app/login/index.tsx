import { ChangeEvent, useState } from 'react';
import { Button, Modal } from 'antd';
import CountDown from '../countDown';

interface IProps {
  isShow: boolean;
  onClose: () => void;
}
const Login = (props: IProps) => {
  const { isShow, onClose } = props;
  const [form, setForm] = useState({
    phone: '',
    verify: '',
  });
  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false);
  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleVerifyCodeEnd = () => {
    setIsShowVerifyCode(false);
  };

  if (!isShow) {
    return <></>;
  }
  return (
    <Modal
      width={460}
      title="登录掘金畅享更多权益"
      open={isShow}
      footer={null}
      centered
      onCancel={onClose}
    >
      <div className="mt-8 border-t-1">
        <input
          className="border rounded w-full border-slate-500 h-8 px-2"
          name="phone"
          placeholder="请输入手机号"
          value={form.phone}
          onChange={handleChangeForm}
        />
        <div className="flex mt-4">
          <input
            className="border rounded w-full border-slate-500 h-8 px-2"
            name="verify"
            placeholder="请输入验证码"
            type="text"
            value={form.verify}
            onChange={handleChangeForm}
          />
          <div className="flex items-center justify-center">
            {isShowVerifyCode ? (
              <CountDown time={60} onEnd={handleVerifyCodeEnd} />
            ) : (
              <Button
                className="w-[116px]"
                onClick={() => setIsShowVerifyCode(true)}
              >
                获取验证码
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="my-6">
        <Button className="w-full" type="primary">
          登录
        </Button>
      </div>
      <div>
        <span>其它登录：</span>
        <Button type="link">Github 登录</Button>
      </div>
    </Modal>
  );
};

export default Login;
