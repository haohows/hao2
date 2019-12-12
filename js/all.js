var position = '';
var trueValuen = '';
var inputPosition = '';
var inputValue = '';
var gethatchName = '';


var mv = new Vue({
    el: '#app',
    data: {
        name: '',
        teamNum: '',
        teamScore: 0,
        visibility: '線索',
        loading: false,
        clue: true,
        hatch: false,
        score: false,
        HL: 0,
        HLE: 0,
        openHLWest: false,
        openHLEast: false,
        // // 解開線索後儲存進來的可孵化指令
        // hatchcode: [],
        // // 孵化輸入欄內容
        // hatchcodein: '',
        // // 避免再次孵化檢核-內容
        // hatchcodech: [],
        // // 避免再次孵化檢核-互動視窗
        // hatchdbch: [],
        status: [{
                Q01R: false,
                Q01A: '',
                nothatchagain: false,
            },
            {
                Q02R: false,
                Q02A: '',
                nothatchagain: false,
            },
            {
                Q03R: false,
                Q03A: '',
                nothatchagain: false,
            },
            {
                Q04R: false,
                Q04A: '',
                nothatchagain: false,
            },
            {
                Q05R: false,
                Q05A: '',
                nothatchagain: false,
            },
            {
                Q06R: false,
                Q06A: '',
                nothatchagain: false,
            },
            {
                Q07R: false,
                Q07A: '',
                nothatchagain: false,
            },
            {
                Q08R: false,
                Q08A: '',
                nothatchagain: false,
            },
            {
                Q09R: false,
                Q09A: '',
                nothatchagain: false,
            },
            {
                Q10R: false,
                Q10A: '',
                nothatchagain: false,
            },
            {
                Q11R: false,
                Q11A: '',
                nothatchagain: false,
            },
            {
                Q12R: false,
                Q12A: '',
                nothatchagain: false,
            },

        ]
    },
    methods: {
        changeclue() {
            this.visibility = '線索';
            this.clue = true;
            this.hatch = false;
            this.score = false;
        },
        changehatch() {
            this.visibility = '回收';
            this.clue = false;
            this.hatch = true;
            this.score = false;
        },
        changescore() {
            this.visibility = '積分';
            this.clue = false;
            this.hatch = false;
            this.score = true;
        },
        gethatch() {
            gethatchName = this.hatchcodein;
            console.log(this.hatchcodein);
        },
        // hatchactive() {
        //     let check = 0;
        //     let hatchDbCh = 0;
        //     let hatchcodeinText = this.hatchcodein;
        //     for (let i = 0; i < this.hatchcode.length; i++) {
        //         if (this.hatchcode[i] == this.hatchcodein) {
        //             check += 1;
        //             this.hatchcodech.push(this.hatchcodein);
        //         }
        //     };
        //     for (let i = 0; i < this.hatchcodech.length; i++) {
        //         if (this.hatchcodech[i] == this.hatchcodein) {
        //             hatchDbCh += 1;
        //         }
        //     };
        //     if (check == 1 && hatchDbCh == 1) {
        //         console.log('可以孵化');
        //         console.log('check= ' + check);
        //         console.log('hatchDbCh=' + hatchDbCh);

        //         this.status.forEach(function(item, index, array) {
        //             if (item.hatch === hatchcodeinText) {
        //                 item.nothatchagain = true;
        //             }
        //         });
        //         this.hatchcodein = '';
        //         this.setnewlocadata();
        //         this.teamScore = this.teamScore + 100;
        //     } else {
        //         console.log('不能孵化');
        //         console.log('check= ' + check);
        //         console.log('hatchDbCh=' + hatchDbCh);
        //         this.hatchcodein = '';
        //     }
        // },
        F01A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[0].Q01A) {
                this.status[0].Q01R = true;
                this.status[0].nothatchagain = true;
                this.teamScore = this.teamScore + 300;
                // this.hideLevelW();
                this.HLE = this.HLE + 1;
                // this.hideLevelE();
                this.setnewlocadata();
            }
        },
        F02A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[1].Q02A) {
                this.status[1].Q02R = true;
                this.status[1].nothatchagain = true;
                this.teamScore = this.teamScore + 300;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F03A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[2].Q03A) {
                this.status[2].Q03R = true;
                this.status[2].nothatchagain = true;
                this.teamScore = this.teamScore + 300;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F04A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[3].Q04A) {
                this.status[3].Q04R = true;
                this.status[3].nothatchagain = true;
                this.teamScore = this.teamScore + 300;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F05A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[4].Q05A) {
                this.status[4].Q05R = true;
                this.status[4].nothatchagain = true;
                this.teamScore = this.teamScore + 300;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F06A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[5].Q06A) {
                this.status[5].Q06R = true;
                this.status[5].nothatchagain = true;
                this.teamScore = this.teamScore + 400;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F07A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[6].Q07A) {
                this.status[6].Q07R = true;
                this.status[6].nothatchagain = true;
                this.teamScore = this.teamScore + 400;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F08A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[7].Q08A) {
                this.status[7].Q08R = true;
                this.status[7].nothatchagain = true;
                this.teamScore = this.teamScore + 400;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F09A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[8].Q09A) {
                this.status[8].Q09R = true;
                this.status[8].nothatchagain = true;
                this.teamScore = this.teamScore + 500;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F10A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[9].Q10A) {
                this.status[9].Q10R = true;
                this.status[9].nothatchagain = true;
                this.teamScore = this.teamScore + 500;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F11A(val) {
            this.HL = this.HL + 1;
            if (val === this.status[10].Q11A) {
                this.status[10].Q11R = true;
                this.status[10].nothatchagain = true;
                this.teamScore = this.teamScore + 800;
                this.HLE = this.HLE + 1;
                this.setnewlocadata();
            }
        },
        F12A(val) {
            if (val === this.status[11].Q12A) {
                this.status[11].Q12R = true;
                this.status[11].nothatchagain = true;
                this.teamScore = this.teamScore + 1000;
                this.setnewlocadata();
            }
        },

        setnewlocadata() {
            localStorage.setItem('locadata', JSON.stringify(this.$data));
        },

        hideLevelW() {
            if (this.teamScore >= 2100 && this.HL <= 15 && this.openHLWest == false) {
                // if (this.openHLWest == false) {
                this.openHLWest = true;
                alert(`「咦！？這個圖案是...這似乎在之前的線索中也出現過...？」，搜查巨獸的過程中，在你敏銳的觀察力之下，你發現了一條隱密的線索，而這線索並不在現有的暗號之內...`);
                alert('隱藏條件已滿足，開放【藏匿點-傳說】！');
                this.setnewlocadata();
                // }

            }
        },

        hideLevelE() {
            if (this.HLE == 11 && this.openHLEast == false) {
                this.openHLEast = true;
                alert('「太好了，總算是找到所有隱藏的巨獸了！」，你的其他隊友正大聲的慶賀著任務的圓滿完成，但你的心中卻依然仍有一絲的不安，似乎有什麼重要的關鍵被遺漏了？也許是自己多慮了吧？壓下心中的不安，你笑著走向隊員們，正打算一同歡慶，但就在這個時候，你腦海中突然閃過一段畫面，剎那間所有的線索都被連貫了起來，「原來是這樣！在此處還藏有一頭神秘的巨獸，而這才是神秘組織的真正目的，這下大事不好了！」');
                alert('隱藏條件已滿足，開放【藏匿點-神話】！');
                this.setnewlocadata();
            }
        },
    },
    mounted() {
        if (JSON.parse(localStorage.getItem('locadata')) == null) {
            localStorage.setItem('locadata', JSON.stringify(this.$data));
            this.loading = true;
        } else if (JSON.parse(localStorage.getItem('locadata')) !== null) {
            let newdata = JSON.parse(localStorage.getItem('locadata'));
            // this.teamName = newdata.teamName;
            this.clue = true;
            // this.teamNum = newdata.teamNum;
            this.teamScore = newdata.teamScore;
            this.visibility = '線索';
            this.clue = true;
            this.hatch = false;
            this.score = false;
            this.hatchcode = newdata.hatchcode;
            this.hatchcodein = '';
            this.hatchcodech = newdata.hatchcodech;
            this.hatchdbch = newdata.hatchdbch;
            this.status = newdata.status;
            this.loading = true;
            this.HL = newdata.HL;
            this.HLE = newdata.HLE;
            this.openHLWest = newdata.openHLWest;
            this.openHLEast = newdata.openHLEast;
        }
        let userdata = JSON.parse(localStorage.getItem('user'));
        this.teamNum = userdata.teamNum;
        this.name = userdata.name;



        $(function() {
            $('.hamburger').on('click', function() {
                $(this).toggleClass('lineActive').closest('.list-group-item').siblings().find('.hamburger').removeClass('lineActive');
                $(this).closest('.list-group-item').toggleClass('openClue').siblings().removeClass('openClue');

                let emptyAsn = document.querySelectorAll('.point');
                for (let i = 0; i < emptyAsn.length; i++) {
                    emptyAsn[i].value = '';
                };
                inputValue.value = '';
            });


            $('.w-style').on('click', function() {
                $(this).parent().parent().siblings().find('li').removeClass('openClue');
                $(this).parent().parent().siblings().find('.hamburger').removeClass('lineActive');

                let emptyAsn = document.querySelectorAll('.point');
                for (let i = 0; i < emptyAsn.length; i++) {
                    emptyAsn[i].value = '';
                };
                inputValue.value = '';
                mv.hatchcodein = '';

            });
        });


        $(function() {
            $('#standardModal').on('show.bs.modal', function(event) {
                position = $(event.relatedTarget);
                trueValuen = position[0];
                inputPosition = position.parent().siblings();
                inputValue = inputPosition[0];
                if (inputValue.value !== trueValuen.value) {
                    let recipient = '哎呀，解密結果似乎不太正確耶...'
                    let modal = $(this);
                    modal.find('.modal-body').text(recipient);
                    inputValue.value = '';
                } else {
                    let recipient = '好極了！你回收了新的巨獸！'
                    let modal = $(this)
                    modal.find('.modal-body').text(recipient);
                }
            });





            // $('#hatchModal').on('show.bs.modal', function(event) {
            //     let btn = $(event.relatedTarget);
            //     let check = '';
            //     let hatchDb = '';
            //     for (let i = 0; i < mv.hatchcode.length; i++) {
            //         if (mv.hatchcode[i] == gethatchName) {
            //             check = true;
            //         }
            //     };
            //     for (let i = 0; i < mv.hatchdbch.length; i++) {
            //         if (mv.hatchdbch[i] == gethatchName) {
            //             hatchDb = true;
            //         }
            //     };
            //     if (check !== true) {
            //         let recipient = '哎呀，看來似乎是指令碼不正確，亦或是您尚未解開該線索唷！'
            //         let modal = $(this);
            //         modal.find('.modal-body').text(recipient);
            //     } else if (check == true && hatchDb == true) {
            //         let recipient = '您已經孵化過該生物了唷！'
            //         let modal = $(this)
            //         modal.find('.modal-body').text(recipient);
            //     } else {
            //         mv.hatchdbch.push(gethatchName);
            //         let recipient = '太棒了！您孵化出新的生物了！'
            //         let modal = $(this)
            //         modal.find('.modal-body').text(recipient);
            //         mv.setnewlocadata();

            //     }

            // });
        });
    },
})