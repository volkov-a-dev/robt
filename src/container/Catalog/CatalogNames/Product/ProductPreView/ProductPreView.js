import React from "react";
import classes from "./ProductPreView.module.scss";
const productPreView = props => {
    console.warn("props===>", props);
    let img;

    if (props.images) {
        img = (
        <div className={classes["schema-product__img-wrap"]}>
            <img
            src={props.images.header}
            className={classes["schema-product__img"]}
            alt=""
            />
        </div>
        );
    }
    return (
        <div className={classes["schema-product"]}>
        <div className={classes["schema-product__comparison"]}>
            <input type="checkbox" id="schpcom_1" />
            <label htmlFor="schpcom_1" />
        </div>
        <div className={classes["schema-product__info"]}>
            <div className={classes["schema-product__info-left"]}>{img}</div>
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
                    <span className="schema-product__stars-icon" />
                    <span className="schema-product__stars-count">{props.reviews.rating} отзывов</span>
                </a>
                </div>
                <div className="schema-product__info-additional">
                <a href={props.reviews.html_url} className="">
                    <span> Обсуждение </span>
                    <span>{props.reviews.count}</span>
                </a>
                </div>
                <div className="schema-product__info-additional">
                {/* <a href="" className="">
                    <span>Description</span>
                    <span>517</span>
                </a> */}
                </div>
                <a href="/" className="">
                Video
                </a>
            </div>
            </div>
        </div>
        <div className={classes["schema-product__controls"]}>
            <div className={classes["schema-product__price"]}>от {props.prices.min}</div>
            <div className={classes["schema-product__shops"]}>
                <a href="/">{props.prices.offers.count ? props.prices.offers.count : null} предложений</a>
            </div>
        </div>
        </div>
    );
};

export default productPreView;
