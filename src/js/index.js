"use strict";

// for(let i = 0; i < questions.length; i++){
//     for(let q = 0; q < questions[i].length; q++){
//         if(questions[i][q].indexOf('хоть потоп') !== -1){
//             console.log(questions[i][q]);
//             console.log(answers[i][q]);
//         }
//     }
// }

var game = Vue({
   el: '.game',
   data: {
      menu: false,
      content: false,
      levels: true,
      numOfLevels: questions.length,
      levelNum: 0,
      numOfQuestions: 0,
      numOfImages: 0,
      lvl: 4,
      selectedNum: -1,
      question: 'Правда ли?',
      isAnswerGiven: false,
      answer: true,
      blackout: false,
      intervalTimer: 0,
      endGame: false,
      gotQuestions: [],
      variants: ['0', '1', '2', '3'],
      numQ: 0,
      activeVariant: -1,
      rightVariant: -1,
      rightAnswer: -1,
      wrongAnswer: -1,
      nGame: 0,
      canGiveAnswer: false
   },
   methods: {
      startGame: function startGame() {
         this.numOfQuestions = 0;
         this.nGame++;
         this.getQuestion();
         this.getVariants();
         this.content = true;
         this.levels = false;
         this.endGame = false;
      },
      getQuestion: function getQuestion() {
         this.numQ = Math.floor(Math.random() * questions[this.numOfQuestions].length);
         this.question = questions[this.numOfQuestions][this.numQ];
      },
      getVariants: function getVariants() {
         var _this = this;

         this.activeVariant = -1;
         this.rightAnswer = -1;
         this.wrongAnswer = -1;
         this.variants = ['', '', '', ''];
         var possibleVariants = [0, 1, 2, 3];
         var variants = [];

         for (var _i2 = 0; _i2 < 4; _i2++) {
            var index = Math.floor(Math.random() * possibleVariants.length);
            var rand = possibleVariants[index];

            if (_i2 === 0) {
               this.rightVariant = rand;
            }

            variants[rand] = answers[this.numOfQuestions][this.numQ][_i2];
            possibleVariants.splice(index, 1);
         }

         var thisgame = this.nGame;
         this.canGiveAnswer = false;

         var _loop = function _loop(_i3) {
            setTimeout(function () {
               if (_this.nGame !== thisgame) return;

               _this.setVariant(_i3, variants[_i3]);

               if (_i3 === 3) _this.canGiveAnswer = true;
            }, 750 * _i3 + 750);
         };

         for (var _i3 = 0; _i3 < 4; _i3++) {
            _loop(_i3);
         }
      },
      setVariant: function setVariant(index, q) {
         this.variants.splice(index, 1, q);
      },
      setAnswer: function setAnswer(variant) {
         if (this.rightAnswer !== -1 || this.variants[variant] === '') return;
         this.activeVariant = variant;
      },
      giveAnswer: function giveAnswer() {
         if (!this.canGiveAnswer || this.activeVariant === -1) return;

         if (this.endGame) {
            this.startGame();
            return;
         }

         if (this.rightAnswer !== -1) {
            this.nextLevel();
            return;
         }

         this.rightAnswer = this.rightVariant;
         },
         nextLevel: function nextLevel() {
            this.numOfQuestions++;
            this.getQuestion();
            this.getVariants();
         },
         returnMenu: function returnMenu() {
            this.content = false;
            this.endGame = false;
            this.levels = true;
         },
         win: function win() {
            for (var _i5 = 0; _i5 < 4; _i5++) {
               this.variants[_i5] = 'Победа';
            }

            this.endGame = true;
            this.rightAnswer = -1;
            this.wrongAnswer = -1;
            this.question = 'Поздравляем! Вы стали ближе ко мудрости древних, юный вирмлинг!';
         },
      },

      mounted: function mounted() {
      this.$nextTick(function () {
         document.querySelector(".start").remove();
      });
   }
});