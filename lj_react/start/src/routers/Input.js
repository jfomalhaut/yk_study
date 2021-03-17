import React, { useEffect, useRef, useState } from 'react';

const field = {
	name: '',
	position: '',
	phone: '',
}

function Input() {
	const nameRef = useRef();
	const [data, setData] = useState(field);
	const [list, setList] = useState([]);
	const { name, position, phone } = data;

	const onChangeValue = (ev) => {
		const { target: { value, name } } = ev;
		setData({
			...data,
			[name]: value
		});
	};
	
	const register = (ev) => {
		ev.preventDefault();
		setList([
			...list,
			data
		]);
		setData(field);
	};

	useEffect(() => {
		nameRef.current.focus();
	}, [list]);

	return (
		<div>
			<form onSubmit={register}>
				이름: <input value={name} name="name" onChange={onChangeValue} ref={nameRef} /><br/>
				직책: <input value={position} name="position" onChange={onChangeValue} /><br/>
				전화번호: <input value={phone} name="phone" onChange={onChangeValue} /><br/>
				<button>등록</button>
			</form>
			<ul>
				{list.map((item, idx) => (
					<li key={`PHONEBOOK${idx}`}>
						<div>이름: {item.name}</div>
						<div>직책: {item.position}</div>
						<div>전화번호: {item.phone}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Input;
