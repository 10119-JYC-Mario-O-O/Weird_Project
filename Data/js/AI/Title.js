let AI_Save_Y = 20;

let Back_Res = 0;
let Front_Res = 0;
let Jump_Res = 0;

let output = [0, 0, 0];

let GetSetLD = [];

let is_run = false;

function AImove() {
    SetLD();

    is_run = true;

    if (output[0] > output[1]) {
        PlayerWalking = `Back`;
    } else if (output[1] > output[0]) {
        PlayerWalking = `Front`;
    } else {
        PlayerWalking = `Idle`;
    }

    if (output[2] >= 0.75) {
        if (!is_midair && !is_J_press) {
            is_jumping = true;

            if (!is_top) {
                PBY--;
            }
        }

        is_J_press = true;
    } else {
        SavePBX = PBX;
        SavePBY = PBY;
        is_jumping = false;
        is_J_press = false;
    }

    AI_Save_Y = PBY;

    Move();
}

function AIshowMove() {
    Show_Move();

    Frame++;

    if (PlayerWalking == `Idle`) {
        if (Frame >= 15) {
            if (Walking_Frame != 1) {
                Walking_Frame = 1;
            } else {
                Walking_Frame = 0;
            }

            Frame = 0;
        }
    } else {
        if (Frame >= 10) {
            Walking_Frame++;

            if (Walking_Frame >= 5) {
                if (!is_midair) {
                    WalkSound.play();
                }

                Walking_Frame = 1;
            }

            Frame = 0;
        }
    }
}
