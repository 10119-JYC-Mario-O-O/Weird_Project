let SF = 0;
let Count = 0;
let Said = '';
let Said1 = '';
let Show = '';
let Show1 = '';
let Speaker = '';
let Story_J_press = false;
let is_skip = false;
let is_End = false;
let End_Cut_Scene = [8];

function Cut_Scene() {
    is_Pause = false;
    Pause_Timer = 0;

    ctx.drawImage(Gray_Box, 128, 992);

    if (74 in keysDown) {
        Story_J_press = true;
    } else {
        if (Story_J_press) {
            if (is_skip) {
                is_End = true;

                End.play();
            } else {
                is_skip = true;

                End.play();
            }
        }

        Story_J_press = false;
    }

    write();

    ctx.fillText(`Press "J" to Skip.`, 1824, 1240);
}

function write() {
    ctx.font = '32px Pixel';
    ctx.fillStyle = 'white';
    ctx.fillText(Show, 192, 1090);
    ctx.fillText(Show1, 192, 1154);

    SF++;

    if (SF >= 7) {
        Set_Said();

        Count++;

        if (!is_skip) {
            System_Audio.pause();
            System_Audio.currentTime = 0;
            System_Audio.play();
        } else {
            Count = Said.length + Said1.length;
        }

        SF = 0;
    }
}

function Set_Show() {
    Show_Face();

    Show = Said.substr(0, Count);
    Show1 = Said1.substr(0, Count - Said.length);

    if (Count >= Said.length + Said1.length) {
        is_skip = true;
    }

    if (is_End) {
        Story++;

        is_skip = false;
        is_End = false;

        Count = 0;

        for (let i = 0; i < End_Cut_Scene.length; i++) {
            if (Story == End_Cut_Scene[i] + 1) {
                is_Cut_Scene = false;
            }
        }
    }
}

function Show_Face() {
    if (Speaker == 'QQQ') {
        ctx.drawImage(QQQ, 128, 864);
    }

    if (Speaker == 'System') {
        ctx.drawImage(System, 128, 864);
    }

    if (Speaker == 'LTDL') {
        ctx.drawImage(LTDL, 128, 864);
    }
}

function Set_Said() {
    localStorage.setItem('Story', Story);

    if (Story == 1) {
        Speaker = 'QQQ';

        Said = `HE"I_I_"O! (Developer : It says "Hello".)`;
        Said1 = '';

        Set_Show();
    }

    if (Story == 2) {
        Speaker = 'System';

        Said = `I'm the System in this game.`;
        Said1 = '';

        Set_Show();
    }

    if (Story == 3) {
        Speaker = 'System';

        Said = `I can't pronounce "I_" right. (Developer : "I_" = "L")`;
        Said1 = '';

        Set_Show();
    }

    if (Story == 4) {
        Speaker = 'System';

        Said = `I A"I_"WAYS pronounce "I_" as a "R".`;
        Said1 = '';

        Set_Show();
    }

    if (Story == 5) {
        Speaker = 'System';

        Said = `But It's hard to say "I_" "I_"IKE this every time.`;
        Said1 = '';

        Set_Show();
    }

    if (Story == 6) {
        Speaker = 'System';

        Said = `So I WI"I_I_" pronounce "I_" as "R" "I_"ike USUA"I_I_"Y.`;
        Said1 = `(Developer : It says "So I will pronounce "L" as "R" like usually.")`;

        Set_Show();
    }

    if (Story == 7) {
        Speaker = 'System';

        Said = `Thank you, you dumb RittRe Timmy DeveRoper.`;
        Said1 = '';

        Set_Show();
    }

    if (Story == 8) {
        Speaker = 'System';

        Said = `Anyway, Ret's start the game!`;
        Said1 = '';

        Set_Show();
    }
}
