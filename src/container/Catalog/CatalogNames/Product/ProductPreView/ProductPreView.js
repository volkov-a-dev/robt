import React from 'react';
import classes from './ProductPreView.module.scss';
const productPreView = props => {
    console.warn('props===>', props)
    return (
        <div className={classes["schema-product"]}>
        <div className={classes["schema-product__comparison"]}>
            <input type="checkbox" id="schpcom_1"/>
            <label htmlFor="schpcom_1"></label>
        </div>
        <div className={classes["schema-product__info"]}>
            <div className={classes["schema-product__info-left"]}>
            {/* {
                props.img["200x220"] ? 
            <div className={classes["schema-product__img-wrap"]}>
                <img src={props.img["200x220"]} className={classes["schema-product__img"]} alt=""/>
            </div> : null
            } */}
            </div>
            <div className={classes["schema-product__info-rigth"]}>
            <div className={classes["schema-product__title"]}>
                <a href="/" className={classes["schema-product__link"]}>
                <span>{props.name}</span>
                </a>
            </div>
            <div className={classes["schema-product__description"]}>
                <span>{props.description}</span>
            </div>
            <div className={classes["schema-product__info-feedback"]}>
                <div className="schema-product__stars">
                <a href="/" className="schema-product__stars-link">
                    <span className="schema-product__stars-icon"></span>
                    <span className="schema-product__stars-count">13 отзывов</span>
                </a>
                </div>
                <div className="schema-product__info-additional">
                <a href="" className="">
                    <span>Обсуждение </span>
                    <span>21</span>
                </a>
            </div>
            <div className="schema-product__info-additional">
                <a href="" className="">
                    <span>Description</span>
                    <span>517</span>
                </a>
                </div>
                <a href="/" className="">Video</a>
            </div>
            </div>
        </div>
    </div>
    )
}

export default productPreView;