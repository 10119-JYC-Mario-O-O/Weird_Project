Button = [0, 0, 0];

function ConsoleMessage() {
    console.log(
        `{ input: [
            ${LD[PBX + AI_Save_Y * 40 - 120]}, 
            ${LD[PBX + AI_Save_Y * 40 - 120 + 1]}, 
            ${LD[PBX + AI_Save_Y * 40 - 120 + 2]}, 
            ${LD[PBX + AI_Save_Y * 40 - 120 + 3]}, 
            ${LD[PBX + AI_Save_Y * 40 - 80]}, 
            ${LD[PBX + AI_Save_Y * 40 - 80 + 1]}, 
            ${LD[PBX + AI_Save_Y * 40 - 80 + 2]}, 
            ${LD[PBX + AI_Save_Y * 40 - 80 + 3]}, 
            ${LD[PBX + AI_Save_Y * 40 - 40]}, 
            ${LD[PBX + AI_Save_Y * 40 - 40 + 1]}, 
            ${LD[PBX + AI_Save_Y * 40 - 40 + 2]}, 
            ${LD[PBX + AI_Save_Y * 40 - 40 + 3]}, 
            ${LD[PBX + AI_Save_Y * 40]}, 
            ${LD[PBX + AI_Save_Y * 40 + 1]}, 
            ${LD[PBX + AI_Save_Y * 40 + 2]}, 
            ${LD[PBX + AI_Save_Y * 40 + 3]}, 
            ${LD[PBX + AI_Save_Y * 40 + 40]}, 
            ${LD[PBX + AI_Save_Y * 40 + 40 + 1]}, 
            ${LD[PBX + AI_Save_Y * 40 + 40 + 2]}, 
            ${LD[PBX + AI_Save_Y * 40 + 40 + 3]}, 
        ],  output: [${Button}] }, `,
    );
}

function GetData() {
    if (PlayerWalking == `Idle`) {
        if (!is_jumping) {
            Button = [0, 0, 0];

            ConsoleMessage();
        } else {
            Button = [0, 0, 1];

            ConsoleMessage();
        }
    } else if (PlayerWalking == `Front`) {
        if (!is_jumping) {
            Button = [0, 1, 0];

            ConsoleMessage();
        } else {
            Button = [0, 1, 1];

            ConsoleMessage();
        }
    } else if (PlayerWalking == `Back`) {
        if (!is_jumping) {
            Button = [1, 0, 0];

            ConsoleMessage();
        } else {
            Button = [1, 0, 1];

            ConsoleMessage();
        }
    } else if (PlayerWalking == `Front` && PlayerWalking == `Back`) {
        if (!is_jumping) {
            Button = [1, 1, 0];

            ConsoleMessage();
        } else {
            Button = [1, 1, 1];

            ConsoleMessage();
        }
    }
}

function SetLD() {
    GetSetLD = [
        LD[PBX + AI_Save_Y * 40 - 120],
        LD[PBX + AI_Save_Y * 40 - 120 + 1],
        LD[PBX + AI_Save_Y * 40 - 120 + 2],
        LD[PBX + AI_Save_Y * 40 - 120 + 3],
        LD[PBX + AI_Save_Y * 40 - 80],
        LD[PBX + AI_Save_Y * 40 - 80 + 1],
        LD[PBX + AI_Save_Y * 40 - 80 + 2],
        LD[PBX + AI_Save_Y * 40 - 80 + 3],
        LD[PBX + AI_Save_Y * 40 - 40],
        LD[PBX + AI_Save_Y * 40 - 40 + 1],
        LD[PBX + AI_Save_Y * 40 - 40 + 2],
        LD[PBX + AI_Save_Y * 40 - 40 + 3],
        LD[PBX + AI_Save_Y * 40],
        LD[PBX + AI_Save_Y * 40 + 1],
        LD[PBX + AI_Save_Y * 40 + 2],
        LD[PBX + AI_Save_Y * 40 + 3],
        LD[PBX + AI_Save_Y * 40 + 40],
        LD[PBX + AI_Save_Y * 40 + 40 + 1],
        LD[PBX + AI_Save_Y * 40 + 40 + 2],
        LD[PBX + AI_Save_Y * 40 + 40 + 3],
    ];
}
