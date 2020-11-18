function checkForm() {
    theForm = document.getElementById("theForm");
    var validForm;
    if (document.getElementById("yourCheckBox").selected) {
        validForm = true;
    }
    if (document.getElementById("yourCheckBox2").selected) {
        validForm = true;
    }
    if (document.getElementById("yourCheckBox3").selected) {
        validForm = true;
    }
    //check all form objects
    if (validForm) {
        theForm.submit();
    }

}

<
button onclick = "checkForm();" > Submit < /button>