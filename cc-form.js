$(document).ready(function() {
    var billingPageDone = false;
    var shippingPageDone = false;
    var paymentPageDone = false;

    function validateBillingPage() {
        var valid = true;
        if (document.getElementById("billingFirstName").value.length < 1) {
            $("#billingFirstNameGroup").addClass("has-error");
            valid = false;
        } else $("#billingFirstNameGroup").removeClass("has-error");
        if (document.getElementById("billingLastName").value.length < 1) {
            $("#billingLastNameGroup").addClass("has-error");
            valid = false;
        } else $("#billingLastNameGroup").removeClass("has-error");
        if (document.getElementById("billingAddressLine1").value.length < 1) {
            $("#billingAddressLine1Group").addClass("has-error");
            valid = false;
        } else $("#billingAddressLine1Group").removeClass("has-error");
        if (document.getElementById("billingCity").value.length < 1) {
            $("#billingCityGroup").addClass("has-error");
            valid = false;
        } else $("#billingCityGroup").removeClass("has-error");
        if (document.getElementById("billingState").value.length < 1) {
            $("#billingStateGroup").addClass("has-error");
            valid = false;
        } else $("#billingStateGroup").removeClass("has-error");
        if (document.getElementById("billingZip").value.length < 1) {
            $("#billingZipGroup").addClass("has-error");
            valid = false;
        } else $("#billingZipGroup").removeClass("has-error");
        if (document.getElementById("email").value.length < 1) {
            $("#emailGroup").addClass("has-error");
            valid = false;
        } else $("#emailGroup").removeClass("has-error");
        if (document.getElementById("billingPhone").value.length < 1) {
            $("#billingPhoneGroup").addClass("has-error");
            valid = false;
        } else $("#billingPhoneGroup").removeClass("has-error");
        if (valid) {
            billingPageDone = true;
            shippingPage();
        }
    }

    function validateShippingPage() {
        var valid = true;
        if (document.getElementById("shippingFirstName").value.length < 1) {
            $("#shippingFirstNameGroup").addClass("has-error");
            valid = false;
        } else $("#shippingFirstNameGroup").removeClass("has-error");
        if (document.getElementById("shippingLastName").value.length < 1) {
            $("#shippingLastNameGroup").addClass("has-error");
            valid = false;
        } else $("#shippingLastNameGroup").removeClass("has-error");
        if (document.getElementById("shippingAddressLine1").value.length < 1) {
            $("#shippingAddressLine1Group").addClass("has-error");
            valid = false;
        } else $("#shippingAddressLine1Group").removeClass("has-error");
        if (document.getElementById("shippingCity").value.length < 1) {
            $("#shippingCityGroup").addClass("has-error");
            valid = false;
        } else $("#shippingCityGroup").removeClass("has-error");
        if (document.getElementById("shippingState").value.length < 1) {
            $("#shippingStateGroup").addClass("has-error");
            valid = false;
        } else $("#shippingStateGroup").removeClass("has-error");
        if (document.getElementById("shippingZip").value.length < 1) {
            $("#shippingZipGroup").addClass("has-error");
            valid = false;
        } else $("#shippingZipGroup").removeClass("has-error");
        if (document.getElementById("email").value.length < 1) {
            $("#emailGroup").addClass("has-error");
            valid = false;
        } else $("#emailGroup").removeClass("has-error");
        if (document.getElementById("shippingPhone").value.length < 1) {
            $("#shippingPhoneGroup").addClass("has-error");
            valid = false;
        } else $("#shippingPhoneGroup").removeClass("has-error");
        if (valid) {
            shippingPageDone = true;
            paymentPage();
        }
    }



    function billingPage() {
        $("#billing-address-form").show();
        $("#shipping-address-form").hide();
        $("#payment-method-form").hide();
        $("#review-form").hide();
        $("#billing-tab").addClass("active");
        if (!billingPageDone) $("#shipping-tab").addClass("disabled");
        else $("#shipping-tab").removeClass("active");
        if (!shippingPageDone) $("#payment-tab").addClass("disabled");
        else $("#payment-tab").removeClass("active");
        if (!paymentPageDone) $("#order-tab").addClass("disabled");
        else $("#order-tab").removeClass("active");
        if (!paymentPageDone) $("#review-tab").addClass("disabled");
        else $("#review-tab").removeClass("active");
    }

    function shippingPage() {
        $("#billing-address-form").hide();
        $("#shipping-address-form").show();
        $("#payment-method-form").hide();
        $("#review-form").hide();
        $("#billing-tab").removeClass("active");
        $("#shipping-tab").removeClass("disabled").addClass("active");
        if (!shippingPageDone) $("#payment-tab").addClass("disabled");
        else $("#payment-tab").removeClass("active");
        if (!paymentPageDone) $("#review-tab").addClass("disabled");
        else $("#review-tab").removeClass("active");
    }

    function paymentPage() {
        $("#billing-address-form").hide();
        $("#shipping-address-form").hide();
        $("#payment-method-form").show();
        $("#review-form").hide();
        $("#billing-tab").removeClass("active");
        $("#shipping-tab").removeClass("active");
        $("#payment-tab").removeClass("disabled").addClass("active");
        if (!paymentPageDone) $("#review-tab").addClass("disabled");
        else $("#review-tab").removeClass("active");
    }

    function reviewPage() {
        $("#billing-address-form").hide();
        $("#shipping-address-form").hide();
        $("#payment-method-form").hide();
        $("#review-form").show();
        $("#billing-tab").removeClass("active");
        $("#shipping-tab").removeClass("active");
        $("#payment-tab").removeClass("active");
        $("#review-tab").removeClass("disabled").addClass("active");

        var billingFirstName = document.getElementById("billingFirstName").value;
        var billingMiddleName = document.getElementById("billingMiddleName").value;
        var billingLastName = document.getElementById("billingLastName").value;
        var billingAddressLine1 = document.getElementById("billingAddressLine1").value;
        var billingAddressLine2 = document.getElementById("billingAddressLine2").value;
        var billingCity = document.getElementById("billingCity").value;
        var billingState = document.getElementById("billingState").value;
        var billingZip = document.getElementById("billingZip").value;
        var email = document.getElementById("email").value;
        var billingPhone = document.getElementById("billingPhone").value;

        var shippingFirstName = document.getElementById("shippingFirstName").value;
        var shippingMiddleName = document.getElementById("shippingMiddleName").value;
        var shippingLastName = document.getElementById("shippingLastName").value;
        var shippingAddressLine1 = document.getElementById("shippingAddressLine1").value;
        var shippingAddressLine2 = document.getElementById("shippingAddressLine2").value;
        var shippingCity = document.getElementById("shippingCity").value;
        var shippingState = document.getElementById("shippingState").value;
        var shippingZip = document.getElementById("shippingZip").value;
        var shippingPhone = document.getElementById("shippingPhone").value;

        var ccName = document.getElementById("ccName").value;
        var ccNumber = document.getElementById("ccNumber").value;
        var ccCvv = document.getElementById("ccCvv").value;
        var ccExp = document.getElementById("ccExp").value;

        if (billingMiddleName.length > 0) var reviewBillingName = billingFirstName + " " + billingMiddleName + " " + billingLastName;
        else var reviewBillingName = billingFirstName + " " + billingLastName;
        if (billingAddressLine2.length > 0) var reviewBillingAddress = billingAddressLine1 + "<br />" + billingAddressLine2;
        else var reviewBillingAddress = billingAddressLine1;
        var reviewCityStZip = billingCity + ", " + billingState + " " + billingZip;
        var reviewBillingSection = reviewBillingName + "<br />" + reviewBillingAddress + "<br />" +
            reviewCityStZip + "<br />" + billingPhone + "<br />" + email;
        document.getElementById("review-billing-address").innerHTML = reviewBillingSection

        if (shippingMiddleName.length > 0) var reviewshippingName = shippingFirstName + " " + shippingMiddleName + " " + shippingLastName;
        else var reviewshippingName = shippingFirstName + " " + shippingLastName;
        if (shippingAddressLine2.length > 0) var reviewshippingAddress = shippingAddressLine1 + "<br />" + shippingAddressLine2;
        else var reviewshippingAddress = shippingAddressLine1;
        var reviewCityStZip = shippingCity + ", " + shippingState + " " + shippingZip;
        var reviewshippingSection = reviewshippingName + "<br />" + reviewshippingAddress + "<br />" +
            reviewCityStZip + "<br />" + shippingPhone;
        document.getElementById("review-shipping-address").innerHTML = reviewshippingSection;
        var lastDigits = "-1";
        if (ccBrand == "AMEX") {
            lastDigits = ccNumber.substring(9, 14);
        } else {
            lastDigits = ccNumber.substring(11, 15);
        }
        document.getElementById("review-payment-details").innerHTML = "Name on card: " + ccName + "<br />" +
            ccBrand + " Ending in " + lastDigits + "<br />Expires " + ccExp + "<br/>";
    }

    $("#sameAsBilling").click(function() {
        if (document.getElementById('sameAsBilling').checked) {
            $("#shippingFirstName").val($("#billingFirstName").val()).prop("disabled", true);
            $("#shippingMiddleName").val($("#billingMiddleName").val()).prop("disabled", true);
            $("#shippingLastName").val($("#billingLastName").val()).prop("disabled", true);
            $("#shippingAddressLine1").val($("#billingAddressLine1").val()).prop("disabled", true);
            $("#shippingAddressLine2").val($("#billingAddressLine2").val()).prop("disabled", true);
            $("#shippingCity").val($("#billingCity").val()).prop("disabled", true);
            $("#shippingState").val($("#billingState").val()).prop("disabled", true);
            $("#shippingZip").val($("#billingZip").val()).prop("disabled", true);
            $("#shippingPhone").val($("#billingPhone").val()).prop("disabled", true);
        } else {
            $("#shippingFirstName").val("").prop("disabled", false);
            $("#shippingMiddleName").val("").prop("disabled", false);
            $("#shippingLastName").val("").prop("disabled", false);
            $("#shippingAddressLine1").val("").prop("disabled", false);
            $("#shippingAddressLine2").val("").prop("disabled", false);
            $("#shippingCity").val("").prop("disabled", false);
            $("#shippingState").val("").prop("disabled", false);
            $("#shippingZip").val("").prop("disabled", false);
            $("#shippingPhone").val("").prop("disabled", false);
        }
    });
    billingPage();

    $("#next-shipping").click(function() {
        validateBillingPage();
    });
    $("#prev-billing").click(function() {
        billingPage();
    });

    $("#next-payment").click(function() {
        validateShippingPage();
    });

    $("#prev-shipping").click(function() {
        shippingPage();
    });

    $("#next-review").click(function() {
        validatePaymentPage();
    });

    $("#prev-payment").click(function() {
        paymentPage();
    });

    $("#billing-tab").click(function() {
        billingPage();
    });

    $("#shipping-tab").click(function() {
        shippingPage();
    });

    $("#payment-tab").click(function() {
        paymentPage();
    });
    $("#review-tab").click(function() {
        reviewPage();
    });



});