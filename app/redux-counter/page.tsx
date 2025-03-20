'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { increment, decrement, setCount } from '@/store/counterSlice';
import { useState } from 'react';

const Page = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>เพิ่ม</button>
            <button onClick={() => dispatch(decrement())}>ลด</button>
            <br />
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Set Count"
            />
            <button onClick={() => dispatch(setCount(Number(inputValue)))}>ตั้งค่า</button>
        </div>
    );
};

export default Page;
