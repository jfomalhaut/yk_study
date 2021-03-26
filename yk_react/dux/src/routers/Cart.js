import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CartAction } from '../actions';

const nf = new Intl.NumberFormat();

function Cart(){
    const [list, setList] = useState([]);
    const dispatch = useDispatch();

    const cart = useSelector(({ cart }) => cart.cart );

    const removeToCart = (item) => {
        dispatch(CartAction.removeToCart(item));
    };

    const addToCart = (item) => {
        dispatch(CartAction.addToCart(item));
    };

    const deleteToCart = (item) => {
        dispatch(CartAction.deleteToCart(item));
    };

    const onCheck = (item) => {
        dispatch(CartAction.checkCartItem(item));
    };

    const checkAll = () => {
        const flag = cart.some(item => !item.check );
        dispatch(CartAction.checkAll());
    }

    // if(cart.length > 0 ){

    // }
    // const CartContent = 
    //     <ul>
    //         {cart.map(item => (
    //             <li>
    //                 <span>{item.name}</span>
    //                 <span>{item.count}</span>
    //             </li>
    //         ))}
    //     </ul>;
        
    return (
        <CartContainer>
            <div>
                <button onClick={checkAll()}>전체선택</button>
                <button>선택삭제</button>
            </div>
            <div>
                {cart.length >  0 ? (
                    <ul>
                        {cart.map(item => (
                            <li>
                                <div>
                                    <div className={'checkWrap'}>
                                        <span className={item.check ? 'active' : ''} onClick={() => onCheck(item)}>{ item.check === true ? 'true' : 'false' }</span>
                                    </div>
                                    <img src={item.src} />
                                    <div className={'nameWrap'}><span>{item.name}</span></div>
                                    <div className={'countWrap'}>
                                        <button disabled={item.count === 1 ? true : false} onClick={() => removeToCart(item)}> - </button>
                                        <input value={item.count} readOnly />
                                        <button onClick={() => addToCart(item)}> + </button>
                                    </div>
                                    <div className={'priceWrap'}>
                                        <span>{nf.format(item.count * item.price)}원</span>
                                    </div>
                                    <div className={'deleteWrap'}>
                                        <span onClick={() => deleteToCart(item)}> X </span>
                                    </div>
                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>장바구니가 비어있습니다</div>
                )}
            </div>
        </CartContainer>
    );

}

export default Cart;

const CartContainer = styled.main`
    ul {
        
        li{
            padding: 20px;
            display:flex;
            border-bottom:1px solid #ccc;
            font-size: 20px;
            div{
                
                width:100%;
                div{ float:left; padding: 10px; margin-top:5%}
                img{
                    height:180px; 
                    float: left; 
                }
                .checkWrap{
                    width:50px;
                    span{ cursor:pointer; }
                }
                .nameWrap{
                    width:330px;
                }
                .priceWrap{
                    width: 200px;
                }
                .countWrap{
                    width:200px;
                    button{ padding: 5px 10px;}
                    input{ padding: 5px 10px; text-align: center; width: 35px;}
                }
                .deleteWrap{
                    width:100px;
                    span{ cursor:pointer; border: 1px solid; border-radius:50%; padding: 5px 15px}
                }
            }
        }
    }

`;