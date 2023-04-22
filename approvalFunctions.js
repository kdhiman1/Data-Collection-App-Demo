var express = require("express");
var bodyParser = require("body-parser");

function crudeStorage(body) {
  switch (body.pType) {
    case "Packet":
    passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

      if (body.sfc10 > 59) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 54) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 39) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 35) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 29) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 25) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 20) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 16) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 14) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else if (body.sfc37 < 10) {
        passFail = passFail + "Fail - SFC @ 37.8 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }
      return passFail;

    case "Bulk Margarine/Shortening":
            passFail = "";

      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

      if (body.sfc10 > 59) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 54) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 39) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 35) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 29) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 25) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 20) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 16) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 14) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else if (body.sfc37 < 10) {
        passFail = passFail + "Fail - SFC @ 37.8 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }
      return passFail;

    case "Chiffon":
            passFail = "";

      if (body.mPT > 41) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 35) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

      if (body.sfc10 > 28) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 22) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 12) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 9) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 6) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 4) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 5) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 3) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 3) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else if (body.sfc37 < 1.5) {
        passFail = passFail + "Fail - SFC @ 37.8 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }
      return passFail;

    case "Soybean Oil":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }
      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.75) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0.3) {
        passFail = passFail + "Fail - % Moisture over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Moisture within Spec," + "\n";
      }

      return passFail;

    case "Palm Oil":
      passFail = "";

      if (body.mPT > 42) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 36) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 2) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.1) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0.1) {
        passFail = passFail + "Fail - % Moisture over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Moisture within Spec," + "\n";
      }

      if (body.uColour > 6) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;

    case "Palm Olein":
      passFail = "";

      if (body.mPT > 29) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

      if (body.cPT > 13) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);
      
      if (pV > 2) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.1) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0.1) {
        passFail = passFail + "Fail - % Moisture over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Moisture within Spec," + "\n";
      }

      if (body.uColour > 6) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;

    case "Palm Stearin":
      passFail = "";

      if (body.mPT < 44) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 2) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }
      
      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.2) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0.1) {
        passFail = passFail + "Fail - % Moisture over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Moisture within Spec," + "\n";
      }

      if (body.uColour > 6) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;

    case "Corn Oil":
      passFail = "";

      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.15) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0.1) {
        passFail = passFail + "Fail - % Moisture over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Moisture within Spec," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;
    default:
      passFail = "Product Type not recognized";

      return passFail;
  }
}

function neutralization(body) {
  switch (body.pType) {
    case "Soybean Oil":
      passFail = "";

      var pFFA711 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA711 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 7/11) within Spec," + "\n";
      }

      var pSoap711 = 40*body.volH7*body.normalityHC7*1000/(body.sampleMassSoap7);

      if (pSoap711 > 200) {
        passFail = passFail + "Fail - ppM Soap (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 7/11) within Spec," + "\n";
      }

      var pFFA13 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA13 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 13) within Spec," + "\n";
      }

      var pSoap13 = 40*body.volH13*body.normalityHC13*1000/(body.sampleMassSoap13);

      if (pSoap13 > 20) {
        passFail = passFail + "Fail - ppM Soap (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 13) within Spec," + "\n";
      }

      return passFail;

    case "Palm Olein":
      passFail = "";

      var pFFA711 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA711 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 7/11) within Spec," + "\n";
      }

      var pSoap711 = 40*body.volH7*body.normalityHC7*1000/(body.sampleMassSoap7);


      if (pSoap711 > 200) {
        passFail = passFail + "Fail - ppM Soap (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 7/11) within Spec," + "\n";
      }

      var pFFA13 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA13 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 13) within Spec," + "\n";
      }

      var pSoap13 = 40*body.volH13*body.normalityHC13*1000/(body.sampleMassSoap13);

      if (pSoap13 > 20) {
        passFail = passFail + "Fail - ppM Soap (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 13) within Spec," + "\n";
      }

      return passFail;

    case "Chiffon":
      passFail = "";

      var pFFA711 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA711 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 7/11) within Spec," + "\n";
      }

      var pSoap711 = 40*body.volH7*body.normalityHC7*1000/(body.sampleMassSoap7);

      if (pSoap711 > 200) {
        passFail = passFail + "Fail - ppM Soap (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 7/11) within Spec," + "\n";
      }

      var pFFA13 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA13 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 13) within Spec," + "\n";
      }

      var pSoap13 = 40*body.volH13*body.normalityHC13*1000/(body.sampleMassSoap13);

      if (pSoap13 > 20) {
        passFail = passFail + "Fail - ppM Soap (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 13) within Spec," + "\n";
      }

      return passFail;

    case "Packet":
      passFail = "";

      var pFFA711 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA711 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 7/11) within Spec," + "\n";
      }

      var pSoap711 = 40*body.volH7*body.normalityHC7*1000/(body.sampleMassSoap7);

      if (pSoap711 > 200) {
        passFail = passFail + "Fail - ppM Soap (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 7/11) within Spec," + "\n";
      }

      var pFFA13 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA13 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 13) within Spec," + "\n";
      }

      var pSoap13 = 40*body.volH13*body.normalityHC13*1000/(body.sampleMassSoap13);

      if (pSoap13 > 20) {
        passFail = passFail + "Fail - ppM Soap (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 13) within Spec," + "\n";
      }

      return passFail;

    case "Bulk Margarine/Shortening":
      passFail = "";

      var pFFA711 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA711 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 7/11) within Spec," + "\n";
      }

      var pSoap711 = 40*body.volH7*body.normalityHC7*1000/(body.sampleMassSoap7);

      if (pSoap711 > 200) {
        passFail = passFail + "Fail - ppM Soap (Separator 7/11) (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 7/11) (Separator 7/11) within Spec," + "\n";
      }

      var pFFA13 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA13 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 13) within Spec," + "\n";
      }

      var pSoap13 = 40*body.volH13*body.normalityHC13*1000/(body.sampleMassSoap13);

      if (pSoap13 > 20) {
        passFail = passFail + "Fail - ppM Soap (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 13) within Spec," + "\n";
      }

      return passFail;

    case "Palm Oil":
      passFail = "";

      var pFFA711 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA711 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 7/11) within Spec," + "\n";
      }

      var pSoap711 = 40*body.volH7*body.normalityHC7*1000/(body.sampleMassSoap7);

      if (pSoap711 > 200) {
        passFail = passFail + "Fail - ppM Soap (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 7/11) within Spec," + "\n";
      }

      var pFFA13 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA13 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 13) within Spec," + "\n";
      }

      var pSoap13 = 40*body.volH13*body.normalityHC13*1000/(body.sampleMassSoap13);

      if (pSoap13 > 20) {
        passFail = passFail + "Fail - ppM Soap (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 13) within Spec," + "\n";
      }

      return passFail;

    case "Corn Oil":
      passFail = "";

      if (body.pSoap711 > 200) {
        passFail = passFail + "Fail - ppM Soap (Separator 7/11) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 7/11) within Spec," + "\n";
      }

      var pFFA13 = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA13 > 0.15) {
        passFail = passFail + "Fail - % FFA (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA (Separator 13) within Spec," + "\n";
      }

      var pSoap13 = 40*body.volH13*body.normalityHC13*1000/(body.sampleMassSoap13);

      if (pSoap13 > 20) {
        passFail = passFail + "Fail - ppM Soap (Separator 13) over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - ppM Soap (Separator 13) within Spec," + "\n";
      }

      return passFail;
    default:
      passFail = "Product Type not recognized";

      return passFail;
  }
}

function bleaching(body) {
  switch (body.pType) {
    case "Soybean Oil":
      passFail = "";
      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.2) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.uHeatTest >= 2) {
        passFail = passFail + "Fail - Heat Test over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Heat Test within Spec," + "\n";
      }

      return passFail;

    case "Palm Olein":
      passFail = "";
      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.mPT > 29) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.2) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.uHeatTest >= 2) {
        passFail = passFail + "Fail - Heat Test over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Heat Test within Spec," + "\n";
      }

      return passFail;

    case "Chiffon":
      passFail = "";
      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.mPT > 41) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 35) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.2) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.uHeatTest >= 2) {
        passFail = passFail + "Fail - Heat Test over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Heat Test within Spec," + "\n";
      }

      return passFail;

    case "Packet":
      passFail = "";
      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.2) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.uHeatTest >= 2) {
        passFail = passFail + "Fail - Heat Test over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Heat Test within Spec," + "\n";
      }

      return passFail;

    case "Bulk Margarine/Shortening":
      passFail = "";
      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.mPT > 50) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.2) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.uHeatTest >= 2) {
        passFail = passFail + "Fail - Heat Test over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Heat Test within Spec," + "\n";
      }

      return passFail;

    case "Palm Oil":
      passFail = "";
      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.mPT > 42) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 36) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.2) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.uHeatTest >= 2) {
        passFail = passFail + "Fail - Heat Test over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Heat Test within Spec," + "\n";
      }

      return passFail;

    default:
      passFail = "Product Type not recognized";

      return passFail;
  }
}

function deodorization(body) {
  switch (body.pType) {
    case "Soybean Oil":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;

    case "KFC Blend":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;

    case "Oleofry Blend":
      passFail = "";
      if (body.cPT > 6) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;

    case "Palm Olein":
      passFail = "";
      if (body.mPT > 29) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;

    case "Chiffon":
      passFail = "";
      if (body.mPT > 41) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 35) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.sfc10 > 28) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 22) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 12) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 9) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 6) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 4) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 5) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 3) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 3) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Packet":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.sfc10 > 59) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 54) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 39) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 35) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 29) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 25) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 20) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 16) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 14) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Bulk Margarine":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.sfc10 > 59) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 54) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 39) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 35) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 29) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 25) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 20) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 16) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 14) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Bulk Shortening":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.sfc10 > 59) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 54) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 39) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 35) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 29) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 25) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 20) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 16) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 14) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Splended 101":
      passFail = "";
      if (body.mPT > 50) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.sfc10 > 52) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 48) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 32) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 28) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 23) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 18) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 15) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 12) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 13) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Splended 101s":
      passFail = "";
      if (body.mPT > 50) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;

    case "Palm Oil":
      passFail = "";
      if (body.mPT > 42) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 36) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

      if (body.qMoist == "Fail") {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      return passFail;

    default:
      passFail = "Product Type not recognized";

      return passFail;
  }
}

function externalStorage(body) {
  switch (body.pType) {
    case "Soybean Oil":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);
    
      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "KFC Blend":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

      case "Cooken":
      passFail = "";
      if (body.mPT > 42) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 40) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      return passFail;

      case "Golden Ray":
      passFail = "";

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0.1) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      return passFail;

    case "Oleofry Blend":
      passFail = "";
      if (body.cPT > 6) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "Palm Olein":
      passFail = "";
      if (body.mPT > 29) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "Chiffon":
      passFail = "";
      if (body.mPT > 41) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 35) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.sfc10 > 28) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 22) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 12) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 9) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 6) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 4) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 5) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 3) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 3) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Bulk Chiffon":
      passFail = "";
      if (body.mPT > 43) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 38) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.sfc10 > 30) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 25) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 15) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 11) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 10) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 7) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 6) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 4) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 5) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Packet":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.sfc10 > 59) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 54) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 39) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 35) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 29) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 25) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 20) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 16) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 14) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Bulk Margarine":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.sfc10 > 59) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 54) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 39) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 35) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 29) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 25) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 20) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 16) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 14) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Bulk Shortening":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.sfc10 > 59) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 54) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 39) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 35) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 29) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 25) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 20) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 16) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 14) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Splended 101":
      passFail = "";
      if (body.mPT > 50) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.sfc10 > 52) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 48) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 32) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 28) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 23) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 18) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 15) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 12) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 13) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Splended 101s":
      passFail = "";
      if (body.mPT > 50) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "Ice Cream":
      passFail = "";
      if (body.mPT > 40) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 36) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 4.5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.sfc10 > 42) {
        passFail = passFail + "Fail - SFC @ 10 C over Spec," + "\n";
      } else if (body.sfc10 < 38) {
        passFail = passFail + "Fail - SFC @ 10 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 10 C within Spec," + "\n";
      }

      if (body.sfc21 > 16) {
        passFail = passFail + "Fail - SFC @ 21.1 C over Spec," + "\n";
      } else if (body.sfc21 < 12) {
        passFail = passFail + "Fail - SFC @ 21.1 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 21.1 C within Spec," + "\n";
      }

      if (body.sfc26 > 10) {
        passFail = passFail + "Fail - SFC @ 26.7 C over Spec," + "\n";
      } else if (body.sfc26 < 6) {
        passFail = passFail + "Fail - SFC @ 26.7 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 26.7 C within Spec," + "\n";
      }

      if (body.sfc33 > 6) {
        passFail = passFail + "Fail - SFC @ 33.3 C over Spec," + "\n";
      } else if (body.sfc33 < 2) {
        passFail = passFail + "Fail - SFC @ 33.3 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 33.3 C within Spec," + "\n";
      }

      if (body.sfc37 > 5) {
        passFail = passFail + "Fail - SFC @ 37.8 C over Spec," + "\n";
      } else if (body.sfc33 < 1) {
        passFail = passFail + "Fail - SFC @ 37.8 C under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - SFC @ 37.8 C within Spec," + "\n";
      }

      return passFail;

    case "Palm Oil":
      passFail = "";
      if (body.mPT > 39) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 33) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    default:
      passFail = "Product Type not recognized";

      return passFail;
  }
}

function semiFinished(body) {
  switch (body.pType) {
    case "Soybean Oil":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "Cooken":
      passFail = "";

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (body.pMoist > 31) {
        passFail = passFail + "Fail - Moisture Analysis over Spec," + "\n";
      } else if (body.pMoist < 29) {
        passFail = passFail + "Fail - Moisture Analysis under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 71) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 69) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

      case "Golden Ray":
      passFail = "";

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (body.pMoist > 36.8) {
        passFail = passFail + "Fail - Moisture Analysis over Spec," + "\n";
      } else if (body.pMoist < 34.8) {
        passFail = passFail + "Fail - Moisture Analysis under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 5.1) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 4.9) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 60.6) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 58.6) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;  

    case "KFC Blend":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "Gourmet 45":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "Oleofry Blend":
      passFail = "";
      if (body.cPT > 6) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "Liquid Shortening":
      passFail = "";
      if (body.mPT > 29) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "Bulk Margarine":
      passFail = "";

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 3) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 2) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 76) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 72) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

    case "Packet Margarine Dairy":
      passFail = "";

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 4) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 3) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 76) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 72) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

    case "Packet Margarine Vegan":
      passFail = "";

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 4) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 3) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 72) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 68) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

    case "Packet Margarine Reduced":
      passFail = "";

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 4) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 3) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 62) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 58) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

    case "Bulk Chiffon":
      passFail = "";

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 3) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 2) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 82) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 80) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

    case "Soft Margarine":
      passFail = "";

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 3) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 2) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 82) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 80) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

    case "TP/MP Shortening":
      passFail = "";

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 0.4) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 0.2) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 96) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 92) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

    case "Bakerite Breadfat":
      passFail = "";

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 0.7) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 0.3) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 69) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 65) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

    case "Puff Pastry":
      passFail = "";

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 2) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 1) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 82) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 78) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      return passFail;

    case "Palm Oil":
      passFail = "";
      if (body.mPT > 39) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 33) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.5) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      return passFail;

    case "Bulk Shortening":
      passFail = "";

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      return passFail;

    case "Splended 101":
      passFail = "";

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      return passFail;

    case "Splended 101s":
      passFail = "";

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      return passFail;

    case "Bakerite Cake":
      passFail = "";

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      return passFail;

    default:
      passFail = "Product Type not recognized";

      return passFail;
  }
}

function finished(body) {
  switch (body.pType) {
    case "Soybean Oil":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Palm Oil":
      passFail = "";
      if (body.mPT > 39) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 33) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 0.7) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 3) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Liquid Shortening":
      passFail = "";
      if (body.mPT > 29) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Oleofry Blend":
      passFail = "";
      if (body.cPT > 6) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "KFC Blend":
      passFail = "";
      if (body.cPT > 3) {
        passFail = passFail + "Fail - Cold Point over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Cold Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Ice Cream":
      passFail = "";
      if (body.mPT > 40) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 36) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 4.5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV < 100) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Bulk Shortening":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV < 99.5) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Bakerite Bakers":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.1) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV < 96.5) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Cooken":
      passFail = "";
      if (body.mPT > 42) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 40) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      return passFail; 

    case "Golden Ray":
      passFail = "Pass/Fail parameters not given";
      
      return passFail; 

    case "Splended 101":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.05) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV < 99.5) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Bakerite Cake":
      passFail = "";
      if (body.mPT > 48) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 45) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pV = body.volT*body.normalityNa*1000/(body.initialMassPV - body.beakerMassPV);

      if (pV > 1) {
        passFail = passFail + "Fail - Peroxide Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Peroxide Value within Spec," + "\n";
      }

      var pFFA = body.volA*body.molarity*body.acidVal/body.sampleMassFFA;

      if (pFFA > 0.1) {
        passFail = passFail + "Fail - % FFA over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % FFA within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 0) {
        passFail = passFail + "Fail - Moisture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture Analysis," + "\n";
      }

      if (body.uColour > 5) {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      if (body.qSoap == "Fail") {
        passFail = passFail + "Fail - Soap Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Soap Analysis," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV < 96.5) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Bulk Margarine":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 24) {
        passFail = passFail + "Fail - Moisture over Spec," + "\n";
      } else if (pMoist < 21) {
        passFail = passFail + "Fail - Moisture under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture within Spec," + "\n";
      }

      if (body.qColour == "Fail") {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 3) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 2) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 76) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 72) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Packet Margarine Dairy":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 24) {
        passFail = passFail + "Fail - Moisture over Spec," + "\n";
      } else if (pMoist < 21) {
        passFail = passFail + "Fail - Moisture under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture within Spec," + "\n";
      }

      if (body.qColour == "Fail") {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 4) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 3) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 76) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 72) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Packet Margarine Vegan":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 28) {
        passFail = passFail + "Fail - Moisture over Spec," + "\n";
      } else if (pMoist < 25) {
        passFail = passFail + "Fail - Moisture under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture within Spec," + "\n";
      }

      if (body.qColour == "Fail") {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 4) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 3) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 72) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 68) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Packet Margarine Reduced":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 36) {
        passFail = passFail + "Fail - Moisture over Spec," + "\n";
      } else if (pMoist < 33) {
        passFail = passFail + "Fail - Moisture under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture within Spec," + "\n";
      }

      if (body.qColour == "Fail") {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 4) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 3) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 62) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 58) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Bulk Chiffon":
      passFail = "";
      if (body.mPT > 43) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 38) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 20) {
        passFail = passFail + "Fail - Moisture over Spec," + "\n";
      } else if (pMoist < 16) {
        passFail = passFail + "Fail - Moisture under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture within Spec," + "\n";
      }

      if (body.qColour == "Fail") {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 3) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 2) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 82) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 80) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Soft Margarine":
      passFail = "";
      if (body.mPT > 41) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 35) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 20) {
        passFail = passFail + "Fail - Moisture over Spec," + "\n";
      } else if (pMoist < 16) {
        passFail = passFail + "Fail - Moisture under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture within Spec," + "\n";
      }

      if (body.qColour == "Fail") {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 3) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 2) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 82) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 80) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Puff Pastry":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 22) {
        passFail = passFail + "Fail - Moisture over Spec," + "\n";
      } else if (pMoist < 18) {
        passFail = passFail + "Fail - Moisture under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture within Spec," + "\n";
      }

      if (body.qColour == "Fail") {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 2) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 1) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 82) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 78) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "TP/MP Shortening":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 7) {
        passFail = passFail + "Fail - Moisture over Spec," + "\n";
      } else if (pMoist < 3) {
        passFail = passFail + "Fail - Moisture under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture within Spec," + "\n";
      }

      if (body.qColour == "Fail") {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 0.4) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 0.2) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 96) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 92) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    case "Bakerite Breadfat":
      passFail = "";
      if (body.mPT > 51) {
        passFail = passFail + "Fail - Melting Point over Spec," + "\n";
      } else if (body.mPT < 46) {
        passFail = passFail + "Fail - Melting Point under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Melting Point within Spec," + "\n";
      }

var pMoist = (body.initialMassMst - body.finalMassMst)*100/(body.initialMassMst - body.sampleMassMst);

      if (pMoist > 32) {
        passFail = passFail + "Fail - Moisture over Spec," + "\n";
      } else if (pMoist < 28) {
        passFail = passFail + "Fail - Moisture under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Moisture within Spec," + "\n";
      }

      if (body.qColour == "Fail") {
        passFail = passFail + "Fail - Colour over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - Colour within Spec," + "\n";
      }

      if (body.pA > 4) {
        passFail = passFail + "Fail - p-Anisidine Value over Spec," + "\n";
      } else {
        passFail = passFail + "Pass - p-Anisidine Value within Spec," + "\n";
      }

      var pSalt = body.volS*body.normalityAg*5.85/body.sampleMassSalt

      if (pSalt > 0.7) {
        passFail = passFail + "Fail - % Salt over Spec," + "\n";
      } else if (pSalt < 0.3) {
        passFail = passFail + "Fail - % Salt under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Salt within Spec," + "\n";
      }

      var pFatM = (body.initialMassF-body.finalMassF)*100/body.sampleMassF;
      var pFatV = (body.initialVolF-body.finalVolF)*100/body.sampleVolF;

      if (pFatM || pFatV > 69) {
        passFail = passFail + "Fail - % Fat over Spec," + "\n";
      } else if (pFatM || pFatV < 65) {
        passFail = passFail + "Fail - % Fat under Spec," + "\n";
      } else {
        passFail = passFail + "Pass - % Fat within Spec," + "\n";
      }

      if (body.qFMatter == "Fail") {
        passFail = passFail + "Fail - Foreign Matter Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Foreign Matter Analysis," + "\n";
      }

      if (body.qTexture == "Fail") {
        passFail = passFail + "Fail - Texture Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Texture Analysis," + "\n";
      }

      if (body.qFlavour == "Fail") {
        passFail = passFail + "Fail - Flavour Analysis," + "\n";
      } else {
        passFail = passFail + "Pass - Flavour Analysis," + "\n";
      }

      return passFail;

    default:
      passFail = "Product Type not recognized";

      return passFail;
  }
}

module.exports = { crudeStorage, neutralization, bleaching, deodorization, externalStorage, semiFinished, finished};