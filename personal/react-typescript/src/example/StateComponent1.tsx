import { useState } from 'react';

export const StateComponent1 = () => {
    const [message, setMessage] = useState('문자를 입력해라');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    return (
        <div>
            <input onChange={onChange} />
            <p>{message}</p>
        </div>
    )
}