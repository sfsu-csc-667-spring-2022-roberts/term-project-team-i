var cards = [];

cards[0] = "/public/images/cards/card_back.png";
cards[1] = "/public/images/cards/blue_0.png";
cards[2] = "/public/images/cards/blue_1.png";
cards[3] = "/public/images/cards/blue_2.png";
cards[4] = "/public/images/cards/blue_3.png";
cards[5] = "/public/images/cards/blue_4.png";
cards[6] = "/public/images/cards/blue_5.png";
cards[7] = "/public/images/cards/blue_6.png";
cards[8] = "/public/images/cards/blue_7.png";
cards[9] = "/public/images/cards/blue_8.png";
cards[10] = "/public/images/cards/blue_9.png";
cards[11] = "/public/images/cards/blue_picker.png";
cards[12] = "/public/images/cards/blue_reverse.png";
cards[13] = "/public/images/cards/blue_skip.png";

cards[14] = "/public/images/cards/green_0.png";
cards[15] = "/public/images/cards/green_1.png";
cards[16] = "/public/images/cards/green_2.png";
cards[17] = "/public/images/cards/green_3.png";
cards[18] = "/public/images/cards/green_4.png";
cards[19] = "/public/images/cards/green_5.png";
cards[20] = "/public/images/cards/green_6.png";
cards[21] = "/public/images/cards/green_7.png";
cards[22] = "/public/images/cards/green_8.png";
cards[23] = "/public/images/cards/green_9.png";
cards[24] = "/public/images/cards/green_picker.png";
cards[25] = "/public/images/cards/green_reverse.png";
cards[26] = "/public/images/cards/green_skip.png";

cards[27] = "/public/images/cards/red_0.png";
cards[28] = "/public/images/cards/red_1.png";
cards[29] = "/public/images/cards/red_2.png";
cards[30] = "/public/images/cards/red_3.png";
cards[31] = "/public/images/cards/red_4.png";
cards[32] = "/public/images/cards/red_5.png";
cards[33] = "/public/images/cards/red_6.png";
cards[34] = "/public/images/cards/red_7.png";
cards[35] = "/public/images/cards/red_8.png";
cards[36] = "/public/images/cards/red_9.png";
cards[37] = "/public/images/cards/red_picker.png";
cards[38] = "/public/images/cards/red_reverse.png";
cards[39] = "/public/images/cards/red_skip.png";

cards[40] = "/public/images/cards/yellow_0.png";
cards[41] = "/public/images/cards/yellow_1.png";
cards[42] = "/public/images/cards/yellow_2.png";
cards[43] = "/public/images/cards/yellow_3.png";
cards[44] = "/public/images/cards/yellow_4.png";
cards[45] = "/public/images/cards/yellow_5.png";
cards[46] = "/public/images/cards/yellow_6.png";
cards[47] = "/public/images/cards/yellow_7.png";
cards[48] = "/public/images/cards/yellow_8.png";
cards[49] = "/public/images/cards/yellow_9.png";
cards[50] = "/public/images/cards/yellow_picker.png";
cards[51] = "/public/images/cards/yellow_reverse.png";
cards[52] = "/public/images/cards/yellow_skip.png";

cards[53] = "/public/images/cards/wild_color_changer.png";
cards[54] = "/public/images/cards/wild_pick_four.png";

function play() {
    document.getElementById("button-game").style.display = "none";
    document.getElementById("button-game-cont").style.display = "none";
    var i;
    for (i = 0; i < 7; i++) {
        var x = document.createElement("IMG");
        var y = document.createElement("IMG");
        var z = document.createElement("IMG");

        var randNumX = getRndInteger(1, 54);

        y.setAttribute("src", cards[getRndInteger(1, 54)]);
        z.setAttribute("src", cards[0]);
        x.setAttribute("src", cards[randNumX]);

        var radBtn = document.createElement("input");
        radBtn.setAttribute("type", "radio");
        radBtn.setAttribute("value", randNumX);
        radBtn.setAttribute("name", "card_radio_btn");
        radBtn.setAttribute("id", "card_" + i);

        // placing card values in html input form
        document.getElementById("card_" + i).setAttribute("value", randNumX);

        //x.appendChild(radBtn);
        var radLabel = document.createElement("label");

        radLabel.append(radBtn);
        radLabel.append(x);

        document.getElementById("player_hand").appendChild(radLabel);
        document.getElementById("player_hand_top").appendChild(y);
        document.getElementById("player_hand_top_top").appendChild(z);
    }
}

function drawCard() {
    var i;
    for (i = 0; i < 1; i++) {
        var x = document.createElement("IMG");

        var randCardNum = getRndInteger(1, 54);

        console.log("randCard: " + randCardNum);

        x.setAttribute("src", cards[randCardNum]);
        document.getElementById("lastPlayed").setAttribute("value", randCardNum);
        document.getElementById("discard_pile").appendChild(x);
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function removeCard() {
    let ele = document.getElementById("id_to_remove");
    console.log(ele.value);

    ele_to_remove.remove();
}
