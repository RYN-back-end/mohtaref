<link rel="icon" href="assets/img/logo.png" type="image/png">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/plugins.css">
<style>
    .alert {
        border-radius: 0px;
        padding: 10px 15px;
    }
    .alert-danger {
        color: #a94442;
        background-color: #f2dede;
        border-color: #ebccd1;
    }
    .alert {
        padding: 15px;
        margin-bottom: 20px;
        border: 1px solid transparent;
        border-radius: 4px;
    }
    button.close {
        -webkit-appearance: none;
        padding: 0;
        cursor: pointer;
        background: transparent;
        border: 0;
    }
    .close {
        float: right;
        font-size: 21px;
        font-weight: bold;
        line-height: 1;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        filter: alpha(opacity=20);
        opacity: .2;
    }
    .alert-success {
        color: #3c763d;
        background-color: #dff0d8;
        border-color: #d6e9c6;
    }
</style>

<style>
    .col-12{
        width: 100%;
    }
    .product-reviews {
        margin-top: 50px;
    }

    .review {
        border: 1px solid #ccc;
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 8px; /* Add rounded corners */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
    }

    .user-info {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }

    .user-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 10px;
    }

    .user-name {
        font-weight: bold;
    }

    .rating {
        text-align: center;
        color: #f39c12;
        position: relative;
        margin-bottom: 10px;
    }

    .rating::before,
    .rating::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 44%;
        height: 1px;
        background-color: #ccc;
    }

    .rating::before {
        left: 0;
    }

    .rating::after {
        right: 0;
    }


    .review-text {
        font-size: 16px;
        line-height: 1.5;
    }
    .col-12{
        width: 100%;
    }
    .add-review {
        margin-top: 50px;
    }

    .add-review .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .add-review form .form-group {
        margin-bottom: 20px;
    }

    .add-review form label {
        font-weight: bold;
    }

    .add-review form textarea {
        height: 100px;
    }

    .add-review form button {
        background-color: #B09474;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: .3s ease-out;
        border-radius: 10px;
        padding: 15px 40px;
    }

    .add-review form button:hover {
        background-color: #8f775b;
    }
    .add-review form textarea {
        height: 100px;
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: vertical; /* Allow vertical resizing */
    }
    .star-rating {
        unicode-bidi: bidi-override;
        direction: rtl;
        text-align: center;
    }

    .star-rating input[type="radio"] {
        display: none;
    }

    .star-rating label {
        color: #ccc;
        font-size: 30px;
        padding: 5px;
        cursor: pointer;
        float: right; /* Align to the right */
    }

    .star-rating label:before {
        content: '\2605';
    }

    .star-rating input[type="radio"]:checked ~ label {
        color: #f39c12;
        font-weight: bold;
    }
</style>
