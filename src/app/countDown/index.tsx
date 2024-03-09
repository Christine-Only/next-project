import { useState, useEffect } from 'react';

interface IProps {
  time: number;
  onEnd: () => void;
}
const CountDown = (props: IProps) => {
  const { time, onEnd } = props;
  const [count, setCount] = useState(time);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (count === 0) {
        onEnd();
        return;
      }
      setCount((count) => count - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [count, onEnd]);
  return <div className="w-[116px] ml-2">{count} 秒后重新发送</div>;
};

export default CountDown;
