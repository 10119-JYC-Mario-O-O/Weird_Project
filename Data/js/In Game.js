let Color = `green`;
let is_Game_Start = true;
let is_Pause = false;
let is_Cut_Scene = false;
let is_Died = false;
let Died_Timer = 0;
let Pause_Timer = 0;
let Pointer = 1;
let Get_Select = 0;
let Timer = 0;
let Timer_Frame = 0;
let is_inGame = false;

let DeBug = true;

canvas = document.createElement(`canvas`);
ctx = canvas.getContext(`2d`);
document.body.appendChild(canvas);
canvas.width = 2545;
canvas.height = 1425;

let AIstartCounter = 0;
let Counter2 = 0;
let Ground_Frame = 0;
let Ground_Count = 1;
let PBX = 1;
let PBX_U = 1;
let PBY = 20;
let PBY_U = 20;
let SavePBX = 1;
let SavePBY = 20;
let Level = 1;
let Saved_Level = 0;
let PlayerX = 64;
let PlayerY = 1280;
let XS = 0.5;
let YS = 2;
let Jump_Hight = 2;
let MovedX = 0;
let MovedY = 0;
let Frame = 0;
let Limit = 256;
let Walking_Frame = 1;
let is_jumping = false;
let is_midair = false;
let is_top = false;
let jump_stop = false;
let is_J_press = false;
let is_wall = false;
let PlayerWalking = `Idle`;
let PlayerUCR = `Nan`;

let mouseX = 0;
let mouseY = 0;

let start_mouseX = 0;
let start_mouseY = 0;

let end_mouseX = 0;
let end_mouseY = 0;

let C_Object = ``;
let C_Number = -1;
let C_DRC = ``;

let mouse_click = false;

let Moving_Logo_ID = -1;

let Size = 128;

let Logo_Move = [
    { X: 1280 - Size * 2.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 1.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 0.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 0.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 1.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 3.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 2.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 1.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 0.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 0.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 1.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 2.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
];

let Logo_Move_Origin = [
    { X: 1280 - Size * 2.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 1.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 0.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 0.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 1.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 3.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 2.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 1.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 0.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 0.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 1.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 2.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
];

let Logo_Move_Saved = [
    { X: 1280 - Size * 2.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 1.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 0.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 0.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 1.5, Y: 384, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 3.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 2.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 1.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 - Size * 0.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 0.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 1.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
    { X: 1280 + Size * 2.5, Y: 384 + Size, Logo_Timer: 0, Ran_Time: 15 },
];

let keysDown = {};

function setEventListener() {
    document.addEventListener(`keydown`, function (e) {
        keysDown[e.keyCode] = true;
    });

    document.addEventListener(`keyup`, function (e) {
        delete keysDown[e.keyCode];

        if (event.keyCode == 13) {
            if (is_Game_Start) {
                DeBug = !DeBug;
            }

            is_Game_Start = true;

            Pause_Scene();

            if (PlayerUCR == `Up`) {
                Level += 0.5;
            } else if (PlayerUCR == `Crouch`) {
                Level -= 0.5;
            }
        }

        if ((is_Died || is_Pause) && Get_Select == 0) {
            if (event.keyCode == 74) {
                if (J_Press.currentTime == 0) {
                    J_Press.play();
                }

                if (Pointer == 1) {
                    if (is_Pause) {
                        Game_Over.play();
                    }

                    Get_Select = 1;
                    Died_Timer = 1;

                    is_Pause = false;
                    is_Died = true;
                    Pause_Timer = 0;
                } else if (Pointer == 2) {
                    Get_Select = 2;
                    Died_Timer = 1;

                    is_Pause = false;
                    is_Died = true;
                    Pause_Timer = 0;
                }
            }

            if (Get_Select == 0) {
                if (event.keyCode == 87) {
                    Pointer--;

                    Select.play();
                }

                if (event.keyCode == 83) {
                    Pointer++;

                    Select.play();
                }
            }
        }

        // console.log(e.keyCode)
    });

    document.addEventListener(`mousemove`, (e) => {
        mouseX = e.clientX;

        mouseY = e.clientY;

        if (!mouse_click) {
            start_mouseX = mouseX;
            start_mouseY = mouseY;
        }
    });

    document.addEventListener(`mousedown`, () => {
        mouse_click = true;

        Color = `red`;
    });

    document.addEventListener(`dblclick`, () => {
        Color = `blue`;
    });

    document.addEventListener(`mouseup`, () => {
        mouse_click = false;

        end_mouseX = mouseX;
        end_mouseY = mouseY;

        Color = `green`;
    });
}

function loadImage() {
    BS = new Image();
    BS.src = `images/In_Game/BG/BS.png`;
    GOBG = new Image();
    GOBG.src = `images/In_Game/BG/GOBG.png`;
    GB_OR = new Image();
    GB_OR.src = `images/In_Game/Block/GB_OR.png`;
    GB_L = new Image();
    GB_L.src = `images/In_Game/Block/GB_L.png`;
    GB_R = new Image();
    GB_R.src = `images/In_Game/Block/GB_R.png`;
    GB_U = new Image();
    GB_U.src = `images/In_Game/Block/GB_U.png`;
    GB_D = new Image();
    GB_D.src = `images/In_Game/Block/GB_D.png`;
    HB = new Image();
    HB.src = `images/In_Game/Block/HB.png`;
    HB_S = new Image();
    HB_S.src = `images/In_Game/Block/HB_S.png`;

    Lava_OR = new Image();
    Lava_OR.src = `images/In_Game/Lava/Lava_OR.png`;
    Lava1 = new Image();
    Lava1.src = `images/In_Game/Lava/Lava1.png`;
    Lava2 = new Image();
    Lava2.src = `images/In_Game/Lava/Lava2.png`;
    Lava3 = new Image();
    Lava3.src = `images/In_Game/Lava/Lava3.png`;
    Lava4 = new Image();
    Lava4.src = `images/In_Game/Lava/Lava4.png`;

    NS_Box = new Image();
    NS_Box.src = `images/In_Game/Scene/NS_Box.png`;
    NS_Home = new Image();
    NS_Home.src = `images/In_Game/Scene/NS_Home.png`;
    NS_X = new Image();
    NS_X.src = `images/In_Game/Scene/NS_X.png`;
    NS_TA = new Image();
    NS_TA.src = `images/In_Game/Scene/NS_TA.png`;
    S_Box = new Image();
    S_Box.src = `images/In_Game/Scene/S_Box.png`;
    S_Home = new Image();
    S_Home.src = `images/In_Game/Scene/S_Home.png`;
    S_X = new Image();
    S_X.src = `images/In_Game/Scene/S_X.png`;
    S_TA = new Image();
    S_TA.src = `images/In_Game/Scene/S_TA.png`;
    TRNG = new Image();
    TRNG.src = `images/In_Game/Scene/TRNG.png`;

    QQQ = new Image();
    QQQ.src = `images/In_Game/Cut_Scene/QQQ.png`;
    System = new Image();
    System.src = `images/In_Game/Cut_Scene/System.png`;
    LTDL = new Image();
    LTDL.src = `images/In_Game/Cut_Scene/LTDL.png`;
    Gray_Box = new Image();
    Gray_Box.src = `images/In_Game/Cut_Scene/Gray_Box.png`;

    Skull = new Image();
    Skull.src = `images/In_Game/Scene/Skull.png`;
    Skull_Icon = new Image();
    Skull_Icon.src = `images/In_Game/Scene/Skull_Icon.png`;

    Click = new Image();
    Click.src = `images/In_Game/Mouse/Click.png`;
    UnClick = new Image();
    UnClick.src = `images/In_Game/Mouse/UnClick.png`;
    DbClick = new Image();
    DbClick.src = `images/In_Game/Mouse/DbClick.png`;

    Time = new Image();
    Time.src = `images/In_Game/BG/Time.png`;

    Goal = new Image();
    Goal.src = `images/In_Game/Goal/Goal.png`;

    Body = new Image();
    Body.src = `images/In_Game/Player/Body.png`;
    Idle = new Image();
    Idle.src = `images/In_Game/Player/Idle.png`;
    Jump = new Image();
    Jump.src = `images/In_Game/Player/Jump.png`;

    PML1 = new Image();
    PML1.src = `images/In_Game/Player/PML1.png`;
    PML2 = new Image();
    PML2.src = `images/In_Game/Player/PML2.png`;
    PML3 = new Image();
    PML3.src = `images/In_Game/Player/PML3.png`;
    PML4 = new Image();
    PML4.src = `images/In_Game/Player/PML4.png`;

    PMR1 = new Image();
    PMR1.src = `images/In_Game/Player/PMR1.png`;
    PMR2 = new Image();
    PMR2.src = `images/In_Game/Player/PMR2.png`;
    PMR3 = new Image();
    PMR3.src = `images/In_Game/Player/PMR3.png`;
    PMR4 = new Image();
    PMR4.src = `images/In_Game/Player/PMR4.png`;
}

function loadAudio() {
    System_Audio = new Audio();
    System_Audio.src = `audios/In_Game/Cut_Scene/System.wav`;
    System_Audio.volume = 0.5;
    System_Audio.playbackRate = 3;

    J_Press = new Audio();
    J_Press.src = `audios/In_Game/Cut_Scene/J_Press.wav`;
    J_Press.volume = 0.5;

    End = new Audio();
    End.src = `audios/In_Game/Cut_Scene/End.wav`;

    Game_Over = new Audio();
    Game_Over.src = `audios/In_Game/Cut_Scene/Game Over.wav`;
    Game_Over.volume = 0.5;

    Select = new Audio();
    Select.src = `audios/In_Game/Cut_Scene/Select.wav`;
    Select.volume = 0.5;

    Pause = new Audio();
    Pause.src = `audios/In_Game/Cut_Scene/Pause.wav`;
    Pause.volume = 0.5;

    PO = new Audio();
    PO.src = `audios/In_Game/Cut_Scene/PO.wav`;
    PO.volume = 0.5;

    GTH = new Audio();
    GTH.src = `audios/Home/Go_And_Out/GTH.wav`;
    GTH.volume = 0.5;
    GTH.playbackRate = 3;

    WTH = new Audio();
    WTH.src = `audios/Home/Go_and_Out/WTH.mp3`;
    WTH.volume = 0.5;
    WTH.playbackRate = 3;

    BGM1 = new Audio();
    BGM1.src = `audios/In_Game/BGM/BGM1.wav`;
    BGM1.volume = 0.75;

    JumpSound = new Audio();
    JumpSound.src = `audios/In_Game/Player/Jump.wav`;

    GroundSound = new Audio();
    GroundSound.src = `audios/In_Game/Player/Ground.wav`;

    TOPSound = new Audio();
    TOPSound.src = `audios/In_Game/Player/TOP.wav`;

    WalkSound = new Audio();
    WalkSound.src = `audios/In_Game/Player/Walk.wav`;
    WalkSound.volume = 0.75;
}

function Check_Reset() {
    C_Object = ``;
    C_Number = -1;
    C_DRC = ``;
}

function Check_Set() {
    if (C_Object == `` && C_Number == -1 && C_DRC == ``) {
        for (let i = 0; i < HardBlock_S_Origin.length; i++) {
            HardBlock_S_Origin.splice(i, 1, {
                X: Math.round(HardBlock_S[i].X / 64) * 64,
                Y: Math.round(HardBlock_S[i].Y / 64) * 64,
                W: Math.round(HardBlock_S[i].W / 64) * 64,
                H: Math.round(HardBlock_S[i].H / 64) * 64,
            });

            if (HardBlock_S_Origin[i].X < 0) {
                HardBlock_S_Origin.splice(i, 1, {
                    X: 0,
                    Y: HardBlock_S_Origin[i].Y,
                    W: HardBlock_S_Origin[i].W,
                    H: HardBlock_S_Origin[i].H,
                });
            }

            if (HardBlock_S_Origin[i].X + HardBlock_S_Origin[i].W > canvas.width) {
                HardBlock_S_Origin.splice(i, 1, {
                    X: canvas.width - HardBlock_S_Origin[i].W,
                    Y: HardBlock_S_Origin[i].Y,
                    W: HardBlock_S_Origin[i].W,
                    H: HardBlock_S_Origin[i].H,
                });
            }

            if (HardBlock_S_Origin[i].Y < 0) {
                HardBlock_S_Origin.splice(i, 1, {
                    X: HardBlock_S_Origin[i].X,
                    Y: 0,
                    W: HardBlock_S_Origin[i].W,
                    H: HardBlock_S_Origin[i].H,
                });
            }

            if (HardBlock_S_Origin[i].Y + HardBlock_S_Origin[i].H > canvas.height) {
                HardBlock_S_Origin.splice(i, 1, {
                    X: HardBlock_S_Origin[i].X,
                    Y: canvas.height - HardBlock_S_Origin[i].H,
                    W: HardBlock_S_Origin[i].W,
                    H: HardBlock_S_Origin[i].H,
                });
            }

            if (HardBlock_S_Origin[i].W < 64) {
                HardBlock_S_Origin.splice(i, 1, {
                    X: HardBlock_S_Origin[i].X,
                    Y: HardBlock_S_Origin[i].Y,
                    W: 64,
                    H: HardBlock_S_Origin[i].H,
                });
            }

            if (HardBlock_S_Origin[i].W > Limit) {
                HardBlock_S_Origin.splice(i, 1, {
                    X: HardBlock_S_Origin[i].X,
                    Y: HardBlock_S_Origin[i].Y,
                    W: Limit,
                    H: HardBlock_S_Origin[i].H,
                });
            }

            if (HardBlock_S_Origin[i].H < 64) {
                HardBlock_S_Origin.splice(i, 1, {
                    X: HardBlock_S_Origin[i].X,
                    Y: HardBlock_S_Origin[i].Y,
                    W: HardBlock_S_Origin[i].W,
                    H: 64,
                });
            }

            if (HardBlock_S_Origin[i].H > Limit) {
                HardBlock_S_Origin.splice(i, 1, {
                    X: HardBlock_S_Origin[i].X,
                    Y: HardBlock_S_Origin[i].Y,
                    W: HardBlock_S_Origin[i].W,
                    H: Limit,
                });
            }

            HardBlock_S.splice(i, 1, {
                X: HardBlock_S_Origin[i].X,
                Y: HardBlock_S_Origin[i].Y,
                W: HardBlock_S_Origin[i].W,
                H: HardBlock_S_Origin[i].H,
            });
        }
    }

    for (let i = 0; i < HardBlock_S_Origin.length; i++) {
        ctx.drawImage(HB, HardBlock_S_Origin[i].X, HardBlock_S_Origin[i].Y, HardBlock_S_Origin[i].W, HardBlock_S_Origin[i].H);
    }

    for (let i = 0; i < HardBlock_S.length; i++) {
        ctx.drawImage(HB_S, HardBlock_S[i].X, HardBlock_S[i].Y, HardBlock_S[i].W, HardBlock_S[i].H);
    }
}

function Check() {
    if (C_Object == `` && C_Number == -1 && C_DRC == ``) {
        for (let i = 0; i < HardBlock_S.length; i++) {
            if (
                HardBlock_S[i].X < mouseX &&
                mouseX < HardBlock_S[i].X + HardBlock_S[i].W / 4 &&
                HardBlock_S[i].Y < mouseY &&
                mouseY < HardBlock_S[i].Y + HardBlock_S[i].H / 4
            ) {
                C_Object = `HardBlock_S`;
                C_Number = i;
                C_DRC = `LU`;
            } else if (
                HardBlock_S[i].X + HardBlock_S[i].W - HardBlock_S[i].W / 4 < mouseX &&
                mouseX < HardBlock_S[i].X + HardBlock_S[i].W &&
                HardBlock_S[i].Y < mouseY &&
                mouseY < HardBlock_S[i].Y + HardBlock_S[i].H / 4
            ) {
                C_Object = `HardBlock_S`;
                C_Number = i;
                C_DRC = `RU`;
            } else if (
                HardBlock_S[i].X < mouseX &&
                mouseX < HardBlock_S[i].X + HardBlock_S[i].W / 4 &&
                HardBlock_S[i].Y + HardBlock_S[i].H - HardBlock_S[i].H / 4 < mouseY &&
                mouseY < HardBlock_S[i].Y + HardBlock_S[i].H
            ) {
                C_Object = `HardBlock_S`;
                C_Number = i;
                C_DRC = `LD`;
            } else if (
                HardBlock_S[i].X + HardBlock_S[i].W - HardBlock_S[i].W / 4 < mouseX &&
                mouseX < HardBlock_S[i].X + HardBlock_S[i].W &&
                HardBlock_S[i].Y + HardBlock_S[i].H - HardBlock_S[i].H / 4 < mouseY &&
                mouseY < HardBlock_S[i].Y + HardBlock_S[i].H
            ) {
                C_Object = `HardBlock_S`;
                C_Number = i;
                C_DRC = `RD`;
            } else if (
                HardBlock_S[i].X < mouseX &&
                HardBlock_S[i].Y < mouseY &&
                mouseX < HardBlock_S[i].X + HardBlock_S[i].W &&
                mouseY < HardBlock_S[i].Y + HardBlock_S[i].H
            ) {
                C_Object = `HardBlock_S`;
                C_Number = i;
                C_DRC = `Move`;
            }
        }
    } else {
        if (C_Object == `HardBlock_S`) {
            if (C_DRC == `LU`) {
                if (
                    HardBlock_S[C_Number].X < mouseX &&
                    mouseX < HardBlock_S[C_Number].X + HardBlock_S[C_Number].W / 4 &&
                    HardBlock_S[C_Number].Y < mouseY &&
                    mouseY < HardBlock_S[C_Number].Y + HardBlock_S[C_Number].H / 4
                ) {
                    if (mouse_click) {
                        if (HardBlock_S[C_Number].W > Limit && HardBlock_S[C_Number].H > Limit) {
                            Check_Reset();
                        } else if (HardBlock_S[C_Number].W > Limit) {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X - start_mouseX + mouseX,
                                Y: HardBlock_S_Origin[C_Number].Y - start_mouseY + mouseY,
                                W: Limit + 1,
                                H: HardBlock_S_Origin[C_Number].H + start_mouseY - mouseY,
                            });
                        } else if (HardBlock_S[C_Number].H > Limit) {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X - start_mouseX + mouseX,
                                Y: HardBlock_S_Origin[C_Number].Y - start_mouseY + mouseY,
                                W: HardBlock_S_Origin[C_Number].W + start_mouseX - mouseX,
                                H: Limit + 1,
                            });
                        } else {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X - start_mouseX + mouseX,
                                Y: HardBlock_S_Origin[C_Number].Y - start_mouseY + mouseY,
                                W: HardBlock_S_Origin[C_Number].W + start_mouseX - mouseX,
                                H: HardBlock_S_Origin[C_Number].H + start_mouseY - mouseY,
                            });
                        }
                    }
                } else {
                    Check_Reset();
                }
            } else if (C_DRC == `RU`) {
                if (
                    HardBlock_S[C_Number].X + HardBlock_S[C_Number].W - HardBlock_S[C_Number].W / 4 < mouseX &&
                    mouseX < HardBlock_S[C_Number].X + HardBlock_S[C_Number].W &&
                    HardBlock_S[C_Number].Y < mouseY &&
                    mouseY < HardBlock_S[C_Number].Y + HardBlock_S[C_Number].H / 4
                ) {
                    if (mouse_click) {
                        if (HardBlock_S[C_Number].W > Limit && HardBlock_S[C_Number].H > Limit) {
                            Check_Reset();
                        } else if (HardBlock_S[C_Number].W > Limit) {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X,
                                Y: HardBlock_S_Origin[C_Number].Y - start_mouseY + mouseY,
                                W: Limit + 1,
                                H: HardBlock_S_Origin[C_Number].H + start_mouseY - mouseY,
                            });
                        } else if (HardBlock_S[C_Number].H > Limit) {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X,
                                Y: HardBlock_S_Origin[C_Number].Y - start_mouseY + mouseY,
                                W: HardBlock_S_Origin[C_Number].W - start_mouseX + mouseX,
                                H: Limit + 1,
                            });
                        } else {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X,
                                Y: HardBlock_S_Origin[C_Number].Y - start_mouseY + mouseY,
                                W: HardBlock_S_Origin[C_Number].W - start_mouseX + mouseX,
                                H: HardBlock_S_Origin[C_Number].H + start_mouseY - mouseY,
                            });
                        }
                    }
                } else {
                    Check_Reset();
                }
            } else if (C_DRC == `LD`) {
                if (
                    HardBlock_S[C_Number].X < mouseX &&
                    mouseX < HardBlock_S[C_Number].X + HardBlock_S[C_Number].W / 4 &&
                    HardBlock_S[C_Number].Y + HardBlock_S[C_Number].H - HardBlock_S[C_Number].H / 4 < mouseY &&
                    mouseY < HardBlock_S[C_Number].Y + HardBlock_S[C_Number].H
                ) {
                    if (mouse_click) {
                        if (HardBlock_S[C_Number].W > Limit && HardBlock_S[C_Number].H > Limit) {
                            Check_Reset();
                        } else if (HardBlock_S[C_Number].W > Limit) {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X - start_mouseX + mouseX,
                                Y: HardBlock_S_Origin[C_Number].Y,
                                W: Limit + 1,
                                H: HardBlock_S_Origin[C_Number].H - start_mouseY + mouseY,
                            });
                        } else if (HardBlock_S[C_Number].H > Limit) {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X - start_mouseX + mouseX,
                                Y: HardBlock_S_Origin[C_Number].Y,
                                W: HardBlock_S_Origin[C_Number].W + start_mouseX - mouseX,
                                H: Limit + 1,
                            });
                        } else {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X - start_mouseX + mouseX,
                                Y: HardBlock_S_Origin[C_Number].Y,
                                W: HardBlock_S_Origin[C_Number].W + start_mouseX - mouseX,
                                H: HardBlock_S_Origin[C_Number].H - start_mouseY + mouseY,
                            });
                        }
                    }
                } else {
                    Check_Reset();
                }
            } else if (C_DRC == `RD`) {
                if (
                    HardBlock_S[C_Number].X + HardBlock_S[C_Number].W - HardBlock_S[C_Number].W / 4 < mouseX &&
                    mouseX < HardBlock_S[C_Number].X + HardBlock_S[C_Number].W &&
                    HardBlock_S[C_Number].Y + HardBlock_S[C_Number].H - HardBlock_S[C_Number].H / 4 < mouseY &&
                    mouseY < HardBlock_S[C_Number].Y + HardBlock_S[C_Number].H
                ) {
                    if (mouse_click) {
                        if (HardBlock_S[C_Number].W > Limit && HardBlock_S[C_Number].H > Limit) {
                            Check_Reset();
                        } else if (HardBlock_S[C_Number].W > Limit) {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X,
                                Y: HardBlock_S_Origin[C_Number].Y,
                                W: Limit + 1,
                                H: HardBlock_S_Origin[C_Number].H - start_mouseY + mouseY,
                            });
                        } else if (HardBlock_S[C_Number].H > Limit) {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X,
                                Y: HardBlock_S_Origin[C_Number].Y,
                                W: HardBlock_S_Origin[C_Number].W - start_mouseX + mouseX,
                                H: Limit + 1,
                            });
                        } else {
                            HardBlock_S.splice(C_Number, 1, {
                                X: HardBlock_S_Origin[C_Number].X,
                                Y: HardBlock_S_Origin[C_Number].Y,
                                W: HardBlock_S_Origin[C_Number].W - start_mouseX + mouseX,
                                H: HardBlock_S_Origin[C_Number].H - start_mouseY + mouseY,
                            });
                        }
                    }
                } else {
                    Check_Reset();
                }
            } else if (C_DRC == `Move`) {
                if (
                    HardBlock_S[C_Number].X < mouseX &&
                    HardBlock_S[C_Number].Y < mouseY &&
                    mouseX < HardBlock_S[C_Number].X + HardBlock_S[C_Number].W &&
                    mouseY < HardBlock_S[C_Number].Y + HardBlock_S[C_Number].H
                ) {
                    if (mouse_click) {
                        HardBlock_S.splice(C_Number, 1, {
                            X: HardBlock_S_Origin[C_Number].X - start_mouseX + mouseX,
                            Y: HardBlock_S_Origin[C_Number].Y - start_mouseY + mouseY,
                            W: HardBlock_S_Origin[C_Number].W,
                            H: HardBlock_S_Origin[C_Number].H,
                        });
                    }
                } else {
                    Check_Reset();
                }
            } else {
                Check_Reset();
            }
        }
    }
}

function Move_Logo() {
    for (let i = 0; i < Logo_Move.length; i++) {
        if (Logo_Move[i].X < mouseX && Logo_Move[i].Y - Size < mouseY && mouseX < Logo_Move[i].X + Size && mouseY < Logo_Move[i].Y) {
            if (mouse_click) {
                Moving_Logo_ID = i;

                Logo_Move_Origin.splice(i, 1, {
                    X: Logo_Move_Saved[i].X - start_mouseX + mouseX,
                    Y: Logo_Move_Saved[i].Y - start_mouseY + mouseY,
                });
            } else {
                Moving_Logo_ID = -1;

                Logo_Move_Saved.splice(i, 1, {
                    X: Logo_Move_Origin[i].X,
                    Y: Logo_Move_Origin[i].Y,
                });
            }
        }

        if (Logo_Move_Origin[i].X < 0) {
            Logo_Move_Origin.splice(i, 1, {
                X: 0,
                Y: Logo_Move_Origin[i].Y,
            });
        }

        if (Logo_Move_Origin[i].Y < Size) {
            Logo_Move_Origin.splice(i, 1, {
                X: Logo_Move_Origin[i].X,
                Y: Size,
            });
        }

        if (Logo_Move_Origin[i].X > 2560 - Size) {
            Logo_Move_Origin.splice(i, 1, {
                X: 2560 - Size,
                Y: Logo_Move_Origin[i].Y,
            });
        }

        if (Logo_Move_Origin[i].Y > 1440) {
            Logo_Move_Origin.splice(i, 1, {
                X: Logo_Move_Origin[i].X,
                Y: 1440,
            });
        }
    }
}

function Get_Movement() {
    if (65 in keysDown) {
        PlayerWalking = `Back`;
    } else if (68 in keysDown) {
        PlayerWalking = `Front`;
    } else {
        PlayerWalking = `Idle`;
    }

    if (87 in keysDown) {
        PlayerUCR = `Up`;
    } else if (83 in keysDown) {
        PlayerUCR = `Crouch`;
    } else if (75 in keysDown) {
        PlayerUCR = `Run`;
    } else {
        PlayerUCR = `Nan`;
    }

    if (74 in keysDown) {
        if (!is_midair && !is_J_press) {
            is_jumping = true;

            // AI_Save_Y = PBY;

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

    GetData();
}

function Move() {
    if (PlayerWalking != `Idle`) {
        if (PlayerUCR == `Run`) {
            if (PlayerWalking == `Front`) {
                MovedX += XS * 1.5;
            } else if (PlayerWalking == `Back`) {
                MovedX -= XS * 1.5;
            }
        }
        if (PlayerUCR == `Nan`) {
            if (PlayerWalking == `Front`) {
                MovedX += XS;
            } else if (PlayerWalking == `Back`) {
                MovedX -= XS;
            }
        }
        if (PlayerUCR == `Crouch`) {
            if (PlayerWalking == `Front`) {
                MovedX += XS * 0.5;
            } else if (PlayerWalking == `Back`) {
                MovedX -= XS * 0.5;
            }
        }
    }

    if (LD[PBX_U + PBY * 40] == 01) {
        is_wall = true;

        if (PlayerX >= PBX * 64 + 24) {
            PlayerX = PBX * 64 + 24;

            if (PlayerWalking == `Front`) {
                MovedX = 0;
            }
        }
    } else if (LD[PBX + PBY * 40] == 01) {
        is_wall = true;

        if (PlayerX <= PBX_U * 64) {
            PlayerX = PBX_U * 64;

            if (PlayerWalking == `Back`) {
                MovedX = 0;
            }
        }
    } else {
        jump_stop = false;

        if (!is_J_press) {
            is_wall = false;
        }
    }

    if (LD[PBX + PBY_U * 40 - 40] == 01 && LD[PBX_U + PBY_U * 40 - 40] == 01) {
        is_jumping = false;
        jump_stop = true;
        is_top = true;
        MovedY = YS;

        if (!TOPSound.ended || PlayerUCR != `Crouch`) {
            TOPSound.play();
        }
    } else {
        is_top = false;
    }

    if (is_wall) {
        if (LD[PBX + PBY * 40 + 40] != 01 || LD[PBX_U + PBY * 40 + 40] != 01) {
            PBY++;
        }
    }

    if (LD[PBX + PBY * 40 + 40] != 01 && LD[PBX_U + PBY * 40 + 40] != 01) {
        if (is_jumping && !is_top && !jump_stop) {
            if (SavePBY - Jump_Hight <= PBY) {
                MovedY -= YS;
            } else {
                is_jumping = false;
            }
        } else if (!is_jumping) {
            MovedY += YS;
        }
    } else if (!is_top) {
        PlayerY = PBY * 64;
        MovedY = 0;
    }

    if (PlayerY == PBY * 64) {
        if (GroundSound.currentTime == 0) {
            JumpSound.pause();
            GroundSound.play();
        }

        JumpSound.currentTime = 0;

        is_midair = false;
    } else {
        if (is_jumping && JumpSound.currentTime == 0) {
            GroundSound.pause();
            JumpSound.play();
        }

        GroundSound.currentTime = 0;

        is_midair = true;
    }

    for (let i = 0; i < HardBlock_S_Origin.length; i++) {
        if (
            HardBlock_S_Origin[i].X < PlayerX + 40 &&
            PlayerX < HardBlock_S_Origin[i].X &&
            HardBlock_S_Origin[i].Y <= PlayerY + 64 &&
            PlayerY <= HardBlock_S_Origin[i].Y + HardBlock_S_Origin[i].H
        ) {
            PlayerX = PBX * 64 + 24;
            is_wall = true;

            if (PlayerWalking == `Front`) {
                MovedX = 0;
            }
        }

        if (
            HardBlock_S_Origin[i].X + HardBlock_S_Origin[i].W > PlayerX &&
            PlayerX + 40 > HardBlock_S_Origin[i].X + HardBlock_S_Origin[i].W &&
            HardBlock_S_Origin[i].Y <= PlayerY + 64 &&
            PlayerY <= HardBlock_S_Origin[i].Y + HardBlock_S_Origin[i].H
        ) {
            PlayerX = PBX_U * 64;
            is_wall = true;

            if (PlayerWalking == `Back`) {
                MovedX = 0;
            }
        }

        if (
            HardBlock_S_Origin[i].X <= PlayerX + 40 &&
            PlayerX <= HardBlock_S_Origin[i].X + HardBlock_S_Origin[i].W &&
            HardBlock_S_Origin[i].Y + HardBlock_S_Origin[i].H <= PlayerY + 64 &&
            PlayerY <= HardBlock_S_Origin[i].Y + HardBlock_S_Origin[i].H
        ) {
            is_jumping = false;
            jump_stop = true;
            is_top = true;
            MovedY = YS;

            if (!TOPSound.ended || PlayerUCR != `Crouch`) {
                TOPSound.play();
            }
        }

        if (
            HardBlock_S_Origin[i].X <= PlayerX + 40 &&
            PlayerX <= HardBlock_S_Origin[i].X + HardBlock_S_Origin[i].W &&
            HardBlock_S_Origin[i].Y <= PlayerY + 64 &&
            PlayerY <= HardBlock_S_Origin[i].Y
        ) {
            if (!is_top && !is_jumping) {
                PlayerY = HardBlock_S_Origin[i].Y - 64;
                MovedY = 0;

                is_midair = false;
            }
        }
    }

    PlayerX += MovedX;
    PlayerY += MovedY;

    MovedX *= 0.9;
    MovedY *= 0.9;

    if (PlayerX < 0) {
        PlayerX = 0;
    } else if (PlayerX > 2505) {
        PlayerX = 2505;
    }

    PBX = parseInt(PlayerX / 64);
    PBY = parseInt(PlayerY / 64);
    PBX_U = parseInt((PlayerX + 40) / 64);
    PBY_U = Math.ceil(PlayerY / 64);

    if (DeBug) {
        ctx.drawImage(HB, SavePBX * 64, SavePBY * 64);
        ctx.drawImage(HB_S, PBX * 64, PBY * 64);
        ctx.drawImage(GB_OR, PBX_U * 64, PBY_U * 64);
    }
}

function Show_Move() {
    if (!is_midair) {
        if (PlayerWalking == `Idle`) {
            if (PlayerUCR == `Crouch`) {
                ctx.drawImage(Body, PlayerX, PlayerY + 16);
            } else if (PlayerUCR == `Up`) {
                ctx.drawImage(Body, PlayerX, PlayerY - 16);
            } else {
                if (Walking_Frame == 0) {
                    ctx.drawImage(Body, PlayerX, PlayerY - 8);
                } else {
                    ctx.drawImage(Body, PlayerX, PlayerY + 8);
                }
            }

            ctx.drawImage(Idle, PlayerX, PlayerY + 48);
        } else if (PlayerWalking == `Back`) {
            if (Walking_Frame == 1) {
                ctx.drawImage(PML1, PlayerX, PlayerY + 48);
            } else if (Walking_Frame == 2) {
                ctx.drawImage(PML2, PlayerX, PlayerY + 48);
            } else if (Walking_Frame == 3) {
                ctx.drawImage(PML3, PlayerX, PlayerY + 48);
            } else if (Walking_Frame == 4) {
                ctx.drawImage(PML4, PlayerX, PlayerY + 40);
            }

            if (PlayerUCR == `Crouch`) {
                ctx.drawImage(Body, PlayerX, PlayerY + 16);
            } else if (PlayerUCR == `Up`) {
                ctx.drawImage(Body, PlayerX, PlayerY - 16);
            } else {
                ctx.drawImage(Body, PlayerX, PlayerY);
            }
        } else if (PlayerWalking == `Front`) {
            if (Walking_Frame == 1) {
                ctx.drawImage(PMR1, PlayerX, PlayerY + 48);
            } else if (Walking_Frame == 2) {
                ctx.drawImage(PMR2, PlayerX, PlayerY + 48);
            } else if (Walking_Frame == 3) {
                ctx.drawImage(PMR3, PlayerX, PlayerY + 48);
            } else if (Walking_Frame == 4) {
                ctx.drawImage(PMR4, PlayerX, PlayerY + 40);
            }

            if (PlayerUCR == `Crouch`) {
                ctx.drawImage(Body, PlayerX, PlayerY + 16);
            } else if (PlayerUCR == `Up`) {
                ctx.drawImage(Body, PlayerX, PlayerY - 16);
            } else {
                ctx.drawImage(Body, PlayerX, PlayerY);
            }
        }
    } else {
        if (PlayerUCR == `Crouch`) {
            ctx.drawImage(Body, PlayerX, PlayerY + 16);
        } else {
            ctx.drawImage(Body, PlayerX, PlayerY);
        }

        ctx.drawImage(Jump, PlayerX, PlayerY + 40);
    }
}

function Polish_Level() {
    Ground_Frame++;

    if (Ground_Frame >= 15) {
        Ground_Count++;

        if (Ground_Count > 4) {
            Ground_Count = 1;
        }

        Ground_Frame = 0;
    }

    for (let i = 0; i < LD.length; i++) {
        if (LD[i] == 01) {
            ctx.drawImage(GB_OR, (i % 40) * 64, parseInt(i / 40) * 64);

            if (LD[i - 1] == 01) {
                ctx.drawImage(GB_L, (i % 40) * 64, parseInt(i / 40) * 64);
            }
            if (LD[i + 1] == 01) {
                ctx.drawImage(GB_R, (i % 40) * 64, parseInt(i / 40) * 64);
            }
            if (parseInt(i / 40) == 0 || LD[i - 40] == 01) {
                ctx.drawImage(GB_U, (i % 40) * 64, parseInt(i / 40) * 64);
            }
            if (parseInt(i / 40) == 21 || LD[i + 40] == 01) {
                ctx.drawImage(GB_D, (i % 40) * 64, parseInt(i / 40) * 64);
            }
        } else if (LD[i] == 02 || LD[i] == 52) {
            if (parseInt(i / 40) != 0 && LD[i - 40] == 00) {
                if (Ground_Count == 1) {
                    ctx.drawImage(Lava1, (i % 40) * 64, parseInt(i / 40) * 64);
                } else if (Ground_Count == 2) {
                    ctx.drawImage(Lava2, (i % 40) * 64, parseInt(i / 40) * 64);
                } else if (Ground_Count == 3) {
                    ctx.drawImage(Lava3, (i % 40) * 64, parseInt(i / 40) * 64);
                } else if (Ground_Count == 4) {
                    ctx.drawImage(Lava4, (i % 40) * 64, parseInt(i / 40) * 64);
                }
            } else {
                ctx.drawImage(Lava_OR, (i % 40) * 64, parseInt(i / 40) * 64);
            }
        }
    }
}

function Pause_Scene() {
    is_Pause = !is_Pause;

    if (is_Pause) {
        if (Pause_Timer <= 0) {
            Pause_Timer = 0;
        }

        Pause.play();
    } else {
        if (Pause_Timer >= 1) {
            Pause_Timer = 1;
        }

        PO.play();
    }
}

function Pause_And_Set() {
    if (is_Pause) {
        Pause_Timer += 0.03;
    } else {
        Pause_Timer -= 0.03;
    }

    Main_Set();

    ctx.globalAlpha = Pause_Timer;

    ctx.drawImage(GOBG, 0, 0);

    ctx.drawImage(GOBG, 0, 0);

    ctx.font = `128px Pixel`;
    ctx.fillStyle = `moccasin`;
    ctx.fillText(`PAUSE`, 896, 360);

    Select_Screen();

    ctx.fillText(`Enter : Unpause`, 1008, 1080);

    ctx.drawImage(Skull_Icon, 696, 1160);
    ctx.fillText(`(  : It Shows How Much You Have Died)`, 664, 1208);

    ctx.globalAlpha = 1;
}

function Select_Screen() {
    ctx.font = `32px Pixel`;

    if (Pointer == 1 || Pointer > 2) {
        Pointer = 1;

        ctx.drawImage(TRNG, 864, 496);
        ctx.drawImage(S_Box, 928, 480);
        ctx.drawImage(S_TA, 936, 488);
        ctx.drawImage(NS_Box, 928, 720);
        ctx.drawImage(NS_Home, 936, 728);

        ctx.fillStyle = `black`;
        ctx.fillText(`Try Again.`, 1056, 528);

        ctx.fillStyle = `white`;
        ctx.fillText(`Go To Title.`, 1040, 768);
    } else if (Pointer == 2 || Pointer < 1) {
        Pointer = 2;

        ctx.drawImage(TRNG, 864, 736);
        ctx.drawImage(NS_Box, 928, 480);
        ctx.drawImage(NS_TA, 936, 488);
        ctx.drawImage(S_Box, 928, 720);
        ctx.drawImage(S_Home, 936, 728);

        ctx.fillStyle = `white`;
        ctx.fillText(`Try Again.`, 1056, 528);

        ctx.fillStyle = `black`;
        ctx.fillText(`Go To Title.`, 1040, 768);
    }

    ctx.fillStyle = `white`;
    ctx.fillText(`W : Up, D : Down, J : Select`, 800, 1024);
}

function Set_Not_Died() {
    for (let i = 0; i < HardBlock_S.length; i++) {
        for (let l = 0; l < Math.ceil(HardBlock_S[i].W / 64); l++) {
            for (let m = 0; m < Math.ceil(HardBlock_S[i].H / 64); m++) {
                LD[Math.ceil(HardBlock_S[i].X / 64) + l + Math.ceil(HardBlock_S[i].Y / 64) * 40 + m * 40] =
                    50 + (LD[Math.ceil(HardBlock_S[i].X / 64) + l + Math.ceil(HardBlock_S[i].Y / 64) * 40 + m * 40] % 10);
            }
        }
    }

    for (let i = 0; i < LD.length; i++) {
        if (parseInt(LD[i] / 10) == 5) {
            if (LD[i] != 52) {
                LD[i] = LD[i] - 50;
            } else {
                for (let l = 0; l < HardBlock_S.length; l++) {
                    if (i != Math.ceil(HardBlock_S[l].X / 64) + Math.ceil(HardBlock_S[l].Y / 64) * 40) {
                        LD[i] = LD[i] - 50;
                    }
                }
            }
        }
    }

    if (DeBug) {
        for (let i = 0; i < HardBlock_S.length; i++) {
            for (let l = 0; l < Math.ceil(HardBlock_S[i].W / 64); l++) {
                for (let m = 0; m < Math.ceil(HardBlock_S[i].H / 64); m++) {
                    ctx.drawImage(Time, Math.ceil(HardBlock_S[i].X / 64) * 64 + 16 + l * 64, Math.ceil(HardBlock_S[i].Y / 64) * 64 + 16 + m * 64);
                }
            }
        }
    }
}

function Set_Died_Audio() {
    if (!is_Died) {
        Game_Over.pause();
        Game_Over.currentTime = 0;
    }

    Pause.pause();
    Pause.currentTime = 0;
    PO.pause();
    PO.currentTime = 0;
}

function Main_Set() {
    ctx.drawImage(BS, 0, 0);

    Load_Level();
    Polish_Level();
    Show_Move();
}

function Home_Set() {
    Main_Set();

    ctx.font = `${Size}px Pixel`;
    ctx.fillStyle = `goldenrod`;

    for (let i = 0; i < Logo_Move.length; i++) {
        Logo_Move.splice(i, 1, {
            X: Logo_Move[i].X,
            Y: Logo_Move[i].Y,
            Logo_Timer: Logo_Move[i].Logo_Timer + 1,
            Ran_Time: Logo_Move[i].Ran_Time,
        });

        if (Logo_Move[i].Logo_Timer >= Logo_Move[i].Ran_Time) {
            Logo_Move.splice(i, 1, {
                X: Logo_Move_Origin[i].X + Math.random() * 7.5 - 15,
                Y: Logo_Move_Origin[i].Y + Math.random() * 7.5 - 15,
                Logo_Timer: 0,
                Ran_Time: Math.random() * 30,
            });
        }

        if (i == 0) {
            STR = `W`;
        } else if (i == 1) {
            STR = `e`;
        } else if (i == 2) {
            STR = `i`;
        } else if (i == 3) {
            STR = `r`;
        } else if (i == 4) {
            STR = `d`;
        } else if (i == 5) {
            STR = `P`;
        } else if (i == 6) {
            STR = `r`;
        } else if (i == 7) {
            STR = `o`;
        } else if (i == 8) {
            STR = `j`;
        } else if (i == 9) {
            STR = `e`;
        } else if (i == 10) {
            STR = `c`;
        } else if (i == 11) {
            STR = `t`;
        }

        if (Moving_Logo_ID != i) {
            ctx.fillText(`${STR}`, Logo_Move[i].X, Logo_Move[i].Y);
        } else {
            ctx.fillText(`${STR}`, Logo_Move_Origin[i].X, Logo_Move_Origin[i].Y);
        }

        if (DeBug) {
            ctx.drawImage(Time, Logo_Move[i].X, Logo_Move[i].Y - Size, Size / 8, Size / 8);
            ctx.drawImage(Time, Logo_Move[i].X + Size - Size / 4, Logo_Move[i].Y - Size, Size / 8, Size / 8);
            ctx.drawImage(Time, Logo_Move[i].X, Logo_Move[i].Y - Size / 4, Size / 8, Size / 8);
            ctx.drawImage(Time, Logo_Move[i].X + Size - Size / 4, Logo_Move[i].Y - Size / 4, Size / 8, Size / 8);
        }
    }
}

function Go_To_Home() {
    if (GTH.currentTime == 0) {
        GTH.play();
    }

    PBX = 1;
    PBX_U = 1;
    PBY = 20;
    PBY_U = 20;
    SavePBX = 1;
    SavePBY = 20;
    PlayerX = 64;
    PlayerY = 1280;
    MovedX = 0;
    MovedY = 0;

    Home_Set();

    Died_Timer -= 0.03;

    ctx.globalAlpha = Died_Timer;

    ctx.drawImage(GOBG, 0, 0);

    ctx.globalAlpha = 1;

    if (Died_Timer <= 0) {
        is_inGame = false;

        is_Died = false;
    }
}

function Try_Again() {
    PBX = 1;
    PBX_U = 1;
    PBY = 20;
    PBY_U = 20;
    SavePBX = 1;
    SavePBY = 20;
    PlayerX = 64;
    PlayerY = 1280;
    MovedX = 0;
    MovedY = 0;

    Main_Set();

    Died_Timer -= 0.03;

    ctx.globalAlpha = Died_Timer;

    ctx.drawImage(GOBG, 0, 0);

    if (Died_Timer <= 0) {
        J_Press.currentTime = 0;

        Get_Select = 0;

        Died_Count++;

        is_Died = false;

        Load_Time();
    }

    ctx.globalAlpha = 1;
}

function Check_is_Died() {
    if (LD[PBX + PBY_U * 40] == 02 || LD[PBX_U + PBY_U * 40] == 02) {
        is_Died = true;
    } else {
        XS = 0.5;
        YS = 2;
        Pointer = 1;
        Died_Timer = 0;

        is_Died = false;
    }

    if (PlayerY >= 1425) {
        is_Died = true;
    }

    if (Timer <= 0) {
        is_Died = true;
    }
}

function Died() {
    Main_Set();

    is_Pause = false;
    Pause_Timer = 0;

    GTH.currentTime = 0;
    WTH.currentTime = 0;

    if (Died_Timer == 0) {
        Game_Over.play();
    }

    Died_Timer += 0.03;

    XS = 0;
    YS = 0;

    ctx.globalAlpha = Died_Timer;

    ctx.drawImage(GOBG, 0, 0);

    ctx.font = `128px Pixel`;
    ctx.fillStyle = `purple`;
    ctx.fillText(`MISS`, 960, 360);

    Select_Screen();

    ctx.globalAlpha = 1;
}

function InHome() {
    if (WTH.currentTime == 0) {
        WTH.play();
    }

    Home_Set();

    Move_Logo();

    AIstartCounter++;

    if (AIstartCounter >= 240) {
        AImove();
    }

    AIshowMove();

    ctx.fillStyle = `white`;

    ctx.font = `32px Pixel`;

    ctx.fillText(`output : ${output}`, 100, 100);
}

function InGame() {
    Get_Select = 0;
    Died_Timer = 0;
    AIstartCounter = 0;

    if (Saved_Level != Level) {
        Load_Time();

        Saved_Level = Level;
    }

    Timer_Frame++;

    if (Timer_Frame >= 60) {
        Timer--;

        Timer_Frame = 0;
    }

    if (BGM1.currentTime == 0 || BGM1.ended) {
        //BGM1.play()
    }

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
        if (PlayerUCR == `Crouch`) {
            if (Frame >= 15) {
                Walking_Frame++;

                if (Walking_Frame >= 5) {
                    if (!is_midair) {
                        WalkSound.play();
                    }

                    Walking_Frame = 1;
                }

                Frame = 0;
            }
        } else if (PlayerUCR == `Run`) {
            if (Frame >= 5) {
                Walking_Frame++;

                if (Walking_Frame >= 5) {
                    if (!is_midair) {
                        WalkSound.play();
                    }

                    Walking_Frame = 1;
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

    Frame++;

    Main_Set();

    Check();
    Check_Set();
    Move();
    Get_Movement();

    ctx.font = `32px Pixel`;

    if (Timer > 100) {
        ctx.fillStyle = `white`;
    } else {
        ctx.fillStyle = `red`;
    }

    ctx.drawImage(Time, 2320, 80);
    ctx.fillText(`${Timer}`, 2368, 112);

    ctx.fillStyle = `white`;

    if (DeBug) {
        Show_Move();

        ctx.fillText(`mouse_click : ${mouse_click}`, 100, 100);
        ctx.fillText(`C_Object : ${C_Object}`, 100, 150);
        ctx.fillText(`C_Number : ${C_Number}`, 100, 200);
        ctx.fillText(`C_DRC : ${C_DRC}`, 100, 250);

        ctx.fillText(`is_midair : ${is_midair}`, 100, 350);
        ctx.fillText(`jump_stop : ${jump_stop}`, 100, 400);
        ctx.fillText(`is_jumping : ${is_jumping}`, 100, 450);
        ctx.fillText(`is_wall : ${is_wall}`, 100, 500);
        ctx.fillText(`is_J_press : ${is_J_press}`, 100, 550);

        ctx.fillText(`JumpSound : ${JumpSound.currentTime}`, 100, 650);
        ctx.fillText(`GroundSound : ${GroundSound.currentTime}`, 100, 700);
        ctx.fillText(`TOPSound : ${TOPSound.currentTime}`, 100, 750);
        ctx.fillText(`WalkSound : ${WalkSound.currentTime}`, 100, 800);

        ctx.fillText(`BGM1 : ${BGM1.currentTime}`, 100, 900);

        ctx.fillText(`Walking_Frame : ${Walking_Frame}`, 100, 1000);

        ctx.fillText(`Level : ${Level}`, 100, 1050);

        ctx.fillText(`is_Died : ${is_Died}`, 100, 1150);
        ctx.fillText(`Died_Count : ${Died_Count}`, 100, 1200);
    } else {
        ctx.fillText(`Level ${Level}`, 128, 112);

        ctx.drawImage(Skull, 512, 80);
        ctx.fillText(` X ${Died_Count}`, 544, 112);
    }

    Set_Not_Died();

    Check_is_Died();

    localStorage.setItem(`Died_Count`, Died_Count);
}

function MousePointer() {
    if (Color == `red`) {
        ctx.drawImage(Click, mouseX - 8, mouseY - 8);
    } else if (Color == `blue`) {
        ctx.drawImage(DbClick, mouseX - 8, mouseY - 8);
    } else if (Color == `green`) {
        ctx.drawImage(UnClick, mouseX - 8, mouseY - 8);
    }
}

function DEBUGGING() {
    console.log(`WTF`);
}

function main() {
    if (!is_Game_Start) {
        Start();
    } else {
        if (!is_Pause && !is_Cut_Scene && !is_Died && Pause_Timer <= 0) {
            if (is_inGame) {
                InGame();
            } else {
                InHome();
            }
        } else if (!is_Pause && Pause_Timer <= 0) {
            if (is_Cut_Scene) {
                Cut_Scene();
            } else if (is_Died && Get_Select == 0) {
                Died();
            } else if (is_Died && Get_Select == 1) {
                Try_Again();
            } else if (is_Died && Get_Select == 2) {
                Go_To_Home();
            }
        } else if (!is_Died && !is_Cut_Scene && is_inGame) {
            Pause_And_Set();
        }
    }

    if (is_Cut_Scene || !is_inGame || is_Died) {
        Set_Died_Audio();

        is_Pause = false;
    }

    requestAnimationFrame(main);
}

loadImage();
loadAudio();
setEventListener();

main();
