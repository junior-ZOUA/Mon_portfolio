$(document).ready(function () {

    // Menu mobile
    $("#menu-btn").click(function () {
        $("#menu").toggleClass("hidden");

        const ouvert = !$("#menu").hasClass("hidden");
        $(this).attr("aria-expanded", ouvert);
    });

    // Fermer le menu après un clic
    $("#menu a").click(function () {
        $("#menu").addClass("hidden");
        $("#menu-btn").attr("aria-expanded", "false");
    });

    // Année automatique
    $("#year").text(new Date().getFullYear());

    // Formulaire de contact
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        const nom = $("#nom").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();

        if (!nom || !email || !message) {
            $("#form-status")
                .text("Veuillez remplir tous les champs.")
                .css("color", "red");
            return;
        }

        const sujet = encodeURIComponent("Message depuis mon portfolio");

        const contenu = encodeURIComponent(
            "Nom : " + nom +
            "\nE-mail : " + email +
            "\n\nMessage :\n" + message
        );

        window.location.href =
            "mailto:legot9836@gmail.com?subject=" +
            sujet + "&body=" + contenu;
    });

});