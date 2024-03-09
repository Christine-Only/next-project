'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from 'antd';
import Login from '../login';

const NAVBAR_LIST = [
  {
    href: '/',
    title: '首页',
  },
  {
    href: '/pins',
    title: '沸点',
  },
  {
    href: '/labels',
    title: '标签',
  },
];
export default function Navbar() {
  const pathname = usePathname();
  const [isShowLogin, setIsShowLogin] = useState(false);
  const handleGotoEditorPage = () => {};
  const handleClose = () => {
    setIsShowLogin(false);
  };
  return (
    <div className="flex items-center justify-center h-20 bg-cyan-500 shadow-lg shadow-cyan-500/50">
      <div className="text-3xl mr-16">BLOG</div>
      <div>
        {NAVBAR_LIST.map((item) => (
          <Link
            className={`px-4 hover:text-blue-500 transition duration-300 pathname ${
              pathname === item.href ? 'text-cyan-600' : ''
            } `}
            key={item.title}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <section>
        <Button onClick={handleGotoEditorPage} className="mr-8 ml-64">
          写文章
        </Button>
        <Button onClick={() => setIsShowLogin(true)} type="primary">
          登录
        </Button>
      </section>
      <Login isShow={isShowLogin} onClose={handleClose}></Login>
    </div>
  );
}
