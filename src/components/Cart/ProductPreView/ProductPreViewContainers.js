import React from "react";
import classes from "./ProductPreView.module.scss";
// import CompareAction from '../../../Сompare/CompareAction/CompareAction';
import CompareCheckboxContainer from '../../../containers/CompareCheckbox/CompareCheckboxContainer';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const ProductPreViewContainers = props => {
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
    // console.log(props)
    // console.log(props.match.url + props["html_url"])
    let urlProduct = props.match.url + props["html_url"];
    // console.log('urlProduct', urlProduct)

    return (
        <div className={classes["schema-product"]}>
            <div className={classes["schema-product__comparison"]}>
                <CompareCheckboxContainer {...props} />
                
            </div>
            <div className={classes["schema-product__info"]}>
                <div className={classes["schema-product__info-left"]}>{img}</div>
                <div className={classes["schema-product__info-rigth"]}>
                <div className={classes["schema-product__title"]}>
                    <Link to={urlProduct + "#" + props.id} className={classes["schema-product__link"]}>{props.name}</Link>
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

export default withRouter(ProductPreViewContainers);
