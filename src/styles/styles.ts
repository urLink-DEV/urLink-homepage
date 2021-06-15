import { createGlobalStyle } from "styled-components"

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "SpoqaHanSansNeo";
        font-weight: 300;
        src: url("/fonts/SpoqaHanSansNeo-Light.eot"),
            url("/fonts/SpoqaHanSansNeo-Light.eot?#iefix") format("embedded-opentype"),
            url("/fonts/SpoqaHanSansNeo-Light.woff") format("woff"),
            url("/fonts/SpoqaHanSansNeo-Light.ttf") format("truetype"),
            url("/fonts/SpoqaHanSansNeo-Light.otf") format("opentype");
    }
    @font-face {
        font-family: "SpoqaHanSansNeo";
        font-weight: 500;
        src: url("/fonts/SpoqaHanSansNeo-Regular.eot"),
            url("/fonts/SpoqaHanSansNeo-Regular.eot?#iefix") format("embedded-opentype"),
            url("/fonts/SpoqaHanSansNeo-Regular.woff") format("woff"),
            url("/fonts/SpoqaHanSansNeo-Regular.ttf") format("truetype"),
            url("/fonts/SpoqaHanSansNeo-Regular.otf") format("opentype");
    }
    @font-face {
        font-family: "SpoqaHanSansNeo";
        font-weight: 700;
        src: url("/fonts/SpoqaHanSansNeo-Medium.eot"),
            url("/fonts/SpoqaHanSansNeo-Medium.eot?#iefix") format("embedded-opentype"),
            url("/fonts/SpoqaHanSansNeo-Medium.woff") format("woff"),
            url("/fonts/SpoqaHanSansNeo-Medium.ttf") format("truetype"),
            url("/fonts/SpoqaHanSansNeo-Medium.otf") format("opentype");
    }
    @font-face {
        font-family: "SpoqaHanSansNeo";
        font-weight: 900;
        src: url("/fonts/SpoqaHanSansNeo-Bold.eot"),
            url("/fonts/SpoqaHanSansNeo-Bold.eot?#iefix") format("embedded-opentype"),
            url("/fonts/SpoqaHanSansNeo-Bold.woff") format("woff"),
            url("/fonts/SpoqaHanSansNeo-Bold.ttf") format("truetype"),
            url("/fonts/SpoqaHanSansNeo-Bold.otf") format("opentype");
    }

    * {
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }

    body,
    html,
    a {
        font-family: 'SpoqaHanSansNeo', sans-serif;
    }
    html {
	font-size: 16px;
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
        word-wrap: break-word;
        word-break: keep-all;
    }


    input,
    textarea {
        border: 0;
        padding: 1rem 1.25rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,a,p,div,span,section {
        font-family: 'SpoqaHanSansNeo', serif;
        font-weight: 500;
        margin: 0;
    }

    a,
    a:active,
    a:hover {
        outline: none;
        text-decoration: none;
    }
    
    button {
	cursor: pointer;
	border: none;
	background: none;
	padding: 0;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    @media screen and (max-width: 1024px) {
        html {
            font-size: 13px;
        }
    }

    @media screen and (max-width: 768px) {
        html {
            font-size: 10px;
        }
    }
    @media screen and (max-width: 340px) {
        html {
            font-size: 8px;
        }
    }
`
