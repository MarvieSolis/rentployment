$(document).ready(function () {

    var fIn = 1000;
    var fOut = 200;
    //Mouse over

    $("#li").mouseover(function () {
        $("#devName").text("Li Tian").fadeIn(fIn);
        $("#devPosition").text("Backend Developer").fadeIn(fIn);
        $("#devEmail").text("freescale.li@gmail.com").fadeIn(fIn);
        $("#devFact").text("Soccer is my favorite sport!").fadeIn(fIn);
    });

    $("#fletcher").mouseover(function () {
        $("#devName").text("Fletcher Bunales").fadeIn(fIn);
        $("#devPosition").text("Frontend Developer").fadeIn(fIn);
        $("#devEmail").text("lakegapo@gmail.com").fadeIn(fIn);
        $("#devFact").text("I LOVE KPOP").fadeIn(fIn);
    });

    $("#marvie").mouseover(function () {
        $("#devName").text("Marvie Solis").fadeIn(fIn);
        $("#devPosition").text("Frontend Developer").fadeIn(fIn);
        $("#devEmail").text("marvie_solis@ymail.com").fadeIn(fIn);
        $("#devFact").text("I got a state ref ticket for my loud car exhaust ):").fadeIn(fIn);
    });

    $("#eddie").mouseover(function () {
        $("#devName").text("Eddie Borja").fadeIn(fIn);
        $("#devPosition").text("Backend Developer").fadeIn(fIn);
        $("#devEmail").text("eddiebor@yahoo.com").fadeIn(fIn);
        $("#devFact").text("STIBOXER VROOOM").fadeIn(fIn);
    });

    $("#jason").mouseover(function () {
        $("#devName").text("Jason Hong").fadeIn(fIn);
        $("#devPosition").text("Backend Developer").fadeIn(fIn);
        $("#devEmail").text("jaysunhong@gmail.com").fadeIn(fIn);
        $("#devFact").text("Marvie's state ref ticket is constitutional").fadeIn(fIn);
    });

    //Mouse out

    $("#li").mouseout(function () {
        $("#devName").text("Li Tian").fadeOut(fOut);
        $("#devPosition").text("Backend Developer").fadeOut(fOut);
        $("#devEmail").text("freescale.li@gmail.com").fadeOut(fOut);
        $("#devFact").text("Soccer is my favorite sport!").fadeOut(fOut);
    });

    $("#fletcher").mouseout(function () {
        $("#devName").text("Fletcher Bunales").fadeOut(fOut);
        $("#devPosition").text("Frontend Developer").fadeOut(fOut);
        $("#devEmail").text("lakegapo@gmail.com").fadeOut(fOut);
        $("#devFact").text("I LOVE KPOP").fadeOut(fOut);
    });

    $("#marvie").mouseout(function () {
        $("#devName").text("Marvie Solis").fadeOut(fOut);
        $("#devPosition").text("Frontend Developer").fadeOut(fOut);
        $("#devEmail").text("marvie_solis@ymail.com").fadeOut(fOut);
        $("#devFact").text("I got a state ref ticket for my loud car exhaust ):").fadeOut(fOut);
    });

    $("#eddie").mouseout(function () {
        $("#devName").text("Eddie Borja").fadeOut(fOut);
        $("#devPosition").text("Backend Developer").fadeOut(fOut);
        $("#devEmail").text("eddiebor@yahoo.com").fadeOut(fOut);
        $("#devFact").text("STIBOXER VROOOM").fadeOut(fOut);
    });

    $("#jason").mouseout(function () {
        $("#devName").text("Jason Hong").fadeOut(fOut);
        $("#devPosition").text("Backend Developer").fadeOut(fOut);
        $("#devEmail").text("jaysunhong@gmail.com").fadeOut(fOut);
        $("#devFact").text("Marvie's state ref ticket is constitutional").fadeOut(fOut);
    });
});